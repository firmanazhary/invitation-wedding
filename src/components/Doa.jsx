import { motion } from 'framer-motion';
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
      <pattern id="ulos-doa" x="0" y="0" width="60" height="30"
               patternUnits="userSpaceOnUse">
        <path d="M0 15 Q15 0 30 15 Q45 30 60 15"
              stroke="#C9983A" strokeWidth="1" fill="none" opacity="0.09"/>
        <path d="M0 15 Q15 30 30 15 Q45 0 60 15"
              stroke="#8B1A1A" strokeWidth="0.6" fill="none" opacity="0.06"/>
        <circle cx="30" cy="15" r="1.5" fill="#C9983A" opacity="0.1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ulos-doa)"/>
  </svg>
);

/** Arch mihrab — bingkai doa */
const MihrabBorder = () => (
  <svg viewBox="0 0 320 400" className="absolute inset-0 w-full h-full
       pointer-events-none" xmlns="http://www.w3.org/2000/svg"
       preserveAspectRatio="none">
    <path d="M16 400 L16 160 Q16 16 160 16 Q304 16 304 160 L304 400"
          fill="none" stroke="#C9983A" strokeWidth="2"/>
    <path d="M30 400 L30 166 Q30 32 160 32 Q290 32 290 166 L290 400"
          fill="none" stroke="#8B1A1A" strokeWidth="1" opacity="0.5"/>
    <circle cx="160" cy="20" r="6"   fill="#C9983A"/>
    <circle cx="128" cy="32" r="3.5" fill="#C9983A" opacity="0.6"/>
    <circle cx="192" cy="32" r="3.5" fill="#C9983A" opacity="0.6"/>
    <text x="160" y="60" textAnchor="middle" fontSize="18"
          fill="#C9983A" opacity="0.7">✦</text>
    {[200, 250, 300, 350].map((y, i) => (
      <g key={i}>
        <polygon points={`6,${y} 16,${y-8} 26,${y} 16,${y+8}`}
                 fill="#C9983A" opacity="0.4"/>
        <polygon points={`294,${y} 304,${y-8} 314,${y} 304,${y+8}`}
                 fill="#C9983A" opacity="0.4"/>
      </g>
    ))}
    <line x1="16" y1="398" x2="304" y2="398"
          stroke="#C9983A" strokeWidth="1.5"/>
  </svg>
);

/** Percik emas */
const GoldSpark = ({ i }) => (
  <motion.div className="absolute pointer-events-none rounded-full"
    style={{ left: `${15 + (i * 13) % 70}%`, bottom: '15%',
             width: 3, height: 3, backgroundColor: '#C9983A',
             boxShadow: '0 0 5px #C9983A' }}
    animate={{ opacity: [0, 0.9, 0], scale: [0, 1.8, 0], y: [0, -80] }}
    transition={{ duration: 3.5 + (i % 3), repeat: Infinity,
                  delay: i * 1.4, ease: 'easeOut' }}
  />
);

const bungaAnim = (delay = 0) => ({
  animate: { rotate: [0, 4, -4, 0], scale: [1, 1.04, 1] },
  transition: { duration: 8 + delay, repeat: Infinity,
                ease: 'easeInOut', delay },
});

const Doa = () => (
  <section className="relative py-28 px-5 overflow-hidden"
           style={{ backgroundColor: '#120808' }}>
    <UlosBg />

    <div className="absolute inset-0 pointer-events-none"
         style={{ background:
           'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, #0A0404CC 100%)' }}/>
    <div className="absolute inset-5 border border-[#C9983A]/18
                    pointer-events-none rounded-sm z-[2]"/>
    <div className="absolute inset-9 border border-[#C9983A]/08
                    pointer-events-none rounded-sm z-[2]"/>

    {/* Percik emas */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {Array.from({ length: 7 }, (_, i) => <GoldSpark key={i} i={i}/>)}
    </div>

    <motion.img {...bungaAnim(0)} src={bunga}
      className="absolute top-1/4 -right-14 w-52 md:w-64 z-0
                 pointer-events-none scale-x-[-1]"
      style={{ opacity: 0.35,
               filter: 'sepia(80%) saturate(60%) hue-rotate(320deg)' }}/>
    <motion.img {...bungaAnim(1.3)} src={bunga}
      className="absolute bottom-10 -left-14 w-52 md:w-64 z-0
                 pointer-events-none"
      style={{ opacity: 0.35,
               filter: 'sepia(80%) saturate(60%) hue-rotate(320deg)' }}/>

    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1 }}
      className="relative z-10 max-w-sm mx-auto"
      style={{ paddingTop: 90, paddingBottom: 56,
               paddingLeft: 36, paddingRight: 36 }}
    >
      <MihrabBorder />

      <div className="relative z-10 flex flex-col items-center
                      text-center gap-6">

        {/* Label */}
        <p style={{ fontFamily: '"Libre Baskerville", serif',
                    fontSize: '9px', letterSpacing: '0.5em',
                    textTransform: 'uppercase', color: '#C9983A',
                    marginTop: 8 }}>
          — Doa Penutup —
        </p>
        <GorgatDivider width={150}/>

        {/* Judul */}
        <div>
          <h3 style={{ fontFamily: '"Cormorant Garamond", serif',
                       fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                       color: '#FAF6ED', fontStyle: 'italic',
                       lineHeight: 1.2 }}>
            Doa Untuk<br/>Kedua Mempelai
          </h3>
        </div>

        {/* Ayat Arab */}
        <p dir="rtl" style={{ fontFamily: '"Scheherazade New", serif',
                              fontSize: 'clamp(1.1rem, 3.5vw, 1.4rem)',
                              color: '#FAF6ED', lineHeight: 2.4,
                              textShadow: '0 2px 12px #0006' }}>
          بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
        </p>

        <GorgatDivider width={150}/>

        {/* Terjemahan */}
        <p style={{ fontFamily: '"Cormorant Garamond", serif',
                    fontSize: 'clamp(0.82rem, 2.5vw, 0.95rem)',
                    fontStyle: 'italic', color: '#FAF6EDAA',
                    lineHeight: 1.95 }}>
          "Semoga Allah memberkahimu di waktu bahagia dan di waktu
          susah, serta mempersatukan kalian berdua dalam kebaikan."
        </p>

        <p style={{ fontFamily: '"Libre Baskerville", serif',
                    fontSize: '8px', letterSpacing: '0.38em',
                    textTransform: 'uppercase', color: '#C9983A88' }}>
          — HR. Abu Dawud No. 2130 —
        </p>

        <p style={{ color: '#C9983A', fontSize: '1rem',
                    letterSpacing: '0.5em' }}>✦ ✧ ✦</p>
      </div>
    </motion.div>

    <div className="absolute bottom-0 left-0 right-0 h-20
                    pointer-events-none z-20"
         style={{ background:
           'linear-gradient(to top, #120808, transparent)' }}/>
  </section>
);

export default Doa;