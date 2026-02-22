import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { DATA_PENGANTIN } from '../constans/content';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hari: 0, jam: 0, menit: 0, detik: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const target = new Date(DATA_PENGANTIN.acara.tanggal);
      const now = new Date();
      
      setTimeLeft({
        hari: Math.max(0, differenceInDays(target, now)),
        jam: Math.max(0, differenceInHours(target, now) % 24),
        menit: Math.max(0, differenceInMinutes(target, now) % 60),
        detik: Math.max(0, differenceInSeconds(target, now) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    /* Mengubah bg-[#B58D67] menjadi bg-[#7DD3FC] (Sky Blue) agar sinkron */
    <section className="py-20 bg-[#7DD3FC] text-white px-8 text-center relative z-40 overflow-hidden">
      
      {/* Background Ornamen Watercolor Biru */}
      <div className="absolute inset-0 bg-[#0EA5E9] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')] mix-blend-overlay" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto relative z-10"
      >
        {/* Mengubah warna teks judul ke Slate gelap agar terbaca jelas di atas biru cerah */}
        <h3 className="text-3xl font-serif italic mb-10 text-[#0F172A]">Hari Yang Ditunggu</h3>
        
        {/* Timer Boxes */}
        <div className="grid grid-cols-4 gap-3 mb-12">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white">
              {/* Angka menggunakan warna biru pekat (#0EA5E9) */}
              <div className="text-3xl font-bold text-[#0EA5E9] mb-1">{value}</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-[#64748b] font-bold">{label}</div>
            </div>
          ))}
        </div>

        <p className="text-sm leading-relaxed px-4 italic font-medium text-[#0F172A] opacity-80">
          Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, kami mengundang Bapak/Ibu/Saudara/i, untuk menghadiri acara pernikahan kami pada:
        </p>
        
        <div className="mt-8 flex justify-center opacity-40 text-[#0F172A]">
           <span className="text-2xl">❦</span>
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownSection;