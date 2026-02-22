import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { DATA_PENGANTIN } from '../constans/content';

const SaveTheDate = () => {
  return (
    /* Mengubah background section menjadi biru muda agar sinkron dengan section sebelumnya */
    <section className="relative min-h-screen bg-[#E0F2FE] overflow-hidden -mt-10 z-50 rounded-t-[4rem] shadow-[-20px_0_50px_rgba(0,0,0,0.1)]">
      
      {/* Background Image Hero (Arch) */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFuZGF8ZW58MHx8MHx8fDA%3D" 
          alt="Wedding Decoration"
          className="w-full h-full object-cover grayscale-[20%] brightness-90"
        />
        {/* Overlay Biru Transparan agar gambar menyatu dengan tema */}
        <div className="absolute inset-0 bg-[#0EA5E9]/10" />
      </div>

      {/* Arch Card (Menimpa Gambar) */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        /* bg-[#93C5FD]/40: Menggunakan biru muda transparan dengan backdrop blur */
        className="relative -mt-32 mx-6 bg-white/70 backdrop-blur-md rounded-t-full pt-16 pb-12 px-8 text-center shadow-2xl border-t-4 border-white/50"
      >
        <h3 className="text-3xl font-serif italic text-[#334155] mb-4">Save The Date</h3>
        <div className="flex justify-center mb-10 opacity-40 text-[#38BDF8]">
           <span className="text-xl">❦</span>
        </div>

        {/* Date Display - Aksen warna biru muda (#38BDF8) */}
        <div className="flex items-center justify-around border-y border-[#38BDF8]/30 py-8 mb-10">
          <div className="text-center">
            <p className="text-xs uppercase font-bold text-[#64748b]">Sabtu</p>
          </div>
          <div className="text-5xl font-serif font-bold text-[#334155] border-x border-[#38BDF8]/30 px-8">
            12
          </div>
          <div className="text-center">
            <p className="text-xs uppercase font-bold text-[#64748b]">2026</p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-[#64748b] tracking-[0.2em] uppercase text-xs font-bold font-sans">September</p>
          {/* Tombol menggunakan warna biru cerah aksen Curtain (#38BDF8) */}
          <button className="bg-[#38BDF8] hover:bg-[#0EA5E9] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-blue-200 flex items-center gap-2 mx-auto transition-all">
            <Calendar size={14} /> Tambahkan Ke Kalender
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default SaveTheDate;