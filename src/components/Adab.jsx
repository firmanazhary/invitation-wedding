  import { motion } from 'framer-motion';
  import {
    Clock, CameraOff, Hand,
    Shirt, Utensils, HeartHandshake
  } from 'lucide-react';
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
        <pattern id="ulos-adab" x="0" y="0" width="60" height="30"
                patternUnits="userSpaceOnUse">
          <path d="M0 15 Q15 0 30 15 Q45 30 60 15"
                stroke="#C9983A" strokeWidth="1" fill="none" opacity="0.09"/>
          <path d="M0 15 Q15 30 30 15 Q45 0 60 15"
                stroke="#8B1A1A" strokeWidth="0.6" fill="none" opacity="0.06"/>
          <circle cx="30" cy="15" r="1.5" fill="#C9983A" opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ulos-adab)"/>
    </svg>
  );

  const ADAB_LIST = [
    { icon: Clock,         text: 'Memperhatikan Waktu Sholat' },
    { icon: CameraOff,     text: 'Dilarang Mengambil Gambar Tanpa Izin' },
    { icon: Hand,          text: 'Dilarang Berjabat Tangan yang Bukan Mahrom' },
    { icon: Shirt,         text: 'Memakai Pakaian Sopan & Menutup Aurat' },
    { icon: Utensils,      text: 'Memperhatikan Adab Makan dan Minum' },
    { icon: HeartHandshake,text: "Mendo'akan Kedua Mempelai" },
  ];

  const bungaAnim = (delay = 0) => ({
    animate: { rotate: [0, 4, -4, 0], scale: [1, 1.04, 1] },
    transition: { duration: 8 + delay, repeat: Infinity, ease: 'easeInOut', delay },
  });

  const Adab = () => (
    <section className="relative py-28 px-5 overflow-hidden"
            style={{ backgroundColor: '#140A0A' }}>
      <UlosBg />

      <div className="absolute inset-0 pointer-events-none"
          style={{ background:
            'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 20%, #0A0404CC 100%)' }}/>
      <div className="absolute inset-5 border border-[#C9983A]/18
                      pointer-events-none rounded-sm z-[2]"/>
      <div className="absolute inset-9 border border-[#C9983A]/08
                      pointer-events-none rounded-sm z-[2]"/>

      <motion.img {...bungaAnim(0)} src={bunga}
        className="absolute -top-12 -left-14 w-52 md:w-64 z-0 pointer-events-none"
        style={{ opacity: 0.35,
                filter: 'sepia(80%) saturate(60%) hue-rotate(320deg)' }}/>
      <motion.img {...bungaAnim(1.5)} src={bunga}
        className="absolute -bottom-12 -right-14 w-52 md:w-64 z-0
                  pointer-events-none rotate-180"
        style={{ opacity: 0.35,
                filter: 'sepia(80%) saturate(60%) hue-rotate(320deg)' }}/>

      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center gap-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col items-center gap-3 text-center">
          <p style={{ fontFamily: '"Libre Baskerville", serif', fontSize: '9px',
                      letterSpacing: '0.5em', textTransform: 'uppercase',
                      color: '#C9983A' }}>
            — Tata Krama —
          </p>
          <GorgatDivider width={180}/>
          <h3 style={{ fontFamily: '"Cormorant Garamond", serif',
                      fontSize: 'clamp(2rem, 7vw, 2.8rem)', color: '#FAF6ED',
                      fontStyle: 'italic', letterSpacing: '0.04em' }}>
            Adab-Adab
          </h3>
          <h4 style={{ fontFamily: '"Cormorant Garamond", serif',
                      fontSize: 'clamp(1.2rem, 4vw, 1.6rem)',
                      color: '#FAF6EDAA', fontStyle: 'italic' }}>
            Menghadiri Walimah
          </h4>
          <GorgatDivider width={180}/>
          <p style={{ fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '0.9rem', fontStyle: 'italic',
                      color: '#FAF6ED77', lineHeight: 1.9,
                      maxWidth: 300, textAlign: 'center' }}>
            Tanpa mengurangi rasa hormat, ada hal-hal dalam adab seorang
            muslim ketika menghadiri walimah yang harus diperhatikan:
          </p>
        </motion.div>

        {/* Grid adab */}
        <div className="grid grid-cols-2 gap-3 w-full">
          {ADAB_LIST.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.9, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.65, delay: i * 0.09 }}
                whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(201,152,58,0.15)' }}
                className="relative flex flex-col items-center justify-center
                          gap-4 p-6 text-center min-h-[160px] group"
                style={{
                  background:
                    'linear-gradient(145deg, rgba(139,26,26,0.25), rgba(20,8,8,0.7))',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(201,152,58,0.28)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
                }}
              >
                {/* Ornamen sudut */}
                {[['top-1.5 left-1.5',''],['top-1.5 right-1.5','scale-x-[-1]'],
                  ['bottom-1.5 left-1.5','scale-y-[-1]'],
                  ['bottom-1.5 right-1.5','scale-[-1]']
                ].map(([pos, tr], j) => (
                  <svg key={j} viewBox="0 0 14 14"
                      className={`absolute ${pos} w-3 h-3 ${tr} opacity-45`}
                      xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0 Q7 0 7 7" fill="none"
                          stroke="#C9983A" strokeWidth="1.5"/>
                    <circle cx="2" cy="2" r="1.5" fill="#C9983A"/>
                  </svg>
                ))}

                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12"
                    style={{
                      border: '1px solid rgba(201,152,58,0.4)',
                      background: 'rgba(201,152,58,0.08)',
                      color: '#C9983A',
                      transition: 'transform 0.3s',
                    }}
                    onMouseEnter={e =>
                      e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={e =>
                      e.currentTarget.style.transform = 'scale(1)'}>
                  <Icon size={22}/>
                </div>

                {/* Teks */}
                <p style={{
                  fontFamily: '"Libre Baskerville", serif',
                  fontSize: '8px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#FAF6EDBB',
                  lineHeight: 1.8,
                }}>
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <p style={{ color: '#C9983A', fontSize: '1rem',
                    letterSpacing: '0.5em' }}>✦ ✧ ✦</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-20"
          style={{ background: 'linear-gradient(to top, #140A0A, transparent)' }}/>
    </section>
  );

  export default Adab;