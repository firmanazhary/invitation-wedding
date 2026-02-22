import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react'; // Menambahkan MapPin
import { DATA_PENGANTIN } from '../constans/content';

const SaveTheDate = () => {
  return (
    <section className="relative min-h-screen bg-[#E0F2FE] overflow-hidden -mt-10 z-50 rounded-t-[4rem] shadow-[-20px_0_50px_rgba(0,0,0,0.1)]">
      
      {/* Background Image Hero (Arch) */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?w=400&auto=format&fit=crop&q=60" 
          alt="Wedding Decoration"
          className="w-full h-full object-cover grayscale-[20%] brightness-90"
        />
        <div className="absolute inset-0 bg-[#0EA5E9]/10" />
      </div>

      {/* Arch Card (Menimpa Gambar) */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="relative -mt-32 mx-6 bg-white/70 backdrop-blur-md rounded-t-full pt-16 pb-12 px-8 text-center shadow-2xl border-t-4 border-white/50"
      >
        <h3 className="text-3xl font-serif italic text-[#334155] mb-4">Save The Date</h3>
        <div className="flex justify-center mb-10 opacity-40 text-[#38BDF8]">
           <span className="text-xl">❦</span>
        </div>

        {/* Date Display */}
        <div className="flex items-center justify-around border-y border-[#38BDF8]/30 py-8 mb-8">
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

        <p className="text-[#64748b] tracking-[0.2em] uppercase text-xs font-bold font-sans mb-8">September</p>

        {/* --- Bagian Lokasi Baru --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-10 space-y-3"
        >
          <div className="flex items-center justify-center gap-2 text-[#334155]">
            <MapPin size={18} className="text-[#38BDF8]" />
            <h4 className="font-serif font-bold text-lg">Lokasi Acara</h4>
          </div>
          <p className="text-sm text-[#475569] leading-relaxed italic px-4">
             {/* Kamu bisa menyesuaikan alamat ini di constants/content.js */}
             Pondok Tahfizh Plus IT Abu Dzar, Rumpin, Bogor, Jawa Barat
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          <button className="bg-[#38BDF8] hover:bg-[#0EA5E9] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-blue-200 flex items-center gap-2 mx-auto transition-all">
            <Calendar size={14} /> Tambahkan Ke Kalender
          </button>
          
          {/* Tombol Link ke Google Maps */}
          <a 
            href="https://maps.app.goo.gl/YourGoogleMapsLink" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#38BDF8] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 mx-auto hover:underline"
          >
             Lihat di Google Maps
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default SaveTheDate;