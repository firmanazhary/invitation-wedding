import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import bunga from '../assets/bunga.png'; 
import coupleImg from '../assets/pasted-image.png';

const Curtain = ({ isOpen, onOpen, guestName }) => {
  // Animasi goyang bunga yang lebih halus sesuai permintaan
  const flowerAnim = {
    animate: { 
      scale: [1, 1.05, 1],
      rotate: [0, 3, -3, 0],
    },
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.45, 0, 0.55, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F0F9FF] overflow-hidden"
        >
          {/* 1. Background Image - Opacity & Blur sesuai gambar */}
          <div className="absolute inset-0 z-0">
            <img 
              src={coupleImg} 
              alt="Couple Backdrop"
              className="w-full h-full object-cover opacity-40 blur-[3px] scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#F0F9FF]/80" />
          </div>

          {/* 2. Dekorasi Bunga Sudut - Ukuran Lebih Proporsional */}
          <motion.img {...flowerAnim} src={bunga} className="absolute -top-12 -left-12 w-44 md:w-64 opacity-80 z-10 pointer-events-none" />
          <motion.img {...flowerAnim} src={bunga} className="absolute -top-12 -right-12 w-44 md:w-64 opacity-80 z-10 pointer-events-none scale-x-[-1]" />
          <motion.img {...flowerAnim} src={bunga} className="absolute -bottom-12 -left-12 w-44 md:w-64 opacity-80 z-10 pointer-events-none -rotate-12" />
          <motion.img {...flowerAnim} src={bunga} className="absolute -bottom-12 -right-12 w-44 md:w-64 opacity-80 z-10 pointer-events-none rotate-12 scale-x-[-1]" />

          {/* 3. Main Content Section */}
          <div className="relative z-30 text-center px-6 max-w-lg w-full flex flex-col items-center">
            {/* Header Text - Sesuai Gambar */}
            <p className="text-[12px] uppercase tracking-[0.4em] text-[#475569] font-bold mb-10">
              Undangan Pernikahan
            </p>

            {/* Nama Tamu - Ukuran & Border Sesuai Gambar */}
            <div className="space-y-4 mb-10">
              <p className="text-[10px] text-[#64748b] uppercase tracking-[0.2em]">Kepada Bapak/Ibu/Saudara/i:</p>
              <h2 className="text-4xl font-serif italic font-bold text-[#1E293B] border-b-2 border-[#38BDF8]/30 pb-2 inline-block px-4">
                {guestName || "Tamu Undangan"}
              </h2>
            </div>

            {/* Nama Mempelai - Ukuran Pas */}
            <div className="mb-14">
              <h1 className="text-5xl md:text-6xl font-serif italic text-[#334155] leading-snug tracking-tight">
                Bagus <span className="text-[#38BDF8]">&</span> Ayu
              </h1>
            </div>

            {/* 4. Resized Button - Ukuran Kecil & Elegant */}
            <div className="relative">
              {/* Glow Effect Biru Terfokus */}
              <div className="absolute inset-0 bg-[#38BDF8]/20 blur-2xl rounded-full scale-90 -z-10 animate-pulse" />
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpen}
                className="flex items-center gap-3 bg-gradient-to-r from-[#5BB4C4]/90 to-[#4A9AA8]/90 backdrop-blur-md px-8 py-3 rounded-full border border-white/40 shadow-xl text-white"
              >
                <div className="bg-white/20 p-1.5 rounded-full border border-white/30">
                  <Mail size={16} className="text-white" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                  Buka Undangan
                </span>
              </motion.button>
            </div>
          </div>

          {/* Copyright Branding */}
          <div className="absolute bottom-8 left-0 w-full text-center z-30">
            <p className="text-[8px] text-[#94a3b8] uppercase tracking-[0.4em] font-medium">
              Created by firmanazhary
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Curtain;