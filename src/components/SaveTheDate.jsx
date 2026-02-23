import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import bunga from '../assets/bunga.png';

const SaveTheDate = () => {
  // Update link Maps ke lokasi Aek Paing yang benar agar tidak error
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.721473456789!2d99.82715!3d2.09135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMDUnMjguOSJOIDk5wrA0OSczNy43IkU!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";
  
  return (
    <section id='save-the-date' className="relative min-h-screen bg-[#E0F2FE] overflow-hidden -mt-10 z-40 rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
      
      {/* 1. Header Image dengan Overlay yang Lebih Smooth */}
      <div className="relative w-full h-[45vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxhbXxlbnwwfHwwfHx8MA%3D%3D" 
          className="w-full h-full object-cover brightness-90 scale-105" 
          alt="Wedding Decor" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 via-transparent to-[#E0F2FE]" />
      </div>

      {/* 2. Dekorasi Mawar - Posisi Lebih Presisi agar Tombol Aman */}
      <motion.img 
        src={bunga} 
        animate={{ rotate: [0, 5, 0], y: [0, 10, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-[38%] -left-32 w-72 opacity-80 z-20 pointer-events-none" 
      />
      <motion.img 
        src={bunga} 
        animate={{ rotate: [0, -5, 0], y: [0, -10, 0] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-[58%] -right-40 w-80 opacity-80 z-20 pointer-events-none scale-x-[-1]" 
      />

      {/* 3. Arch Card - Elevasi Visual yang Lebih Mewah */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative -mt-40 mx-6 bg-white/90 backdrop-blur-2xl rounded-t-[10rem] pt-24 pb-16 px-8 text-center shadow-[0_-20px_60px_rgba(0,0,0,0.1)] border-t-[12px] border-white z-30"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#38BDF8] tracking-[0.5em] uppercase text-[9px] font-black mb-6 block"
        >
          Event Location
        </motion.span>

        <h3 className="text-4xl font-serif italic text-[#1E293B] mb-10 drop-shadow-sm">Save The Date</h3>

        {/* Maps Container dengan Shadow Soft */}
        <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white mb-10 bg-blue-50 group">
          <iframe 
            src={mapUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Pernikahan Aek Paing"
            className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Info Alamat dengan Desain Minimalis */}
        <div className="mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-[#0F172A]">
            <div className="h-[1px] w-8 bg-[#38BDF8]/30" />
            <MapPin size={16} className="text-[#38BDF8]" />
            <h4 className="font-serif font-bold text-xl italic">Aek Paing</h4>
            <div className="h-[1px] w-8 bg-[#38BDF8]/30" />
          </div>
          <p className="text-[11px] text-[#64748b] leading-relaxed font-medium uppercase tracking-wider px-4">
            4RGC+796 Aek Paing, Kec. Rantau Utara, <br/> Kabupaten Labuhan Batu, Sumatera Utara
          </p>
        </div>

        {/* Final Action Button - High Contrast */}
        <div className="relative z-50">
          <motion.button 
            whileHover={{ scale: 1.05, shadow: "0 20px 25px -5px rgb(56 189 248 / 0.4)" }} 
            whileTap={{ scale: 0.95 }}
            className="bg-[#38BDF8] text-white px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] shadow-2xl shadow-blue-200 flex justify-center items-center gap-3 mx-auto transition-all"
          >
            <Calendar size={18} /> Save to Calendar
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default SaveTheDate;