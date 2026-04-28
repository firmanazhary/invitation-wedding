import { motion } from 'framer-motion';
import { DATA_PENGANTIN } from '../constans/content';
import bunga from '../assets/bunga.png';
import wayang from '../assets/wayang.png';
// ─── SVG Ornamen Inline ──────────────────────────────────────────────────────

/** Gunungan / Pohon Hayat — ikon utama hero */
const Gunungan = () => (
  <svg viewBox="0 0 160 220" className="w-24 md:w-32 mx-auto" xmlns="http://www.w3.org/2000/svg">
    {/* Outer frame */}
    <path d="M80 10 L150 205 L10 205 Z" fill="none" stroke="#C9983A" strokeWidth="2"/>
    {/* Inner frame */}
    <path d="M80 22 L140 200 L20 200 Z" fill="none" stroke="#8B1A1A" strokeWidth="1" opacity="0.5"/>
    {/* Trunk */}
    <rect x="74" y="158" width="12" height="38" fill="#8B1A1A" rx="2"/>
    {/* Ground base */}
    <ellipse cx="80" cy="196" rx="18" ry="4" fill="#8B1A1A" opacity="0.3"/>
    {/* Branches — layer 1 */}
    <path d="M80 158 Q62 138 44 118 Q64 130 80 150" fill="#4A6741" opacity="0.85"/>
    <path d="M80 158 Q98 138 116 118 Q96 130 80 150" fill="#4A6741" opacity="0.85"/>
    {/* Branches — layer 2 */}
    <path d="M80 128 Q56 104 36 82 Q60 100 80 120" fill="#4A6741" opacity="0.8"/>
    <path d="M80 128 Q104 104 124 82 Q100 100 80 120" fill="#4A6741" opacity="0.8"/>
    {/* Branches — layer 3 */}
    <path d="M80 96 Q62 72 52 48 Q68 70 80 88" fill="#4A6741" opacity="0.75"/>
    <path d="M80 96 Q98 72 108 48 Q92 70 80 88" fill="#4A6741" opacity="0.75"/>
    {/* Crown */}
    <circle cx="80" cy="30" r="14" fill="#C9983A" opacity="0.95"/>
    <text x="80" y="36" textAnchor="middle" fontSize="13" fill="#6B1414">✦</text>
    {/* Gorgat accent pada tangkai */}
    {[170, 180, 190].map((y, i) => (
      <polygon key={i}
        points={`${68 + i * 4},${y} ${74 + i * 4},${y - 6} ${80 + i * 4},${y} ${74 + i * 4},${y + 6}`}
        fill="#C9983A" opacity="0.6"
      />
    ))}
  </svg>
);

/** Gorgat chain divider */
const GorgatDivider = ({ width = 180 }) => (
  <svg viewBox={`0 0 ${width} 20`} style={{ width }} className="opacity-60"
       xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="10" x2={width} y2="10" stroke="#C9983A" strokeWidth="0.5" opacity="0.4"/>
    {Array.from({ length: Math.floor(width / 18) }, (_, i) => {
      const cx = 9 + i * 18;
      return <polygon key={i} points={`${cx},3 ${cx + 7},10 ${cx},17 ${cx - 7},10`} fill="#C9983A"/>;
    })}
  </svg>
);

/** Tekstur Ulos sebagai pattern background */
const UlosBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ulos-hero" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
        <path d="M0 15 Q15 0 30 15 Q45 30 60 15" stroke="#C9983A" strokeWidth="1" fill="none" opacity="0.12"/>
        <path d="M0 15 Q15 30 30 15 Q45 0 60 15" stroke="#8B1A1A" strokeWidth="0.6" fill="none" opacity="0.08"/>
        <circle cx="30" cy="15" r="1.5" fill="#C9983A" opacity="0.15"/>
        <rect x="0" y="0" width="4" height="30" fill="#8B1A1A" opacity="0.04"/>
        <rect x="56" y="0" width="4" height="30" fill="#8B1A1A" opacity="0.04"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ulos-hero)"/>
  </svg>
);

/** Corner ukiran — pucuk rebung sudut */
const Corner = ({ className = '' }) => (
  <svg viewBox="0 0 100 100" className={`w-24 md:w-36 opacity-50 ${className}`}
       xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0 Q50 0 50 50 Q50 0 100 0" fill="none" stroke="#C9983A" strokeWidth="1.8"/>
    <path d="M0 0 Q32 0 32 32 Q32 0 64 0" fill="none" stroke="#8B1A1A" strokeWidth="1" opacity="0.5"/>
    <path d="M0 16 Q16 16 16 32" fill="none" stroke="#C9983A" strokeWidth="1" opacity="0.7"/>
    <circle cx="8"  cy="8"  r="3" fill="#C9983A" opacity="0.7"/>
    <circle cx="24" cy="4"  r="2" fill="#C9983A" opacity="0.4"/>
    <circle cx="4"  cy="24" r="2" fill="#C9983A" opacity="0.4"/>
    <path d="M12 12 Q22 4 32 12 Q22 20 12 12Z" fill="#8B1A1A" opacity="0.35"/>
    <path d="M4  32 Q14 22 24 32 Q14 42 4  32Z" fill="#8B1A1A" opacity="0.35"/>
  </svg>
);

// ─── Partikel Bunga Melati (menggantikan "salju biru") ──────────────────────
const JasminePetal = ({ i }) => {
  const left  = `${10 + (i * 13) % 80}%`;
  const delay = i * 1.7;
  const dur   = 12 + (i % 4) * 3;
  const size  = 6 + (i % 3) * 3;

  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ left, top: '-5%', fontSize: size, color: '#FAF6ED' }}
      animate={{ y: ['0vh', '110vh'], rotate: [0, 360], opacity: [0, 0.7, 0.7, 0] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: 'linear' }}
    >
      ✿
    </motion.div>
  );
};

// ─── Framer Motion variants ─────────────────────────────────────────────────
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};
const cornerAnim = {
  animate: { scale: [1, 1.03, 1], rotate: [0, 1.2, -1.2, 0] },
  transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
};

// ─── Komponen Utama ─────────────────────────────────────────────────────────
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#1A0A0A' }}
    >
      <UlosBg />

      <div className="absolute inset-0 pointer-events-none z-[1]"
           style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, #0D0404CC 100%)' }} />

      {/* Ornamen Wayang & Bunga tetap dipertahankan karena visualnya Goks */}
      <motion.img {...cornerAnim} src={bunga}
        className="absolute -top-20 -left-20 w-[260px] md:w-[420px] z-[3] pointer-events-none"
        style={{ opacity: 0.55, filter: 'sepia(80%) saturate(60%) hue-rotate(320deg)' }}
      />
      <motion.img {...cornerAnim} src={bunga}
        className="absolute -top-20 -right-20 w-[260px] md:w-[420px] z-[3] scale-x-[-1] pointer-events-none"
        style={{ opacity: 0.55, filter: 'sepia(80%) saturate(60%) hue-rotate(320deg)' }}
      />
      
      {/* Wayang Hadap-hadapan yang sudah kita fix */}
      <motion.img 
        {...cornerAnim} 
        src={wayang}
        className="absolute -bottom-24 -left-20 w-[180px] md:w-[220px] z-[3] pointer-events-none"
        style={{ opacity: 0.55, filter: 'sepia(80%) saturate(60%) hue-rotate(320deg)' }}
      />
      <motion.img 
        {...cornerAnim} 
        src={wayang}
        className="absolute -bottom-24 -right-20 w-[180px] md:w-[220px] z-[3] scale-x-[-1] pointer-events-none"
        style={{ opacity: 0.55, filter: 'sepia(80%) saturate(60%) hue-rotate(320deg)' }}
      />

      {/* Partikel Melati */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }, (_, i) => <JasminePetal key={i} i={i} />)}
      </div>

      {/* Layer 5: Main Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-[10] flex flex-col items-center text-center px-6 gap-5 max-w-2xl w-full"
      >

        {/* 1. Label Atas - Diganti menjadi Modern */}
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <div className="w-8 h-px" style={{ backgroundColor: '#C9983A55' }}/>
          <p className="text-[9px] uppercase tracking-[0.55em] font-semibold"
             style={{ color: '#C9983A', fontFamily: '"Libre Baskerville", serif' }}>
            The Wedding Of
          </p>
          <div className="w-8 h-px" style={{ backgroundColor: '#C9983A55' }}/>
        </motion.div>

        {/* 2. Basmalah dihapus & diganti dengan Quote Modern */}
        <motion.p variants={fadeUp}
          className="text-[10px] md:text-xs tracking-[0.2em] uppercase"
          style={{ color: '#C9983A77', fontFamily: '"Libre Baskerville", serif' }}
        >
          Love • Commitment • Forever
        </motion.p>

        <motion.div variants={fadeUp}>
          <Gunungan />
        </motion.div>

        <motion.div variants={fadeUp}>
          <GorgatDivider width={200} />
        </motion.div>

        {/* 3. Nama Pengantin - Updated Febri & Suci */}
        <motion.div variants={fadeUp} className="flex flex-col items-center leading-none gap-1">
          <h1 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            color: '#FAF6ED',
            letterSpacing: '0.04em',
            fontStyle: 'italic',
            fontWeight: 600,
            lineHeight: 1,
          }}>
            Febriadi Harahap
          </h1>

          <div className="flex items-center gap-4 my-1">
            <div className="w-10 h-px" style={{ backgroundColor: '#C9983A44' }}/>
            <span style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '2.2rem',
              color: '#C9983A',
              lineHeight: 1,
            }}>
              ✦ &amp; ✦
            </span>
            <div className="w-10 h-px" style={{ backgroundColor: '#C9983A44' }}/>
          </div>

          <h1 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            color: '#FAF6ED',
            letterSpacing: '0.04em',
            fontStyle: 'italic',
            fontWeight: 600,
            lineHeight: 1,
          }}>
            Sri Suci Safitri
          </h1>
        </motion.div>

        <motion.div variants={fadeUp}>
          <GorgatDivider width={200} />
        </motion.div>

        {/* 4. Tanggal - Updated Mei 2026 */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-1">
          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.1rem, 3.5vw, 1.6rem)',
            color: '#FAF6EDBB',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fontStyle: 'italic',
          }}>
            Rabu, 13 Mei 2026
          </p>
          <p style={{
            fontSize: '9px',
            color: '#C9983A88',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            fontFamily: '"Libre Baskerville", serif',
          }}>
            Desa Bah Bulian — Simalungun
          </p>
        </motion.div>

        {/* Tombol CTA */}
        <motion.div variants={fadeUp} className="mt-2 relative">
          <div className="absolute inset-0 blur-xl opacity-30 rounded-sm"
               style={{ backgroundColor: '#8B1A1A' }} />
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 28px #C9983A44' }}
            whileTap={{ scale: 0.96 }}
            className="relative flex items-center gap-3 px-10 py-3 rounded-sm"
            style={{
              background: 'linear-gradient(135deg, #8B1A1A, #6B1414)',
              border: '1px solid #C9983A',
              color: '#FAF6ED',
              fontFamily: '"Libre Baskerville", serif',
              fontSize: '9px',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ color: '#C9983A' }}>✦</span>
            Save the Date
            <span style={{ color: '#C9983A' }}>✦</span>
          </motion.button>
        </motion.div>

      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 z-[5] pointer-events-none"
           style={{ background: 'linear-gradient(to top, #1A0A0A, transparent)' }} />
    </section>
  );
  
};

export default Hero;