import { motion, AnimatePresence } from 'framer-motion';
import coupleImg from '../assets/pasted-image.png';

// ─── Inline SVG Ornaments ──────────────────────────────────────────────────

/** Motif Gorgat Mandailing — diamond chain horizontal */
const GorgatDivider = () => (
  <svg viewBox="0 0 200 20" className="w-40 opacity-70" xmlns="http://www.w3.org/2000/svg">
    <g fill="#C9983A">
      {[10, 30, 50, 70, 90, 110, 130, 150, 170, 190].map((cx, i) => (
        <polygon key={i} points={`${cx},2 ${cx + 8},10 ${cx},18 ${cx - 8},10`} />
      ))}
    </g>
    <line x1="0" y1="10" x2="200" y2="10" stroke="#C9983A" strokeWidth="0.5" opacity="0.4" />
  </svg>
);

/** Ukiran sudut – motif pucuk rebung Mandailing */
const CornerOrnament = ({ className = '' }) => (
  <svg viewBox="0 0 120 120" className={`w-28 md:w-40 opacity-60 ${className}`}
       xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0 Q60 0 60 60 Q60 0 120 0" fill="none" stroke="#C9983A" strokeWidth="1.5"/>
    <path d="M0 0 Q40 0 40 40 Q40 0 80 0" fill="none" stroke="#8B1A1A" strokeWidth="1" opacity="0.6"/>
    <path d="M0 20 Q20 20 20 40" fill="none" stroke="#C9983A" strokeWidth="1"/>
    <circle cx="10" cy="10" r="3" fill="#C9983A" opacity="0.8"/>
    <circle cx="30" cy="5"  r="2" fill="#C9983A" opacity="0.5"/>
    <circle cx="5"  cy="30" r="2" fill="#C9983A" opacity="0.5"/>
    {/* Daun kecil */}
    <path d="M15 15 Q25 5 35 15 Q25 25 15 15Z" fill="#8B1A1A" opacity="0.4"/>
    <path d="M5  40 Q15 30 25 40 Q15 50 5  40Z" fill="#8B1A1A" opacity="0.4"/>
  </svg>
);

/** Silhouette Gunungan (Pohon Hayat) — centerpiece */
const GununganMini = () => (
  <svg viewBox="0 0 100 140" className="w-14 opacity-80" xmlns="http://www.w3.org/2000/svg">
    {/* Outer frame */}
    <path d="M50 8 L92 128 L8 128 Z" fill="none" stroke="#C9983A" strokeWidth="1.5"/>
    {/* Inner second frame */}
    <path d="M50 18 L85 124 L15 124 Z" fill="none" stroke="#8B1A1A" strokeWidth="0.8" opacity="0.5"/>
    {/* Trunk */}
    <rect x="46" y="100" width="8" height="24" fill="#8B1A1A" rx="1"/>
    {/* Branches */}
    <path d="M50 100 Q38 85 28 72 Q42 80 50 94" fill="#5A3E1B" opacity="0.7"/>
    <path d="M50 100 Q62 85 72 72 Q58 80 50 94" fill="#5A3E1B" opacity="0.7"/>
    <path d="M50 82 Q34 65 22 52 Q38 64 50 78" fill="#5A3E1B" opacity="0.7"/>
    <path d="M50 82 Q66 65 78 52 Q62 64 50 78" fill="#5A3E1B" opacity="0.7"/>
    <path d="M50 62 Q38 44 32 30 Q44 46 50 58" fill="#5A3E1B" opacity="0.7"/>
    <path d="M50 62 Q62 44 68 30 Q56 46 50 58" fill="#5A3E1B" opacity="0.7"/>
    {/* Crown */}
    <circle cx="50" cy="22" r="8" fill="#C9983A" opacity="0.9"/>
    <text x="50" y="27" textAnchor="middle" fontSize="9" fill="#8B1A1A">✦</text>
  </svg>
);

/** Tekstur Ulos inline — dipakai sebagai pattern background */
const UlosBg = () => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ulos-curtain" x="0" y="0" width="48" height="24" patternUnits="userSpaceOnUse">
        <rect width="48" height="24" fill="none"/>
        <path d="M0 12 Q12 0 24 12 Q36 24 48 12" stroke="#C9983A" strokeWidth="1.2" fill="none" opacity="0.35"/>
        <path d="M0 12 Q12 24 24 12 Q36 0 48 12" stroke="#8B1A1A" strokeWidth="0.7" fill="none" opacity="0.25"/>
        <circle cx="24" cy="12" r="1.5" fill="#C9983A" opacity="0.4"/>
        <rect x="0"  y="0"  width="4" height="24" fill="#8B1A1A" opacity="0.06"/>
        <rect x="44" y="0"  width="4" height="24" fill="#8B1A1A" opacity="0.06"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ulos-curtain)"/>
  </svg>
);

// ─── Framer Motion Variants ────────────────────────────────────────────────

const curtainExit = {
  y: '-100%',
  opacity: 0,
  transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const cornerAnim = {
  animate: { scale: [1, 1.04, 1], rotate: [0, 1.5, -1.5, 0] },
  transition: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
};

// ─── Main Component ────────────────────────────────────────────────────────

const Curtain = ({ isOpen, onOpen, guestName }) => {
  return (
    
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={curtainExit}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#1A0A0A' }} 
        >
          <UlosBg />

          <div className="absolute inset-0 z-[1]">
            <img
              src={coupleImg}
              alt="Pasangan"
              className="w-full h-full object-cover opacity-20 scale-105"
              style={{ filter: 'sepia(60%) hue-rotate(320deg)' }}
            />
            <div className="absolute inset-0"
                 style={{
                   background:
                     'radial-gradient(ellipse at 50% 40%, transparent 30%, #1A0A0ACC 80%), ' +
                     'linear-gradient(to bottom, #1A0A0A99 0%, transparent 30%, #1A0A0AEE 100%)',
                 }}
            />
          </div>

          <div className="absolute inset-4 z-[2] border border-[#C9983A]/30 pointer-events-none rounded-sm" />
          <div className="absolute inset-[18px] z-[2] border border-[#C9983A]/15 pointer-events-none rounded-sm" />

          {/* Ornamen Sudut */}
          <motion.div {...cornerAnim} className="absolute top-2 left-2 z-[3]"><CornerOrnament /></motion.div>
          <motion.div {...cornerAnim} className="absolute top-2 right-2 z-[3] scale-x-[-1]"><CornerOrnament /></motion.div>
          <motion.div {...cornerAnim} className="absolute bottom-2 left-2 z-[3] scale-y-[-1]"><CornerOrnament /></motion.div>
          <motion.div {...cornerAnim} className="absolute bottom-2 right-2 z-[3] scale-[-1]"><CornerOrnament /></motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative z-[10] text-center px-6 max-w-md w-full flex flex-col items-center gap-4"
          >
            {/* 1. Label Atas - Wedding Modern */}
            <motion.p variants={fadeUp}
              className="text-[9px] uppercase tracking-[0.5em] font-semibold"
              style={{ color: '#C9983A', fontFamily: '"Libre Baskerville", serif' }}>
              — The Wedding Invitation —
            </motion.p>

            <motion.div variants={fadeUp}>
              <GununganMini />
            </motion.div>

            <motion.div variants={fadeUp} className="flex justify-center">
              <GorgatDivider />
            </motion.div>

            {/* 2. Nama Tamu */}
            <motion.div variants={fadeUp} className="flex flex-col items-center gap-1">
              <p className="text-[9px] uppercase tracking-[0.3em]"
                 style={{ color: '#C9983A99', fontFamily: '"Libre Baskerville", serif' }}>
                Special Invitation To:
              </p>
              <h2
                className="text-3xl md:text-4xl italic pb-1"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  color: '#FAF6ED',
                  borderBottom: '1px solid #C9983A55',
                  paddingBottom: '6px',
                  letterSpacing: '0.04em',
                }}
              >
                {guestName || 'Tamu Undangan'}
              </h2>
            </motion.div>

            {/* 3. Nama Mempelai - Updated Nama */}
            <motion.div variants={fadeUp} className="flex flex-col items-center leading-tight mt-2">
              <h1 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(2.8rem, 8vw, 4.5rem)',
                color: '#FAF6ED',
                letterSpacing: '0.03em',
                lineHeight: 1.1,
              }}>
                Febri
              </h1>
              <span style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.8rem',
                color: '#C9983A',
                lineHeight: 1,
              }}>
                ✦ &amp; ✦
              </span>
              <h1 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(2.8rem, 8vw, 4.5rem)',
                color: '#FAF6ED',
                letterSpacing: '0.03em',
                lineHeight: 1.1,
              }}>
                Suci
              </h1>
            </motion.div>

            <motion.div variants={fadeUp} className="flex justify-center mt-1">
              <GorgatDivider />
            </motion.div>

            {/* 4. Wedding Quote - Pengganti Dalil */}
            <motion.p variants={fadeUp}
              className="text-[10px] md:text-xs italic leading-relaxed px-6"
              style={{ color: '#C9983A88', fontFamily: '"Libre Baskerville", serif' }}>
              "Dua hati, dua jiwa, satu tujuan untuk melangkah bersama dalam ikatan suci pernikahan."
            </motion.p>

            <motion.div variants={fadeUp} className="mt-3 relative">
              <div className="absolute inset-0 rounded-sm blur-xl opacity-40"
                   style={{ backgroundColor: '#8B1A1A' }} />
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 24px #C9983A55' }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpen}
                className="relative flex items-center gap-3 px-10 py-3 rounded-sm border"
                style={{
                  background: 'linear-gradient(135deg, #8B1A1A, #6B1414)',
                  borderColor: '#C9983A',
                  borderWidth: '1px',
                  color: '#FAF6ED',
                  fontFamily: '"Libre Baskerville", serif',
                  fontSize: '10px',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                }}
              >
                <span style={{ color: '#C9983A', fontSize: '14px' }}>✦</span>
                Open Invitation
                <span style={{ color: '#C9983A', fontSize: '14px' }}>✦</span>
              </motion.button>
            </motion.div>

          </motion.div>

          <div className="absolute bottom-6 left-0 w-full text-center z-[10]">
            <p className="text-[8px] uppercase tracking-[0.45em]"
               style={{ color: '#C9983A44', fontFamily: '"Libre Baskerville", serif' }}>
              Digital Invitation by firmanazhary
            </p>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Curtain;