import { motion } from 'framer-motion';
import { DATA_PENGANTIN } from '../constans/content';
import bunga from '../assets/bunga.png'; // Pastikan path benar

// ─── SVG ORNAMENTS ──────────────────────────────────────────────────────────

/** Tekstur Ulos bg */
const UlosBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ulos-mempelai" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
        <path d="M0 15 Q15 0 30 15 Q45 30 60 15" stroke="#C9983A" strokeWidth="1" fill="none" opacity="0.09"/>
        <path d="M0 15 Q15 30 30 15 Q45 0 60 15" stroke="#8B1A1A" strokeWidth="0.6" fill="none" opacity="0.06"/>
        <circle cx="30" cy="15" r="1.5" fill="#C9983A" opacity="0.1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ulos-mempelai)"/>
  </svg>
);

const GorgatDivider = ({ width = 160 }) => (
  <svg viewBox={`0 0 ${width} 20`} style={{ width }} className="opacity-65 mx-auto" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="10" x2={width} y2="10" stroke="#C9983A" strokeWidth="0.5" opacity="0.4"/>
    {Array.from({ length: Math.floor(width / 18) }, (_, i) => {
      const cx = 9 + i * 18;
      return <polygon key={i} points={`${cx},3 ${cx+7},10 ${cx},17 ${cx-7},10`} fill="#C9983A"/>;
    })}
  </svg>
);

// ─── FRAMER VARIANTS ────────────────────────────────────────────────────────

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const bungaAnim = (delay = 0) => ({
  animate: { rotate: [0, 4, -4, 0], scale: [1, 1.05, 1] },
  transition: { duration: 10, repeat: Infinity, ease: 'easeInOut', delay },
});

// ─── SUB-COMPONENT: MEMPELAI CARD ───────────────────────────────────────────

const MempelaiCard = ({ data, label }) => (
  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    className="flex flex-col items-center text-center gap-4"
  >
    <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl italic font-bold text-[#FAF6ED]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
      {data.nama}
    </motion.h3>

    <motion.div variants={fadeUp} className="flex flex-col items-center gap-1">
      <GorgatDivider width={200} />
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9983A] leading-relaxed py-2" style={{ fontFamily: '"Libre Baskerville", serif' }}>
        {label} dari<br/>
        <span className="text-[#FAF6EDAA] text-[11px] normal-case tracking-normal">
          Bapak {data.ayah} & Ibu {data.ibu}
        </span>
      </p>
      <GorgatDivider width={200} />
    </motion.div>
  </motion.div>
);

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

const Mempelai = () => {
  return (
    <section id="mempelai" className="relative py-32 px-6 overflow-hidden" style={{ backgroundColor: '#160A0A' }}>
      
      {/* ── Background Layer ── */}
      <UlosBg />

      {/* ── Bunga PNG di Sudut (Recolored) ── */}
      <motion.img {...bungaAnim(0)} src={bunga}
        className="absolute -top-16 -right-16 w-56 md:w-80 z-0 pointer-events-none"
        style={{ opacity: 0.45, filter: 'sepia(100%) saturate(80%) hue-rotate(320deg) brightness(0.7)' }}
      />
      <motion.img {...bungaAnim(1.5)} src={bunga}
        className="absolute -bottom-16 -left-16 w-64 md:w-96 z-0 pointer-events-none rotate-180 "
        style={{ opacity: 0.45, filter: 'sepia(100%) saturate(80%) hue-rotate(320deg) brightness(0.7)' }}
      />

      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center gap-20">
        
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center space-y-4">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#C9983A]">The Happy Couple</p>
          <GorgatDivider width={180} />
          <h2 className="text-3xl md:text-4xl italic text-[#FAF6ED]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>Mempelai</h2>
          <GorgatDivider width={180} />
        </motion.div>

        {/* Mempelai Pria */}
        <MempelaiCard data={DATA_PENGANTIN.pria} label="Putra Keenam" />

        {/* Separator Tengah */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-4xl text-[#C9983A] italic" style={{ fontFamily: '"Cormorant Garamond", serif' }}>✦ & ✦</span>
        </div>

        {/* Mempelai Wanita */}
        <MempelaiCard data={DATA_PENGANTIN.wanita} label="Putri Pertama" />

      </div>

      {/* Fade Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
           style={{ background: 'linear-gradient(to top, #160A0A, transparent)' }}/>
    </section>
  );
};

export default Mempelai;