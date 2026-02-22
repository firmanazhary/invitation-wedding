import { motion } from 'framer-motion';
import bunga from '../assets/bunga.png'; // Aset mawar besar

const Doa = () => {
  return (
    <section className="relative py-24 px-8 bg-[#E0F2FE] overflow-hidden">
      
      {/* 1. Background Decor: Tekstur Watercolor Biru */}
      <div className="absolute inset-0 bg-[#D7E9F7] opacity-50" />
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')] mix-blend-multiply" />

      {/* 2. Ornamen Bunga Mawar yang Menopang Arch (Non-Wayang Edition) */}
      <motion.img 
        src={bunga} 
        animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-1/4 -right-16 w-56 opacity-70 z-0 pointer-events-none scale-x-[-1]" 
      />
      <motion.img 
        src={bunga} 
        animate={{ rotate: [0, -5, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-10 -left-16 w-64 opacity-70 z-0 pointer-events-none" 
      />

      {/* 3. Container Utama Arch (Lengkungan Mewah) */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-md mx-auto bg-white/40 backdrop-blur-xl rounded-t-full pt-20 pb-16 px-8 text-center border-t-4 border-x-4 border-white/60 shadow-[0_20px_50px_rgba(56,189,248,0.15)] relative z-10"
      >
        <h3 className="text-3xl font-serif italic text-[#334155] mb-2 drop-shadow-sm">
          Doa Untuk
        </h3>
        <h3 className="text-3xl font-serif italic text-[#334155] mb-6 drop-shadow-sm">
          Kedua Mempelai
        </h3>
        
        <div className="flex justify-center mb-8 opacity-40 text-[#38BDF8]">
          <span className="text-3xl animate-pulse">❦</span>
        </div>

        {/* Tulisan Arab Doa */}
        <div className="mb-8">
          <p className="text-2xl md:text-3xl font-serif text-[#0F172A] leading-loose drop-shadow-sm" dir="rtl">
            بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
        </div>

        {/* Terjemahan */}
        <div className="space-y-6">
          <div className="w-12 h-[2px] bg-[#38BDF8]/30 mx-auto" />
          <p className="text-sm italic text-[#475569] leading-relaxed font-medium">
            “Semoga Allah Memberkahimu Di Waktu Bahagia Dan Memberkahimu Di Waktu Susah, Serta Semoga Allah Mempersatukan Kalian Berdua Dalam Kebaikan”
          </p>
          <p className="text-[10px] font-black text-[#334155] tracking-[0.3em] uppercase opacity-70">
            (HR. Abu Dawud No. 2130)
          </p>
        </div>
      </motion.div>

      {/* 4. Ornamen Partikel Cahaya Biru Muda */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0, 0.5, 0], y: [0, -80] }}
            transition={{ duration: 5, repeat: Infinity, delay: i * 1.5 }}
            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_#38BDF8]"
            style={{ left: `${30 + Math.random() * 40}%`, bottom: "15%" }}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#38BDF8]/20 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Doa;