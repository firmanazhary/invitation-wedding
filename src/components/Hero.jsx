import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { DATA_PENGANTIN } from '../constans/content';
import bunga from '../assets/bunga.png'; 
import burung from '../assets/burung.webp';

const Hero = () => {
  const flowerFloating = (delay = 0) => ({
    animate: { y: [0, 10, 0], rotate: [0, 2, -2, 0] },
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay }
  });

  return (
    <section id='hero' className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#E0F2FE]">

      {/* 1. Ornamen Bunga (Tetap Sama) */}
      <motion.img src={bunga} {...flowerFloating(0)} className="absolute -top-24 -left-24 w-[300px] md:w-[500px] z-20 pointer-events-none opacity-90" />
      <motion.img src={bunga} {...flowerFloating(1)} className="absolute -top-24 -right-24 w-[300px] md:w-[500px] z-20 scale-x-[-1] pointer-events-none opacity-90" />
      <motion.img src={bunga} {...flowerFloating(0.5)} className="absolute -bottom-28 -left-24 w-[300px] md:w-[500px] z-20 rotate-180 scale-x-[-1] pointer-events-none opacity-90" />
      <motion.img src={bunga} {...flowerFloating(1.5)} className="absolute -bottom-28 -right-24 w-[300px] md:w-[500px] z-20 rotate-180 pointer-events-none opacity-90" />

      {/* 2. Main Content */}
      <div className="z-30 text-center px-4 w-full max-w-5xl">
        
        {/* Label Walimatul Ursy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white/40 backdrop-blur-md border border-white/60 inline-block px-6 py-2 rounded-full mb-12 shadow-sm"
        >
          <p className="text-[#0369A1] tracking-[0.5em] uppercase text-[9px] font-black">
            Walimatul Ursy
          </p>
        </motion.div>
        
        {/* REVISI NAMA: Menggunakan Flex Col untuk Mobile, Flex Row untuk Desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center gap-2 md:gap-8 mb-12"
        >
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#1E293B] leading-none tracking-tight">
            {DATA_PENGANTIN.pria.nama}
          </h1>
          
          <div className="flex items-center justify-center w-full gap-4">
            <div className="h-[1px] w-12 bg-[#38BDF8]/30 hidden md:block" />
            <span className="text-[#38BDF8] italic text-4xl md:text-6xl font-serif leading-none">
              &
            </span>
            <div className="h-[1px] w-12 bg-[#38BDF8]/30 hidden md:block" />
          </div>

          <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#1E293B] leading-none tracking-tight">
            {DATA_PENGANTIN.wanita.nama}
          </h1>
        </motion.div>

        {/* Tanggal & Button */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-10"
        >
          <div className="relative inline-block py-2">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#38BDF8]/40" />
            <p className="text-lg md:text-3xl text-[#64748b] font-serif italic tracking-widest uppercase">
              12 September 2026
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#38BDF8]/40" />
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#38BDF8] text-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-blue-200/50 flex items-center gap-3 mx-auto border border-white/40"
          >
            <Calendar size={16} /> Save the date
          </motion.button>
        </motion.div>
      </div>

      {/* Background Decor (Gradients & Snow) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0, 0.4, 0], y: [0, 500, 1000] }}
            transition={{ duration: 20, repeat: Infinity, delay: i * 2 }}
            className="absolute w-[2px] h-[2px] rounded-full bg-white shadow-[0_0_8px_white]"
            style={{ left: `${Math.random() * 100}%`, top: `-5%` }}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#E0F2FE] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;