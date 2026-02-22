import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import bunga from '../assets/bunga.png'; // Aset mawar besar

const SaveTheDate = () => {
  return (
    <section className="relative min-h-screen bg-[#E0F2FE] overflow-hidden -mt-10 z-50 rounded-t-[4rem] shadow-[-20px_0_50px_rgba(0,0,0,0.1)]">
      
      {/* 1. Background Image (Clean Version) */}
      <div className="relative w-full h-[55vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?w=600&auto=format&fit=crop" 
          alt="Wedding Decoration"
          className="w-full h-full object-cover grayscale-[20%] brightness-90 scale-110"
        />
        {/* Overlay Biru Lembut */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0EA5E9]/10 via-transparent to-[#E0F2FE]" />
      </div>

      {/* 2. Dekorasi Mawar yang Menimpa Arch Card (Floating Effect) */}
      <motion.img 
        src={bunga} 
        animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-[45%] -left-20 w-64 md:w-80 opacity-90 z-[60] pointer-events-none" 
      />
      <motion.img 
        src={bunga} 
        animate={{ rotate: [0, -5, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-[65%] -right-24 w-80 md:w-[400px] opacity-90 z-[60] pointer-events-none scale-x-[-1]" 
      />

      {/* 3. Arch Card (Modern & Elegant) */}
      <motion.div 
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative -mt-40 mx-6 bg-white/80 backdrop-blur-xl rounded-t-full pt-20 pb-16 px-8 text-center shadow-[0_-20px_50px_rgba(0,0,0,0.1)] border-t-8 border-white z-50"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-600 tracking-[0.4em] uppercase text-[10px] font-black mb-4"
        >
          The Wedding Of
        </motion.p>

        <h3 className="text-4xl font-serif italic text-[#1E293B] mb-4 drop-shadow-sm">Save The Date</h3>
        <div className="flex justify-center mb-10 opacity-60 text-[#38BDF8]">
           <span className="text-2xl animate-pulse">❦</span>
        </div>

        {/* Date Display */}
        <div className="flex items-center justify-around border-y-2 border-[#38BDF8]/20 py-10 mb-10 relative">
          <div className="text-center">
            <p className="text-[10px] uppercase font-black text-[#64748b] tracking-widest">Sabtu</p>
          </div>
          <div className="text-6xl font-serif font-bold text-[#0F172A] border-x-2 border-[#38BDF8]/20 px-10">
            12
          </div>
          <div className="text-center">
            <p className="text-[10px] uppercase font-black text-[#64748b] tracking-widest">2026</p>
          </div>
          
          {/* Label Bulan Melayang */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#38BDF8] text-white px-6 py-1 rounded-full shadow-lg">
            <p className="text-[10px] font-black uppercase tracking-[0.3em]">September</p>
          </div>
        </div>

        {/* Lokasi Acara (Clean Box) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12 mt-12 bg-blue-50/40 p-6 rounded-[2rem] border border-blue-100/50 backdrop-blur-sm"
        >
          <div className="flex items-center justify-center gap-2 text-[#0F172A] mb-3">
            <MapPin size={20} className="text-[#38BDF8]" />
            <h4 className="font-serif font-bold text-xl italic">Lokasi Acara</h4>
          </div>
          <p className="text-xs md:text-sm text-[#475569] leading-relaxed italic font-medium px-2">
             Pondok Tahfizh Plus IT Abu Dzar, Rumpin, Bogor, Jawa Barat
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 relative z-20">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#38BDF8] hover:bg-[#0EA5E9] text-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-200 flex justify-center items-center gap-2 mx-auto transition-all"
          >
            <Calendar size={16} /> Tambahkan Ke Kalender
          </motion.button>
          
          <a 
            href="https://maps.app.goo.gl/YourLocationLink" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#38BDF8] text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2 hover:underline mt-2 transition-all"
          >
             Petunjuk Lokasi Maps
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default SaveTheDate;