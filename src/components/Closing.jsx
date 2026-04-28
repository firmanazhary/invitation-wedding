import { motion } from 'framer-motion';
import { DATA_PENGANTIN } from '../constans/content';

// ─── SVG Ornaments ──────────────────────────────────────────────────────────────

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

// ─── Komponen Utama ───────────────────────────────────────────────────────────
const Closing = () => {
  return (
    <section
      className="relative py-32 px-6 overflow-hidden flex items-center justify-center min-h-[80vh]"
      style={{ backgroundColor: '#0E0505' }}
    >
      <UlosBg />
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 15%, #080303DD 100%)' }}/>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {Array.from({ length: 9 }, (_, i) => <GoldSpark key={i} i={i} />)}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {Array.from({ length: 12 }, (_, i) => <JasminePetal key={i} i={i} />)}
      </div>

      {/* ══ MAIN CONTENT ══ */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-10 text-center"
      >

        {/* Header Penutup */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
          <p style={{
            fontFamily: '"Libre Baskerville", serif',
            fontSize: '10px',
            letterSpacing: '0.6em',
            textTransform: 'uppercase',
            color: '#C9983A',
          }}>
            — Final Note —
          </p>
          <GorgatDivider width={200} />
        </motion.div>

        {/* Pesan Terima Kasih Modern */}
        <motion.div variants={fadeUp} className="flex flex-col gap-6 px-4">
          <h2 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
            color: '#FAF6ED',
            fontStyle: 'italic',
            lineHeight: 1.4,
          }}>
            Thank you for being part of our story.
          </h2>
          <p style={{
            fontFamily: '"Libre Baskerville", serif',
            fontSize: '11px',
            color: '#FAF6ED88',
            lineHeight: 2,
            letterSpacing: '0.05em',
            maxWidth: '320px',
            margin: '0 auto'
          }}>
            Kehadiran dan doa restu Anda adalah pelengkap kebahagiaan bagi perjalanan baru kami.
          </p>
        </motion.div>

        {/* Nama Mempelai Simple & Bold */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-4 my-4">
          <GorgatDivider width={120} />
          <h1 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            color: '#FAF6ED',
            fontStyle: 'italic',
            fontWeight: 600,
            letterSpacing: '0.05em',
            lineHeight: 1,
          }}>
            Febri <span style={{ color: '#C9983A', fontSize: '1.5rem', verticalAlign: 'middle', margin: '0 8px' }}>&</span> Suci
          </h1>
          <GorgatDivider width={120} />
        </motion.div>

        {/* Hashtag & Closing Ornament */}
        <motion.div variants={fadeUp} className="space-y-6">
          <p style={{
            fontFamily: '"Libre Baskerville", serif',
            fontSize: '10px',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: '#C9983A88',
          }}>
            #FebriSuciJourney
          </p>
          
          <p style={{ color: '#C9983A', fontSize: '1.2rem', letterSpacing: '0.8em' }}>
            ✦ ✧ ✦
          </p>
        </motion.div>

        {/* Clean Footer */}
        <motion.p variants={fadeUp} style={{
          fontFamily: '"Libre Baskerville", serif',
          fontSize: '8px',
          letterSpacing: '0.45em',
          textTransform: 'uppercase',
          color: '#C9983A33',
          marginTop: '20px'
        }}>
          Crafted by firmanazhary
        </motion.p>

      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-20"
           style={{ background: 'linear-gradient(to top, #0E0505, transparent)' }}/>
    </section>
  );
};

export default Closing;