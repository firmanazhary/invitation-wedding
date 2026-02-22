import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import bunga from '../assets/bunga.png'; // Aset mawar besar

const Nasehat = () => {
  return (
    <section className="relative py-24 px-8 bg-[#E0F2FE] overflow-hidden">
      {/* 1. Background Decor */}
      <div className="absolute inset-0 bg-[#D7E9F7] opacity-50" />
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')] mix-blend-multiply" />

      {/* 2. Ornamen Bunga Mawar (Non-Wayang Edition) */}
      <motion.img 
        src={bunga} 
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-16 -right-16 w-64 opacity-70 z-0 pointer-events-none" 
      />
      <motion.img 
        src={bunga} 
        animate={{ rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -bottom-16 -left-16 w-72 opacity-70 z-0 pointer-events-none rotate-180" 
      />

      <div className="max-w-md mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex justify-center mb-4 text-[#38BDF8]">
            <PlayCircle size={32} className="animate-pulse" />
          </div>
          <h3 className="text-4xl font-serif italic text-[#334155] mb-2 drop-shadow-sm">Nasehat Pernikahan</h3>
          <div className="flex justify-center mb-6 opacity-40 text-[#38BDF8]">
             <span className="text-2xl">❦</span>
          </div>
          <p className="text-xs text-[#64748b] leading-relaxed italic px-6 font-medium">
            Simak sejenak pesan kebaikan yang kami pilihkan untuk mengawali perjalanan ibadah ini.
          </p>
        </motion.div>

        {/* 3. YouTube Embed Container (Mewah & Responsif) */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Efek Bingkai Kaca di Belakang Video */}
          <div className="absolute -inset-2 bg-white/40 backdrop-blur-xl rounded-[2.5rem] shadow-2xl z-0" />
          
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border-4 border-white z-10">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/zRA8l4Dpp6k" // Ganti ID video ustadz di sini
              title="Nasehat Pernikahan"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* 4. Kutipan Kecil di Bawah Video */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-[10px] text-[#334155] font-black uppercase tracking-[0.3em] opacity-60"
        >
          Barakallahu Fiikum
        </motion.p>
      </div>
    </section>
  );
};

export default Nasehat;