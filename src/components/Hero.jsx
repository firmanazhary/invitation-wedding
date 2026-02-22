import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { DATA_PENGANTIN } from '../constans/content';
import bunga from '../assets/bunga.png'; 

import burung from '../assets/burung.webp';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#E0F2FE]">
      
      {/* 1. Background Layering */}
      <div className="absolute inset-0 bg-[#D7E9F7] opacity-50" />
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')] mix-blend-multiply" />
      
      {/* 2. Wayang Transparan (Kiri & Kanan) - Sakral dan Rame */}
 

      {/* 3. Burung Terbang Melintas */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(3)].map((_, i) => (
          <motion.img
            key={i}
            src={burung}
            initial={{ x: "-20%", y: `${15 + i * 25}%`, opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 0.5, 0] }}
            transition={{ duration: 15 + i * 3, repeat: Infinity, delay: i * 5, ease: "linear" }}
            className="absolute w-24 opacity-40 grayscale brightness-150"
          />
        ))}
      </div>

      {/* 4. Ornamen Bunga Mawar Besar di 4 Sudut */}
      <motion.img
        src={bunga}
        animate={{ rotate: [0, 2, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-16 -left-16 w-[300px] md:w-[450px] z-20 pointer-events-none"
      />
      <motion.img
        src={bunga}
        animate={{ rotate: [0, -2, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-16 -right-16 w-[300px] md:w-[450px] z-20 scale-x-[-1] pointer-events-none"
      />
      <motion.img
        src={bunga}
        className="absolute -bottom-16 -left-16 w-[300px] md:w-[450px] z-20 rotate-180 scale-x-[-1] pointer-events-none"
      />
      <motion.img
        src={bunga}
        className="absolute -bottom-16 -right-16 w-[300px] md:w-[450px] z-20 rotate-180 pointer-events-none"
      />

      {/* 5. Main Content */}
      <div className="z-30 text-center px-6">
        {/* PERBAIKAN: Walimatul Ursy dibuat lebih kontras dengan background pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/60 backdrop-blur-sm border border-white inline-block px-6 py-2 rounded-full mb-8 shadow-sm"
        >
          <p className="text-blue-700 tracking-[0.4em] uppercase text-[10px] md:text-xs font-sans font-black">
            Walimatul Ursy
          </p>
        </motion.div>
        
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-8xl font-serif font-bold text-[#334155] mb-8 drop-shadow-sm"
        >
          {DATA_PENGANTIN.pria.nama} <br /> 
          <span className="text-blue-500 italic text-4xl md:text-6xl my-4 block drop-shadow-md">&</span>
          {DATA_PENGANTIN.wanita.nama}
        </motion.h1>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block border-y-2 border-blue-200/50 py-3 px-8">
            <p className="text-xl md:text-2xl text-[#64748b] font-serif italic tracking-wide">
              Sabtu, 12 September 2026
            </p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#38BDF8] text-white px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-200 flex items-center gap-2 mx-auto transition-all border border-white/20"
          >
            <Calendar size={16} /> Save the date
          </motion.button>
        </motion.div>
      </div>

      {/* Efek Partikel Salju Putih */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: [0, 0.5, 0], y: [0, 200, 400] }}
            transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 5 }}
            className="absolute w-[4px] h-[4px] rounded-full bg-white shadow-[0_0_10px_white]"
            style={{ left: `${Math.random() * 100}%`, top: `-5%` }}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-100/60 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;