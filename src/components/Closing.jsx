import { motion } from 'framer-motion';
import { DATA_PENGANTIN } from '../constans/content';
import bunga from '../assets/bunga.png';
import pastedImage from '../assets/pasted-image.png';

// ─── SVG Ornamen ──────────────────────────────────────────────────────────────

const GorgatDivider = ({ width = 160 }) => (
  <svg viewBox={`0 0 ${width} 20`} style={{ width }} className="opacity-65 mx-auto"
       xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="10" x2={width} y2="10" stroke="#C9983A" strokeWidth="0.5" opacity="0.4"/>
    {Array.from({ length: Math.floor(width / 18) }, (_, i) => {
      const cx = 9 + i * 18;
      return <polygon key={i} points={`${cx},3 ${cx+7},10 ${cx},17 ${cx-7},10`} fill="#C9983A"/>;
    })}
  </svg>
);

/** Ulos background */
const UlosBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ulos-closing" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
        <path d="M0 15 Q15 0 30 15 Q45 30 60 15"  stroke="#C9983A" strokeWidth="1"   fill="none" opacity="0.09"/>
        <path d="M0 15 Q15 30 30 15 Q45 0  60 15"  stroke="#8B1A1A" strokeWidth="0.6" fill="none" opacity="0.06"/>
        <circle cx="30" cy="15" r="1.5" fill="#C9983A" opacity="0.1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ulos-closing)"/>
  </svg>
);

/** Bingkai foto arch — gapura penutup */
const ClosingFrameBorder = () => (
  <svg viewBox="0 0 220 290" className="absolute inset-0 w-full h-full pointer-events-none z-10"
       xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    {/* Outer arch */}
    <path d="M14 288 L14 118 Q14 14 110 14 Q206 14 206 118 L206 288"
          fill="none" stroke="#C9983A" strokeWidth="2"/>
    {/* Inner arch */}
    <path d="M24 288 L24 122 Q24 26 110 26 Q196 26 196 122 L196 288"
          fill="none" stroke="#8B1A1A" strokeWidth="1" opacity="0.5"/>
    {/* Mahkota puncak */}
    <circle cx="110" cy="17" r="6"   fill="#C9983A"/>
    <circle cx="84"  cy="28" r="3.5" fill="#C9983A" opacity="0.6"/>
    <circle cx="136" cy="28" r="3.5" fill="#C9983A" opacity="0.6"/>
    <text x="110" y="52" textAnchor="middle" fontSize="14" fill="#C9983A" opacity="0.8">✦</text>
    {/* Gorgat sisi kiri-kanan */}
    {[140, 180, 220, 260].map((y, i) => (
      <g key={i}>
        <polygon points={`6,${y} 14,${y-6} 22,${y} 14,${y+6}`}  fill="#C9983A" opacity="0.45"/>
        <polygon points={`198,${y} 206,${y-6} 214,${y} 206,${y+6}`} fill="#C9983A" opacity="0.45"/>
      </g>
    ))}
    {/* Base line */}
    <line x1="14" y1="287" x2="206" y2="287" stroke="#C9983A" strokeWidth="1.5"/>
  </svg>
);

/** Percik emas naik */
const GoldSpark = ({ i }) => (
  <motion.div className="absolute pointer-events-none rounded-full"
    style={{
      left: `${10 + (i * 13) % 80}%`, bottom: '12%',
      width: 3, height: 3,
      backgroundColor: '#C9983A',
      boxShadow: '0 0 5px #C9983A',
    }}
    animate={{ opacity: [0, 0.9, 0], scale: [0, 1.8, 0], y: [0, -80] }}
    transition={{ duration: 3.5 + (i % 3), repeat: Infinity, delay: i * 1.4, ease: 'easeOut' }}
  />
);

/** Bunga melati gugur */
const JasminePetal = ({ i }) => (
  <motion.div className="absolute pointer-events-none select-none"
    style={{
      left: `${8 + (i * 11) % 84}%`,
      top: '-4%',
      fontSize: `${8 + (i % 3) * 3}px`,
      color: '#FAF6ED',
    }}
    animate={{ y: ['0vh', '110vh'], rotate: [0, 360], opacity: [0, 0.6, 0.6, 0] }}
    transition={{ duration: 14 + (i % 4) * 3, delay: i * 1.8, repeat: Infinity, ease: 'linear' }}
  >
    ✿
  </motion.div>
);

// ─── Framer variants ──────────────────────────────────────────────────────────
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};
const bungaAnim = (delay = 0) => ({
  animate: { rotate: [0, 4, -4, 0], scale: [1, 1.04, 1] },
  transition: { duration: 7 + delay, repeat: Infinity, ease: 'easeInOut', delay },
});

// ─── Komponen Utama ───────────────────────────────────────────────────────────
const Closing = () => {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: '#0E0505' }}
    >
      {/* Ulos texture */}
      <UlosBg />

      {/* Radial vignette */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 15%, #080303DD 100%)' }}/>

      {/* Double rim */}
      <div className="absolute inset-5 border border-[#C9983A]/18 pointer-events-none rounded-sm z-[2]"/>
      <div className="absolute inset-9 border border-[#C9983A]/08 pointer-events-none rounded-sm z-[2]"/>

      {/* Percik emas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {Array.from({ length: 9 }, (_, i) => <GoldSpark key={i} i={i} />)}
      </div>

      {/* Bunga melati gugur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {Array.from({ length: 8 }, (_, i) => <JasminePetal key={i} i={i} />)}
      </div>

      {/* Bunga PNG sudut */}
      <motion.img {...bungaAnim(0)} src={bunga}
        className="absolute -top-8 -right-10 w-52 md:w-64 z-0 pointer-events-none rotate-180"
        style={{ opacity: 0.38, filter: 'sepia(80%) saturate(60%) hue-rotate(320deg)' }}
      />
      <motion.img {...bungaAnim(1.3)} src={bunga}
        className="absolute -bottom-8 -left-10 w-52 md:w-64 z-0 pointer-events-none"
        style={{ opacity: 0.38, filter: 'sepia(80%) saturate(60%) hue-rotate(320deg)' }}
      />

      {/* ══ MAIN CONTENT ══ */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="relative z-10 max-w-md mx-auto flex flex-col items-center gap-8 text-center"
      >

        {/* Salam penutup Arab */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-3">
          <p style={{
            fontFamily: '"Libre Baskerville", serif',
            fontSize: '9px',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: '#C9983A',
          }}>
            — Penutup —
          </p>
          <GorgatDivider width={180} />
          <p dir="rtl" style={{
            fontFamily: '"Scheherazade New", serif',
            fontSize: 'clamp(1.15rem, 3.5vw, 1.45rem)',
            color: '#FAF6ED',
            lineHeight: 2.2,
          }}>
            السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
          </p>
          <GorgatDivider width={180} />
        </motion.div>

        {/* Pesan undangan */}
        <motion.div variants={fadeUp} className="flex flex-col gap-4 px-3">
          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(0.88rem, 2.8vw, 1rem)',
            fontStyle: 'italic',
            color: '#FAF6EDAA',
            lineHeight: 1.95,
          }}>
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu
            kepada kami.
          </p>
          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(0.88rem, 2.8vw, 1rem)',
            fontStyle: 'italic',
            color: '#FAF6ED77',
            lineHeight: 1.9,
          }}>
            Atas perhatiannya, kami mengucapkan
            <span style={{ color: '#C9983A' }}> Jazaakumullah Khairan</span>.
          </p>
        </motion.div>

        {/* Foto pasangan dalam bingkai arch */}
        <motion.div
          variants={fadeUp}
          className="relative mx-auto"
          style={{ width: 200, height: 260 }}
        >
          {/* Foto */}
          <div className="absolute inset-0 overflow-hidden"
               style={{
                 borderRadius: '50% 50% 0 0 / 55% 55% 0 0',
                 background: '#1A0A0A',
               }}>
            <img
              src={pastedImage}
              alt="Closing Illustration"
              className="w-full h-full object-cover"
              style={{ filter: 'sepia(15%) contrast(1.05)', opacity: 0.9 }}
            />
            {/* Overlay gradient bawah */}
            <div className="absolute inset-0"
                 style={{ background: 'linear-gradient(to bottom, transparent 55%, #0E0505CC 100%)' }}/>
          </div>
          {/* Bingkai arch SVG */}
          <ClosingFrameBorder />
        </motion.div>

        {/* Nama mempelai */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-3">
          <GorgatDivider width={200} />
          <h3 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2rem, 7vw, 2.8rem)',
            color: '#FAF6ED',
            fontStyle: 'italic',
            fontWeight: 600,
            letterSpacing: '0.04em',
            lineHeight: 1.1,
          }}>
            {DATA_PENGANTIN.pria.nama}
            <span style={{ color: '#C9983A', margin: '0 12px' }}>✦ &amp; ✦</span>
            {DATA_PENGANTIN.wanita.nama}
          </h3>
          <GorgatDivider width={200} />
        </motion.div>

        {/* Hashtag */}
        <motion.p variants={fadeUp} style={{
          fontFamily: '"Libre Baskerville", serif',
          fontSize: '9px',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: '#C9983A88',
        }}>
          {DATA_PENGANTIN.hashtag ?? '#AyuDanBagus2026'}
        </motion.p>

        {/* Ornamen penutup final */}
        <motion.p variants={fadeUp}
          style={{ color: '#C9983A', fontSize: '1.1rem', letterSpacing: '0.6em' }}>
          ✦ ✧ ✦ ✧ ✦
        </motion.p>

        {/* Copyright */}
        <motion.p variants={fadeUp} style={{
          fontFamily: '"Libre Baskerville", serif',
          fontSize: '7px',
          letterSpacing: '0.45em',
          textTransform: 'uppercase',
          color: '#C9983A28',
        }}>
          © 2026 Crafted with ♥ by firmanazhary
        </motion.p>

      </motion.div>

      {/* Gradient fade bawah — benar-benar gelap di ujung */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-20"
           style={{ background: 'linear-gradient(to top, #0E0505, transparent)' }}/>
    </section>
  );
};

export default Closing;