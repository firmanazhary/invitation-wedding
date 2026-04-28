import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import bunga from '../assets/bunga.png';

const GorgatDivider = ({ width = 160 }) => (
  <svg viewBox={`0 0 ${width} 20`} style={{ width }} className="opacity-65 mx-auto"
       xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="10" x2={width} y2="10"
          stroke="#C9983A" strokeWidth="0.5" opacity="0.4"/>
    {Array.from({ length: Math.floor(width / 18) }, (_, i) => {
      const cx = 9 + i * 18;
      return <polygon key={i}
        points={`${cx},3 ${cx+7},10 ${cx},17 ${cx-7},10`} fill="#C9983A"/>;
    })}
  </svg>
);

const UlosBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none"
       xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ulos-nasehat" x="0" y="0" width="60" height="30"
               patternUnits="userSpaceOnUse">
        <path d="M0 15 Q15 0 30 15 Q45 30 60 15"
              stroke="#C9983A" strokeWidth="1" fill="none" opacity="0.09"/>
        <path d="M0 15 Q15 30 30 15 Q45 0 60 15"
              stroke="#8B1A1A" strokeWidth="0.6" fill="none" opacity="0.06"/>
        <circle cx="30" cy="15" r="1.5" fill="#C9983A" opacity="0.1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ulos-nasehat)"/>
  </svg>
);

const bungaAnim = (delay = 0) => ({
  animate: { rotate: [0, 4, -4, 0], scale: [1, 1.03, 1] },
  transition: { duration: 8 + delay, repeat: Infinity,
                ease: 'easeInOut', delay },
});

const Nasehat = () => (
  <section id="nasehat" className="relative py-28 px-5 overflow-hidden"
           style={{ backgroundColor: '#160C0C' }}>
    <UlosBg />

    <div className="absolute inset-0 pointer-events-none"
         style={{ background:
           'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 20%, #0A0404CC 100%)' }}/>
    <div className="absolute inset-5 border border-[#C9983A]/18
                    pointer-events-none rounded-sm z-[2]"/>
    <div className="absolute inset-9 border border-[#C9983A]/08
                    pointer-events-none rounded-sm z-[2]"/>

    <motion.img {...bungaAnim(0)} src={bunga}
      className="absolute -top-12 -right-14 w-56 md:w-72 z-0 pointer-events-none"
      style={{ opacity: 0.35,
               filter: 'sepia(80%) saturate(60%) hue-rotate(320deg)' }}/>
    <motion.img {...bungaAnim(1.2)} src={bunga}
      className="absolute -bottom-12 -left-14 w-56 md:w-72 z-0
                 pointer-events-none rotate-180"
      style={{ opacity: 0.35,
               filter: 'sepia(80%) saturate(60%) hue-rotate(320deg)' }}/>

    <div className="relative z-10 max-w-md mx-auto flex flex-col
                    items-center gap-10">

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="flex flex-col items-center gap-3 text-center">

        {/* Icon play */}
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-12 h-12 flex items-center justify-center mb-1"
          style={{ border: '1px solid rgba(201,152,58,0.4)',
                   background: 'rgba(201,152,58,0.08)',
                   color: '#C9983A' }}>
          <PlayCircle size={22}/>
        </motion.div>

        <p style={{ fontFamily: '"Libre Baskerville", serif', fontSize: '9px',
                    letterSpacing: '0.5em', textTransform: 'uppercase',
                    color: '#C9983A' }}>
          — Simak Sejenak —
        </p>
        <GorgatDivider width={180}/>
        <h3 style={{ fontFamily: '"Cormorant Garamond", serif',
                     fontSize: 'clamp(2rem, 7vw, 2.8rem)', color: '#FAF6ED',
                     fontStyle: 'italic', letterSpacing: '0.04em' }}>
          Nasehat Pernikahan
        </h3>
        <GorgatDivider width={180}/>
        <p style={{ fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '0.9rem', fontStyle: 'italic',
                    color: '#FAF6ED77', lineHeight: 1.9,
                    maxWidth: 300, textAlign: 'center' }}>
          Simak sejenak pesan kebaikan yang kami pilihkan untuk
          mengawali perjalanan ibadah ini.
        </p>
      </motion.div>

      {/* Video container */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85 }}
        className="relative w-full"
      >
        {/* Outer glow bingkai */}
        <div className="absolute -inset-1 pointer-events-none"
             style={{ border: '1px solid rgba(201,152,58,0.2)',
                      boxShadow: '0 0 40px rgba(139,26,26,0.3)' }}/>

        {/* Ornamen sudut video */}
        {[['top-2 left-2',''],['top-2 right-2','scale-x-[-1]'],
          ['bottom-2 left-2','scale-y-[-1]'],
          ['bottom-2 right-2','scale-[-1]']
        ].map(([pos, tr], i) => (
          <svg key={i} viewBox="0 0 18 18"
               className={`absolute ${pos} w-4 h-4 ${tr} opacity-60 z-10`}
               xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 Q9 0 9 9" fill="none"
                  stroke="#C9983A" strokeWidth="1.6"/>
            <circle cx="2.5" cy="2.5" r="1.8" fill="#C9983A"/>
          </svg>
        ))}

        {/* iframe */}
        <div className="relative aspect-video overflow-hidden"
             style={{ border: '1px solid rgba(201,152,58,0.35)' }}>
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/zRA8l4Dpp6k"
            title="Nasehat Pernikahan"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write;
                   encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ filter: 'contrast(1.02)' }}
          />
        </div>
      </motion.div>

      {/* Caption bawah */}
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.5 }}
        style={{ fontFamily: '"Libre Baskerville", serif', fontSize: '8px',
                 letterSpacing: '0.45em', textTransform: 'uppercase',
                 color: '#C9983A88' }}>
        — Barakallahu Fiikum —
      </motion.p>

      <p style={{ color: '#C9983A', fontSize: '1rem',
                  letterSpacing: '0.5em' }}>✦ ✧ ✦</p>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-20"
         style={{ background:
           'linear-gradient(to top, #160C0C, transparent)' }}/>
  </section>
);

export default Nasehat;