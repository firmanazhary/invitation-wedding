import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  differenceInDays, differenceInHours,
  differenceInMinutes, differenceInSeconds, isAfter
} from 'date-fns';
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

const CardFrame = ({ value, label }) => (
  <div className="relative flex flex-col items-center justify-center py-5 px-2"
       style={{
         background: 'linear-gradient(145deg, rgba(139,26,26,0.35), rgba(26,10,10,0.6))',
         backdropFilter: 'blur(16px)',
         WebkitBackdropFilter: 'blur(16px)',
         border: '1px solid rgba(201,152,58,0.35)',
         boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(201,152,58,0.15)',
       }}>

    {[['top-1 left-1',''], ['top-1 right-1','scale-x-[-1]'],
      ['bottom-1 left-1','scale-y-[-1]'], ['bottom-1 right-1','scale-[-1]']].map(([pos, tr], i) => (
      <svg key={i} viewBox="0 0 16 16" className={`absolute ${pos} w-3 h-3 ${tr} opacity-60`}
           xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 Q8 0 8 8" fill="none" stroke="#C9983A" strokeWidth="1.5"/>
        <circle cx="2" cy="2" r="1.5" fill="#C9983A"/>
      </svg>
    ))}

    <div className="relative h-10 w-full flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          exit={{    y: -20, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="absolute"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
            fontWeight: 700,
            color: '#FAF6ED',
            lineHeight: 1,
          }}
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
    </div>

    <span style={{
      fontFamily: '"Libre Baskerville", serif',
      fontSize: '7px',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      color: '#C9983A',
      marginTop: '8px',
    }}>
      {label}
    </span>
  </div>
);

const UlosBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ulos-countdown" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
        <path d="M0 15 Q15 0 30 15 Q45 30 60 15"  stroke="#C9983A" strokeWidth="1"   fill="none" opacity="0.09"/>
        <path d="M0 15 Q15 30 30 15 Q45 0  60 15"  stroke="#8B1A1A" strokeWidth="0.6" fill="none" opacity="0.06"/>
        <circle cx="30" cy="15" r="1.5" fill="#C9983A" opacity="0.1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ulos-countdown)"/>
  </svg>
);

const GoldSpark = ({ i }) => (
  <motion.div
    className="absolute pointer-events-none rounded-full"
    style={{
      left: `${10 + (i * 13) % 80}%`,
      bottom: '10%',
      width: 3, height: 3,
      backgroundColor: '#C9983A',
      boxShadow: '0 0 5px #C9983A',
    }}
    animate={{ opacity: [0, 0.9, 0], scale: [0, 1.8, 0], y: [0, -80] }}
    transition={{ duration: 3.5 + (i % 3), repeat: Infinity, delay: i * 1.4, ease: 'easeOut' }}
  />
);

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({ hari: 0, jam: 0, menit: 0, detik: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Memastikan target tanggal menggunakan Mei 2026
    const target = new Date(DATA_PENGANTIN.acara.tanggalISO);
    const timer = setInterval(() => {
      const now = new Date();
      if (isAfter(now, target)) {
        setIsExpired(true);
        clearInterval(timer);
      } else {
        setTimeLeft({
          hari:  Math.max(0, differenceInDays(target, now)),
          jam:   Math.max(0, differenceInHours(target, now) % 24),
          menit: Math.max(0, differenceInMinutes(target, now) % 60),
          detik: Math.max(0, differenceInSeconds(target, now) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const labels = { hari: 'Days', jam: 'Hours', menit: 'Mins', detik: 'Secs' };

  return (
    <section
      className="relative py-28 px-6 text-center overflow-hidden"
      style={{ backgroundColor: '#120808' }}
    >
      <UlosBg />

      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, #0A0404CC 100%)' }}/>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {Array.from({ length: 8 }, (_, i) => <GoldSpark key={i} i={i} />)}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-sm mx-auto flex flex-col items-center gap-8"
      >

        {/* 1. Header Modern & Netral */}
        <div className="flex flex-col items-center gap-3">
          <GorgatDivider width={180} />
          <motion.h3
            key={isExpired ? 'expired' : 'counting'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(1.8rem, 6vw, 2.6rem)',
              color: '#FAF6ED',
              fontStyle: 'italic',
              letterSpacing: '0.04em',
            }}
          >
            {isExpired ? 'Happy Wedding' : 'Count Every Moment'}
          </motion.h3>
          <GorgatDivider width={180} />
        </div>

        {/* 2. Tanggal Display - Update Mei 2026 */}
        <p style={{
          fontFamily: '"Libre Baskerville", serif',
          fontSize: '9px',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: '#C9983A',
        }}>
          Wednesday, 13 May 2026
        </p>

        {/* Grid Countdown */}
        <div className="grid grid-cols-4 gap-2.5 w-full">
          {Object.entries(timeLeft).map(([key, value]) => (
            <CardFrame key={key} value={value} label={labels[key]} />
          ))}
        </div>

        <GorgatDivider width={200} />

        {/* 3. Wedding Quote Universal */}
        <div className="flex flex-col items-center gap-3 px-2">
          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(0.85rem, 2.8vw, 1rem)',
            fontStyle: 'italic',
            color: '#FAF6EDAA',
            lineHeight: 1.9,
          }}>
            "Two hearts, two souls, one journey to forever. Every second counts as we prepare to start our new life together."
          </p>
          <p style={{
            fontFamily: '"Libre Baskerville", serif',
            fontSize: '8px',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#C9983A88',
          }}>
            — Save the Date —
          </p>
        </div>

        {/* Ornamen penutup */}
        <p style={{ color: '#C9983A', fontSize: '1rem', letterSpacing: '0.5em' }}>
          ✦ ✧ ✦
        </p>

      </motion.div>
    </section>
  );
};

export default CountdownSection;