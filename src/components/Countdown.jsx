import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds, isAfter } from 'date-fns';
import { DATA_PENGANTIN } from '../constans/content';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hari: 0, jam: 0, menit: 0, detik: 0
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const target = new Date(DATA_PENGANTIN.acara.tanggalISO);
    const timer = setInterval(() => {
      const now = new Date();
      if (isAfter(now, target)) {
        setIsExpired(true);
        clearInterval(timer);
      } else {
        setTimeLeft({
          hari: Math.max(0, differenceInDays(target, now)),
          jam: Math.max(0, differenceInHours(target, now) % 24),
          menit: Math.max(0, differenceInMinutes(target, now) % 60),
          detik: Math.max(0, differenceInSeconds(target, now) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#BAE6FD] px-8 text-center relative z-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#E0F2FE] via-transparent to-[#BAE6FD] opacity-50" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto relative z-10"
      >
        <div className="flex justify-center mb-6">
          <div className="h-[1px] w-12 bg-[#0369A1]/30" />
        </div>

        <h3 className="text-4xl font-serif italic mb-12 text-[#1E293B]">
          {isExpired ? "Barakallahu Lakum" : "Menuju Hari Bahagia"}
        </h3>
        
        <div className="grid grid-cols-4 gap-2 md:gap-4 mb-14">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="bg-white/80 backdrop-blur-xl rounded-[1.5rem] py-5 px-1 shadow-xl border border-white/60 overflow-hidden">
              {/* INTERAKTIF: Animasi angka berganti */}
              <div className="relative h-10 overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={value}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-3xl font-serif font-black text-[#0EA5E9] absolute inset-0"
                  >
                    {String(value).padStart(2, '0')}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="text-[8px] uppercase tracking-[0.3em] text-[#64748b] font-black mt-2">{label}</div>
            </div>
          ))}
        </div>

        {/* TIPOGRAFI: Dalil tidak lagi uppercase agar lebih nyaman dibaca */}
        <div className="space-y-6 px-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[13px] leading-relaxed italic font-medium text-[#334155] opacity-90 first-letter:text-2xl first-letter:font-serif"
          >
            "{DATA_PENGANTIN.dalil}"
          </motion.p>
          <p className="text-[10px] font-black text-[#0EA5E9] uppercase tracking-[0.4em]">
            (QS. Ar-Rum: 21)
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownSection;