import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import bunga from '../assets/bunga.png';

const SaveTheDate = () => {
  return (
    <section id='save-the-date' className="relative min-h-screen bg-[#E0F2FE] overflow-hidden -mt-10 z-40 rounded-t-[4rem] shadow-2xl">
      {/* Background Image */}
      <div className="relative w-full h-[55vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?w=600&auto=format&fit=crop" className="w-full h-full object-cover brightness-90 scale-110" alt="decor" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0EA5E9]/10 via-transparent to-[#E0F2FE]" />
      </div>

      {/* Dekorasi Bunga - Layer Menengah (z-20) & Pointer Events None */}
      <motion.img src={bunga} animate={{ rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-[45%] -left-28 w-64 md:w-80 opacity-90 z-20 pointer-events-none" />
      <motion.img src={bunga} animate={{ rotate: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-[65%] -right-32 w-80 md:w-[400px] opacity-90 z-20 pointer-events-none scale-x-[-1]" />

      {/* Card Content - Layer Atas (z-30) */}
      <motion.div initial={{ y: 80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="relative -mt-40 mx-6 bg-white/80 backdrop-blur-xl rounded-t-full pt-20 pb-16 px-8 text-center shadow-xl border-t-8 border-white z-30">
        <h3 className="text-4xl font-serif italic text-[#1E293B] mb-4">Save The Date</h3>
        
        <div className="flex items-center justify-around border-y-2 border-[#38BDF8]/20 py-10 mb-10 relative">
          <div className="text-6xl font-serif font-bold text-[#0F172A]">12</div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#38BDF8] text-white px-6 py-1 rounded-full shadow-lg">
            <p className="text-[10px] font-black uppercase tracking-widest">September 2026</p>
          </div>
        </div>

        <div className="mb-12 mt-12 bg-blue-50/40 p-6 rounded-[2rem] border border-blue-100/50">
          <div className="flex items-center justify-center gap-2 text-[#0F172A] mb-3">
            <MapPin size={20} className="text-[#38BDF8]" />
            <h4 className="font-serif font-bold text-xl italic">Lokasi Acara</h4>
          </div>
          <p className="text-xs text-[#475569] italic">Pondok Tahfizh Plus IT Abu Dzar, Rumpin, Bogor</p>
        </div>

        {/* Action Buttons - Layer Terdepan (z-50) */}
        <div className="flex flex-col gap-4 relative z-50">
          <motion.button whileHover={{ scale: 1.05 }} className="bg-[#38BDF8] text-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-200 flex justify-center items-center gap-2 mx-auto">
            <Calendar size={16} /> Tambahkan Ke Kalender
          </motion.button>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-[#38BDF8] text-[10px] font-black uppercase tracking-widest hover:underline">Petunjuk Lokasi Maps</a>
        </div>
      </motion.div>
    </section>
  );
};
export default SaveTheDate;