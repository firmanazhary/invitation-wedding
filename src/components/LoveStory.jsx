import { motion } from 'framer-motion';
import { DATA_PENGANTIN } from '../constans/content';
import bunga from '../assets/bunga.png';
import burung from '../assets/burung.webp';

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

/** Garis timeline vertikal berbentuk rantai Gorgat */
const TimelineRail = ({ totalItems }) => {
  const height = totalItems * 200;
  return (
    <svg
      viewBox={`0 0 20 ${height}`}
      style={{ width: 20, height }}
      className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none z-[1]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="10" y1="0" x2="10" y2={height} stroke="#C9983A" strokeWidth="0.8" opacity="0.25"
            strokeDasharray="4 6"/>
      {Array.from({ length: totalItems - 1 }, (_, i) => {
        const y = (i + 1) * 200 - 20;
        return (
          <polygon key={i}
            points={`10,${y-7} 17,${y} 10,${y+7} 3,${y}`}
            fill="#C9983A" opacity="0.5"
          />
        );
      })}
    </svg>
  );
};

/** Dot timeline — mahkota kecil */
const TimelineDot = () => (
  <svg viewBox="0 0 28 28" className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 z-20"
       xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="9"  fill="#1A0A0A" stroke="#C9983A" strokeWidth="1.8"/>
    <circle cx="14" cy="14" r="4"  fill="#C9983A"/>
    <polygon points="14,4 16,10 14,8 12,10" fill="#C9983A" opacity="0.7"/>
  </svg>
);

/** Tekstur Ulos bg */
const UlosBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ulos-story" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
        <path d="M0 15 Q15 0 30 15 Q45 30 60 15"  stroke="#C9983A" strokeWidth="1"   fill="none" opacity="0.09"/>
        <path d="M0 15 Q15 30 30 15 Q45 0  60 15"  stroke="#8B1A1A" strokeWidth="0.6" fill="none" opacity="0.06"/>
        <circle cx="30" cy="15" r="1.5" fill="#C9983A" opacity="0.1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ulos-story)"/>
  </svg>
);

/** Burung silhouette — menggantikan burung.webp agar berwarna sesuai tema */
const BirdSilhouette = () => (
  <svg viewBox="0 0 80 30" className="w-20 opacity-40" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 15 Q28 4 14 10 Q28 14 40 15 Q52 14 66 10 Q52 4 40 15Z" fill="#C9983A"/>
    <path d="M40 15 Q32 20 26 26 Q34 18 40 15Z" fill="#C9983A" opacity="0.6"/>
    <path d="M40 15 Q48 20 54 26 Q46 18 40 15Z" fill="#C9983A" opacity="0.6"/>
  </svg>
);

// ─── Framer variants ──────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 30, scale: 0.96 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport:  { once: true, margin: '-40px' },
  transition: { duration: 0.85, delay, ease: 'easeOut' },
});

const bungaAnim = (delay = 0) => ({
  animate: { rotate: [0, 4, -4, 0], scale: [1, 1.04, 1] },
  transition: { duration: 8 + delay, repeat: Infinity, ease: 'easeInOut', delay },
});

// ─── Komponen Utama ───────────────────────────────────────────────────────────
const LoveStory = () => {
  const stories = DATA_PENGANTIN.loveStory ?? [];

  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: '#180C0C' }}
    >
      {/* Ulos texture */}
      <UlosBg />

      {/* Radial vignette */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 20%, #0D0404CC 100%)' }}/>

      {/* Double rim */}
      <div className="absolute inset-5 border border-[#C9983A]/20 pointer-events-none rounded-sm z-[2]"/>
      <div className="absolute inset-9 border border-[#C9983A]/10 pointer-events-none rounded-sm z-[2]"/>

      {/* Bunga pojok — recoloured */}
      <motion.img {...bungaAnim(0)} src={bunga}
        className="absolute -top-10 -left-14 w-52 md:w-64 z-0 pointer-events-none"
        style={{ opacity: 0.35, filter: 'sepia(80%) saturate(60%) hue-rotate(320deg)' }}
      />
      <motion.img {...bungaAnim(1.5)} src={bunga}
        className="absolute -bottom-16 -right-16 w-56 md:w-72 z-0 pointer-events-none rotate-180"
        style={{ opacity: 0.35, filter: 'sepia(80%) saturate(60%) hue-rotate(320deg)' }}
      />

      {/* Burung terbang — pakai SVG silhouette gold */}
      <motion.div
        className="absolute top-[18%] left-0 pointer-events-none z-[3]"
        animate={{ x: ['-10vw', '110vw'], y: [0, -30, 10, -20, 0], opacity: [0, 0.6, 0.6, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        <BirdSilhouette />
      </motion.div>
      {/* Burung kedua, arah berlawanan */}
      <motion.div
        className="absolute top-[60%] right-0 pointer-events-none z-[3]"
        animate={{ x: ['10vw', '-110vw'], y: [0, -20, 15, -10, 0], opacity: [0, 0.5, 0.5, 0] }}
        transition={{ duration: 26, repeat: Infinity, delay: 10, ease: 'linear' }}
      >
        <BirdSilhouette />
      </motion.div>

      {/* ══ MAIN CONTENT ══ */}
      <div className="max-w-md mx-auto text-center relative z-10">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-20 flex flex-col items-center gap-4">
          <p style={{
            fontFamily: '"Libre Baskerville", serif',
            fontSize: '9px',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: '#C9983A',
          }}>
            — Kisah Kami —
          </p>
          <GorgatDivider width={180} />
          <h3 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2.2rem, 7vw, 3rem)',
            color: '#FAF6ED',
            fontStyle: 'italic',
            letterSpacing: '0.04em',
            lineHeight: 1.1,
          }}>
            Our Love Story
          </h3>
          <GorgatDivider width={180} />
          <p style={{ color: '#C9983A', fontSize: '1rem', letterSpacing: '0.5em' }}>✦ ✧ ✦</p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative" style={{ paddingBottom: '2rem' }}>

          {/* Rel Gorgat vertikal */}
          <TimelineRail totalItems={stories.length} />

          <div className="space-y-14 relative z-10">
            {stories.map((item, index) => (
              <motion.div
                key={index}
                {...fadeUp(index * 0.15)}
                className="relative"
              >
                {/* Bunga kecil samping kartu */}
                <motion.img
                  src={bunga}
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
                  className={`absolute -top-8 ${index % 2 === 0 ? '-right-8' : '-left-8'} w-28 z-0 pointer-events-none
                              ${index % 2 !== 0 ? 'scale-x-[-1]' : ''}`}
                  style={{ opacity: 0.3, filter: 'sepia(80%) saturate(60%) hue-rotate(320deg)' }}
                />

                {/* Kartu cerita */}
                <div
                  className="relative z-10 p-7 text-left"
                  style={{
                    background: 'linear-gradient(145deg, rgba(139,26,26,0.3), rgba(26,10,10,0.65))',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    border: '1px solid rgba(201,152,58,0.3)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(201,152,58,0.12)',
                  }}
                >
                  {/* Timeline dot mahkota */}
                  <TimelineDot />

                  {/* Waktu pill */}
                  <div className="flex justify-start mt-2 mb-3">
                    <span style={{
                      fontFamily: '"Libre Baskerville", serif',
                      fontSize: '8px',
                      letterSpacing: '0.38em',
                      textTransform: 'uppercase',
                      color: '#1A0A0A',
                      background: 'linear-gradient(90deg, #C9983A, #D4A853)',
                      padding: '3px 14px',
                      display: 'inline-block',
                    }}>
                      {item.waktu}
                    </span>
                  </div>

                  {/* Judul */}
                  <h4 style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: 'clamp(1.25rem, 4vw, 1.6rem)',
                    color: '#FAF6ED',
                    fontStyle: 'italic',
                    fontWeight: 600,
                    marginBottom: '10px',
                    letterSpacing: '0.03em',
                  }}>
                    {item.judul}
                  </h4>

                  {/* Gorgat mini */}
                  <GorgatDivider width={100} />
                  <div style={{ marginTop: '12px' }}/>

                  {/* Deskripsi */}
                  <p style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                    fontStyle: 'italic',
                    color: '#FAF6EDAA',
                    lineHeight: 1.9,
                  }}>
                    "{item.deskripsi}"
                  </p>

                  {/* Ornamen penutup kartu */}
                  <p style={{
                    color: '#C9983A55',
                    fontSize: '0.75rem',
                    letterSpacing: '0.4em',
                    marginTop: '14px',
                    textAlign: 'right',
                  }}>
                    ✦
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer section */}
        <motion.div {...fadeUp(0.3)} className="mt-16 flex flex-col items-center gap-3">
          <GorgatDivider width={200} />
          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            fontStyle: 'italic',
            color: '#FAF6ED88',
          }}>
            Dan perjalanan indah ini baru saja dimulai…
          </p>
          <p style={{ color: '#C9983A', fontSize: '1rem', letterSpacing: '0.5em' }}>✦ ✧ ✦</p>
        </motion.div>

      </div>

      {/* Gradient fade bawah */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-20"
           style={{ background: 'linear-gradient(to top, #180C0C, transparent)' }}/>
    </section>
  );
};

export default LoveStory;