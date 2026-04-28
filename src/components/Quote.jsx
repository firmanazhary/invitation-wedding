import { motion } from 'framer-motion';
import bunga from '../assets/bunga.png';

// ─── SVG Ornamen ─────────────────────────────────────────────────────────────

/** Motif Gorgat — diamond chain */
const GorgatDivider = ({ width = 160 }) => (
  <svg viewBox={`0 0 ${width} 20`} style={{ width }} className="opacity-65 mx-auto"
       xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="10" x2={width} y2="10" stroke="#C9983A" strokeWidth="0.5" opacity="0.4"/>
    {Array.from({ length: Math.floor(width / 18) }, (_, i) => {
      const cx = 9 + i * 18;
      return (
        <polygon key={i}
          points={`${cx},3 ${cx + 7},10 ${cx},17 ${cx - 7},10`}
          fill="#C9983A"
        />
      );
    })}
  </svg>
);

/** Arch berbentuk mihrab / gapura — menggantikan rounded-t-full */
const ClassicGateBorder = () => (
  <svg viewBox="0 0 320 380" className="absolute inset-0 w-full h-full pointer-events-none"
       xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    {/* Outer arch - Dibuat lebih membulat/klasik */}
    <path
      d="M16 380 L16 120 Q16 10 160 10 Q304 10 304 120 L304 380"
      fill="none" stroke="#C9983A" strokeWidth="1.5"
    />
    {/* Inner arch */}
    <path
      d="M30 380 L30 130 Q30 25 160 25 Q290 25 290 130 L290 380"
      fill="none" stroke="#8B1A1A" strokeWidth="0.8" opacity="0.4"
    />
    {/* Ornamen Puncak — Bintang/Diamond Gold (Netral) */}
    <text x="160" y="50" textAnchor="middle" fontSize="20" fill="#C9983A">✦</text>
    
    {/* Ornamen samping tetap Gorgat agar nuansa Mandailing kuat */}
    {[220, 280, 340].map((y, i) => (
      <g key={i}>
        <polygon points={`8,${y} 16,${y - 6} 24,${y} 16,${y + 6}`}  fill="#C9983A" opacity="0.4"/>
        <polygon points={`296,${y} 304,${y - 6} 312,${y} 304,${y + 6}`} fill="#C9983A" opacity="0.4"/>
      </g>
    ))}
  </svg>
);

/** Tekstur Ulos bg */
const UlosBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ulos-verse" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
        <path d="M0 15 Q15 0 30 15 Q45 30 60 15"  stroke="#C9983A" strokeWidth="1"   fill="none" opacity="0.1"/>
        <path d="M0 15 Q15 30 30 15 Q45 0  60 15"  stroke="#8B1A1A" strokeWidth="0.6" fill="none" opacity="0.07"/>
        <circle cx="30" cy="15" r="1.5" fill="#C9983A" opacity="0.12"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ulos-verse)"/>
  </svg>
);

// ─── Partikel Percik Emas (menggantikan "cahaya biru") ───────────────────────
const GoldSpark = ({ i }) => {
  const left = `${15 + (i * 11) % 70}%`;
  const delay = i * 1.3;
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left, bottom: '15%', width: 4, height: 4, borderRadius: '50%',
               backgroundColor: '#C9983A', boxShadow: '0 0 6px #C9983A' }}
      animate={{ opacity: [0, 0.8, 0], scale: [0, 1.6, 0], y: [0, -90] }}
      transition={{ duration: 4 + (i % 3), repeat: Infinity, delay, ease: 'easeOut' }}
    />
  );
};

// ─── Framer variants ─────────────────────────────────────────────────────────
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};
const cornerAnim = {
  animate: { rotate: [0, 3, -3, 0], scale: [1, 1.04, 1] },
  transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
};

const QuoteSection = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden" style={{ backgroundColor: '#140808' }}>
      <UlosBg />
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, #0D0404BB 100%)' }}/>

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 9 }, (_, i) => <GoldSpark key={i} i={i} />)}
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="relative max-w-sm mx-auto z-10"
        style={{ paddingTop: '90px', paddingBottom: '60px', paddingLeft: '40px', paddingRight: '40px' }}
      >
        <ClassicGateBorder />

        <div className="relative z-10 flex flex-col items-center text-center gap-8">
          {/* Label Atas Modern */}
          <motion.p variants={fadeUp}
            className="text-[9px] uppercase tracking-[0.55em] font-semibold"
            style={{ color: '#C9983A', fontFamily: '"Libre Baskerville", serif' }}>
            — A Beautiful Journey —
          </motion.p>

          <motion.div variants={fadeUp}>
            <GorgatDivider width={120} />
          </motion.div>

          {/* Wedding Quote Universal (Ganti Ayat Arab) */}
          <motion.h3
            variants={fadeUp}
            className="leading-relaxed"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
              color: '#FAF6ED',
              fontStyle: 'italic',
              fontWeight: 500
            }}
          >
            "Love is not about how many days, months, or years you have been together. 
            It is all about how much you love each other every single day."
          </motion.h3>

          <motion.div variants={fadeUp}>
            <GorgatDivider width={120} />
          </motion.div>

          {/* Narasi Indonesia Netral */}
          <motion.p
            variants={fadeUp}
            className="leading-relaxed"
            style={{
              fontFamily: '"Libre Baskerville", serif',
              fontSize: '11px',
              color: '#FAF6EDBB',
              letterSpacing: '0.05em'
            }}
          >
            Membangun masa depan bersama dalam ikatan janji suci yang penuh kasih. 
            Terima kasih telah menjadi bagian dari awal perjalanan indah kami.
          </motion.p>

          <motion.p variants={fadeUp}
            style={{ color: '#C9983A', fontSize: '1.2rem', letterSpacing: '0.4em' }}>
            ✦ ✧ ✦
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default QuoteSection;