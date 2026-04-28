import { motion } from 'framer-motion';
import { Calendar, MapPin, Heart, Home, Navigation } from 'lucide-react';
import bunga from '../assets/bunga.png';
import { DATA_PENGANTIN } from '../constans/content';

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

/** Arch gapura — header container */
const GapuraArch = ({ children }) => (
  <div className="relative">
    {/* SVG arch frame */}
    <svg viewBox="0 0 360 60" className="w-full pointer-events-none"
         xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '-2px' }}>
      <path d="M0 60 L0 30 Q180 -10 360 30 L360 60 Z"
            fill="#1E0A0A"/>
      <path d="M0 60 L0 32 Q180 -6 360 32 L360 60"
            fill="none" stroke="#C9983A" strokeWidth="1.5"/>
      <path d="M20 60 L20 38 Q180 6 340 38 L340 60"
            fill="none" stroke="#8B1A1A" strokeWidth="0.8" opacity="0.5"/>
      {/* Mahkota puncak */}
      <circle cx="180" cy="6"  r="5"   fill="#C9983A"/>
      <circle cx="148" cy="14" r="3"   fill="#C9983A" opacity="0.6"/>
      <circle cx="212" cy="14" r="3"   fill="#C9983A" opacity="0.6"/>
      <text x="180" y="32" textAnchor="middle" fontSize="12" fill="#C9983A" opacity="0.6">✦</text>
    </svg>
    <div style={{ backgroundColor: '#1E0A0A' }}>
      {children}
    </div>
  </div>
);

/** Bingkai card event dengan ornamen sudut */
const CardFrame = ({ children, accentColor = '#8B1A1A' }) => (
  <div className="relative p-7"
       style={{
         background: 'linear-gradient(145deg, rgba(139,26,26,0.28), rgba(20,8,8,0.7))',
         backdropFilter: 'blur(14px)',
         WebkitBackdropFilter: 'blur(14px)',
         border: '1px solid rgba(201,152,58,0.32)',
         boxShadow: '0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(201,152,58,0.12)',
       }}>
    {/* Ornamen sudut */}
    {[['top-1.5 left-1.5',''],['top-1.5 right-1.5','scale-x-[-1]'],
      ['bottom-1.5 left-1.5','scale-y-[-1]'],['bottom-1.5 right-1.5','scale-[-1]']
    ].map(([pos, tr], i) => (
      <svg key={i} viewBox="0 0 18 18"
           className={`absolute ${pos} w-3.5 h-3.5 ${tr} opacity-55`}
           xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 Q9 0 9 9" fill="none" stroke="#C9983A" strokeWidth="1.6"/>
        <circle cx="2.5" cy="2.5" r="1.8" fill="#C9983A"/>
      </svg>
    ))}
    {children}
  </div>
);

/** Tekstur Ulos bg */
const UlosBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none"
       xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ulos-std" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
        <path d="M0 15 Q15 0 30 15 Q45 30 60 15"  stroke="#C9983A" strokeWidth="1"   fill="none" opacity="0.09"/>
        <path d="M0 15 Q15 30 30 15 Q45 0  60 15"  stroke="#8B1A1A" strokeWidth="0.6" fill="none" opacity="0.06"/>
        <circle cx="30" cy="15" r="1.5" fill="#C9983A" opacity="0.1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ulos-std)"/>
  </svg>
);

/** Percik emas */
const GoldSpark = ({ i }) => (
  <motion.div className="absolute pointer-events-none rounded-full"
    style={{
      left: `${10 + (i * 13) % 80}%`, bottom: '8%',
      width: 3, height: 3,
      backgroundColor: '#C9983A', boxShadow: '0 0 5px #C9983A',
    }}
    animate={{ opacity: [0, 0.9, 0], scale: [0, 1.8, 0], y: [0, -70] }}
    transition={{ duration: 3.5 + (i % 3), repeat: Infinity, delay: i * 1.4, ease: 'easeOut' }}
  />
);

// ─── Sub-komponen CardEvent ───────────────────────────────────────────────────
const CardEvent = ({ title, icon: Icon, day, date, month, time, location, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.85, delay }}
    className="w-full mb-8"
  >
    <CardFrame>
      <div className="flex flex-col items-center text-center gap-4">

        {/* Icon dalam lingkaran gold */}
        <div className="w-11 h-11 flex items-center justify-center rounded-full"
             style={{ border: '1px solid rgba(201,152,58,0.5)',
                      background: 'rgba(201,152,58,0.1)' }}>
          <Icon size={18} style={{ color: '#C9983A' }} />
        </div>

        {/* Judul acara */}
        <p style={{
          fontFamily: '"Libre Baskerville", serif',
          fontSize: '9px',
          letterSpacing: '0.5em',
          textTransform: 'uppercase',
          color: '#C9983A',
        }}>
          {title}
        </p>

        <GorgatDivider width={140} />

        {/* Tanggal — layout vertikal */}
        <div className="flex items-center gap-6">
          {/* Hari */}
          <p style={{
            fontFamily: '"Libre Baskerville", serif',
            fontSize: '8px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#FAF6ED88',
            textAlign: 'right',
            minWidth: '52px',
          }}>{day}</p>

          {/* Divider vertikal gold */}
          <div style={{ width: 1, height: 48,
            background: 'linear-gradient(to bottom, transparent, #C9983A, transparent)' }}/>

          {/* Angka tanggal */}
          <div style={{ textAlign: 'left' }}>
            <p style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2.2rem, 8vw, 2.8rem)',
              color: '#FAF6ED',
              fontWeight: 700,
              lineHeight: 1,
            }}>{date}</p>
            <p style={{
              fontFamily: '"Libre Baskerville", serif',
              fontSize: '8px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#C9983A',
              marginTop: '4px',
            }}>{month}</p>
          </div>
        </div>

        <GorgatDivider width={140} />

        {/* Waktu & Lokasi */}
        <div className="flex flex-col items-center gap-1">
          <p style={{
            fontFamily: '"Libre Baskerville", serif',
            fontSize: '8px',
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: '#C9983A',
          }}>
            Pukul {time}
          </p>
          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(0.9rem, 3vw, 1.05rem)',
            fontStyle: 'italic',
            color: '#FAF6EDAA',
          }}>
            {location}
          </p>
        </div>
      </div>
    </CardFrame>
  </motion.div>
);

// ─── Komponen Utama ───────────────────────────────────────────────────────────
const SaveTheDate = () => {
  const mapUrl         = DATA_PENGANTIN.acara.embedMaps;
  const googleMapsLink = DATA_PENGANTIN.acara.mapsUrl;

  return (
    <section
      id="save-the-date"
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0E0606' }}
    >
      {/* Ulos texture */}
      <UlosBg />

      {/* Radial vignette */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 90% 90% at 50% 40%, transparent 20%, #0A0404CC 100%)' }}/>

      {/* Double rim */}
      <div className="absolute inset-5 border border-[#C9983A]/18 pointer-events-none rounded-sm z-[2]"/>
      <div className="absolute inset-9 border border-[#C9983A]/08 pointer-events-none rounded-sm z-[2]"/>

      {/* Percik emas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {Array.from({ length: 8 }, (_, i) => <GoldSpark key={i} i={i} />)}
      </div>

      {/* Bunga sudut */}
      <motion.img
        animate={{ y: [0, 12, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        src={bunga} className="absolute top-[20%] -left-28 w-72 z-20 pointer-events-none"
        style={{ opacity: 0.35, filter: 'sepia(80%) saturate(60%) hue-rotate(320deg)' }}
      />
      <motion.img
        animate={{ y: [0, -12, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        src={bunga} className="absolute top-[45%] -right-36 w-80 z-20 pointer-events-none scale-x-[-1]"
        style={{ opacity: 0.35, filter: 'sepia(80%) saturate(60%) hue-rotate(320deg)' }}
      />

      {/* ── Hero image dengan overlay maroon ── */}
      <div className="relative w-full h-[38vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2.2 }}
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200"
          className="w-full h-full object-cover"
          alt="Wedding Backdrop"
          style={{ filter: 'sepia(40%) hue-rotate(320deg) saturate(60%)' }}
        />
        {/* Overlay maroon-gold gradient */}
        <div className="absolute inset-0"
             style={{ background: 'linear-gradient(to bottom, rgba(139,26,26,0.45) 0%, transparent 50%, #0E0606 100%)' }}/>
        {/* Ulos pattern overlay */}
        <div className="absolute inset-0 opacity-20"
             style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='30'%3E%3Cpath d='M0 15 Q15 0 30 15 Q45 30 60 15' stroke='%23C9983A' stroke-width='1' fill='none' opacity='0.5'/%3E%3C/svg%3E\")" }}/>
      </div>

      {/* ── Gapura Arch + konten utama ── */}
      <div className="relative z-30 -mt-12">
        <GapuraArch>
          <div className="px-5 pb-28 pt-10 flex flex-col items-center gap-10 max-w-md mx-auto">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <p style={{
                fontFamily: '"Libre Baskerville", serif',
                fontSize: '9px',
                letterSpacing: '0.55em',
                textTransform: 'uppercase',
                color: '#C9983A',
              }}>
                — The Wedding Day —
              </p>
              <GorgatDivider width={180} />
              <h3 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(2.2rem, 7vw, 3rem)',
                color: '#FAF6ED',
                fontStyle: 'italic',
                letterSpacing: '0.04em',
              }}>
                Save The Date
              </h3>
              <GorgatDivider width={180} />
            </motion.div>

            {/* Cards Acara */}
            <div className="w-full flex flex-col gap-0">
              <CardEvent
                title="Akad Nikah" icon={Heart}
                day={DATA_PENGANTIN.acara.hari}
                date={DATA_PENGANTIN.acara.tanggal}
                month={DATA_PENGANTIN.acara.bulan}
                time={DATA_PENGANTIN.acara.waktuAkad}
                location={DATA_PENGANTIN.acara.lokasiAcara}
                delay={0.2}
              />
              <CardEvent
                title="Walimatul Ursy" icon={Home}
                day={DATA_PENGANTIN.acara.hari}
                date={DATA_PENGANTIN.acara.tanggal}
                month={DATA_PENGANTIN.acara.bulan}
                time={DATA_PENGANTIN.acara.waktuWalimah}
                location={DATA_PENGANTIN.acara.lokasiAcara}
                delay={0.4}
              />
            </div>

            {/* ── Maps ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-full flex flex-col gap-7"
            >
              {/* Map frame dengan border gold */}
              <div className="relative w-full overflow-hidden"
                   style={{
                     aspectRatio: '4/5',
                     border: '1px solid rgba(201,152,58,0.4)',
                     boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
                   }}>
                {/* Ornamen sudut map */}
                {[['top-2 left-2',''],['top-2 right-2','scale-x-[-1]'],
                  ['bottom-2 left-2','scale-y-[-1]'],['bottom-2 right-2','scale-[-1]']
                ].map(([pos, tr], i) => (
                  <svg key={i} viewBox="0 0 20 20"
                       className={`absolute ${pos} w-4 h-4 ${tr} opacity-70 z-10`}
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0 Q10 0 10 10" fill="none" stroke="#C9983A" strokeWidth="1.8"/>
                    <circle cx="3" cy="3" r="2" fill="#C9983A"/>
                  </svg>
                ))}

                <iframe
                  src={mapUrl}
                  width="100%" height="100%"
                  style={{ border: 0, display: 'block',
                           filter: 'sepia(30%) hue-rotate(320deg) saturate(80%)' }}
                  allowFullScreen="" loading="lazy"
                />

                {/* Navigation badge */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-2"
                     style={{
                       background: 'rgba(20,8,8,0.85)',
                       backdropFilter: 'blur(10px)',
                       border: '1px solid rgba(201,152,58,0.4)',
                     }}>
                  <Navigation size={14} style={{ color: '#C9983A' }} className="animate-bounce"/>
                  <span style={{
                    fontFamily: '"Libre Baskerville", serif',
                    fontSize: '7px',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: '#C9983A',
                  }}>Lokasi</span>
                </div>
              </div>

              {/* Alamat */}
              <div className="flex flex-col items-center gap-2 text-center">
                <GorgatDivider width={160} />
                <p style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: 'clamp(0.85rem, 2.8vw, 1rem)',
                  fontStyle: 'italic',
                  color: '#FAF6EDB0',
                }}>
                  {DATA_PENGANTIN.acara.alamatLengkap}
                </p>
                <p style={{
                  fontFamily: '"Libre Baskerville", serif',
                  fontSize: '8px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#C9983A88',
                }}>
                  Sumatera Utara, Indonesia
                </p>
                <GorgatDivider width={160} />
              </div>

              {/* Tombol aksi */}
              <div className="flex flex-col gap-4 max-w-[260px] mx-auto w-full">
                {/* Get Directions */}
                <motion.a
                  href={googleMapsLink} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 28px #C9983A44' }}
                  whileTap={{ scale: 0.96 }}
                  className="relative flex items-center justify-center gap-2.5 py-3.5 rounded-sm"
                  style={{
                    background: 'linear-gradient(135deg, #8B1A1A, #6B1414)',
                    border: '1px solid #C9983A',
                    color: '#FAF6ED',
                    fontFamily: '"Libre Baskerville", serif',
                    fontSize: '8px',
                    letterSpacing: '0.38em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{ color: '#C9983A' }}>✦</span>
                  <Navigation size={12} style={{ color: '#C9983A' }}/>
                  Get Directions
                  <span style={{ color: '#C9983A' }}>✦</span>
                </motion.a>

                {/* Save Event */}
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-center gap-2.5 py-3 rounded-sm"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(201,152,58,0.35)',
                    color: '#C9983A',
                    fontFamily: '"Libre Baskerville", serif',
                    fontSize: '8px',
                    letterSpacing: '0.38em',
                    textTransform: 'uppercase',
                  }}
                >
                  <Calendar size={12}/>
                  Save Event
                </motion.button>
              </div>
            </motion.div>

            {/* Ornamen penutup */}
            <p style={{ color: '#C9983A', fontSize: '1rem', letterSpacing: '0.5em' }}>✦ ✧ ✦</p>

          </div>
        </GapuraArch>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-8 left-0 w-full text-center z-30">
        <p style={{
          fontFamily: '"Libre Baskerville", serif',
          fontSize: '7px',
          letterSpacing: '0.45em',
          textTransform: 'uppercase',
          color: '#C9983A33',
        }}>
          © 2026 Crafted by firmanazhary
        </p>
      </div>

    </section>
  );
};

export default SaveTheDate;