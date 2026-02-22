import { motion } from 'framer-motion';
import { DATA_PENGANTIN } from '../constans/content';
import manImage from '../assets/man-image.png';
import womanImage from '../assets/woman-image.png';
import bunga from '../assets/bunga.png'; // Aset mawar besar
import { Instagram } from 'lucide-react';

const Mempelai = () => {
  return (
    <section className="py-24 px-8 bg-[#E0F2FE] relative overflow-hidden">
      {/* 1. Background Layering */}
      <div className="absolute inset-0 bg-[#D7E9F7] opacity-50" />
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')] mix-blend-multiply" />

   
      <div className="max-w-md mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 space-y-4"
        >
          <div className="mb-10">
            <p className="text-2xl md:text-3xl font-serif text-[#334155] leading-loose drop-shadow-sm" dir="rtl">
              بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْمِ
            </p>
          </div>
          <p className="text-sm italic text-[#475569] leading-relaxed px-4 font-medium">
            Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah perkenankanlah kami membentuk keluarga yang sakinah, mawaddah, warahmah.
          </p>
        </motion.div>

        {/* Profil Mempelai Pria */}
        <div className="relative mb-32">
          {/* Mawar Dekorasi di Sekitar Foto Pria */}
          <motion.img 
            src={bunga} 
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-48 opacity-80 z-20 pointer-events-none" 
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative z-10"
          >
            <h3 className="text-4xl font-serif font-bold text-[#334155] mb-2 drop-shadow-sm italic">
              {DATA_PENGANTIN.pria.nama}
            </h3>
            <p className="text-[10px] text-[#64748b] mb-8 uppercase tracking-[0.2em] font-black border-y border-[#38BDF8]/20 inline-block py-1">
              Putra ke-2 dari Bapak {DATA_PENGANTIN.pria.ayah} & Ibu {DATA_PENGANTIN.pria.ibu}
            </p>
            
            <div className="relative w-64 h-80 mx-auto rounded-t-full border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden mb-6 bg-blue-50">
               <img src={manImage} alt="Pria" className="w-full h-full object-cover brightness-105" />
            </div>
            
            <button className="bg-white/50 backdrop-blur-sm border border-[#38BDF8]/30 px-6 py-2 rounded-full text-[#38BDF8] flex items-center justify-center gap-2 mx-auto text-[10px] font-black uppercase tracking-widest shadow-sm">
              <Instagram size={14} /> @{DATA_PENGANTIN.pria.nama.toLowerCase()}
            </button>
          </motion.div>
        </div>

        {/* Simbol Love Penengah (Dibuat Lebih Mewah) */}
        <div className="my-16 flex justify-center items-center gap-4">
          <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#38BDF8]" />
          <span className="text-3xl text-[#38BDF8] animate-pulse">❦</span>
          <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#38BDF8]" />
        </div>

        {/* Profil Mempelai Wanita */}
        <div className="relative pb-20">
          {/* Mawar Dekorasi di Sekitar Foto Wanita */}
          <motion.img 
            src={bunga} 
            animate={{ rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 w-56 opacity-80 z-20 pointer-events-none rotate-180" 
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h3 className="text-4xl font-serif font-bold text-[#334155] mb-2 drop-shadow-sm italic">
               {DATA_PENGANTIN.wanita.nama}
            </h3>
            <p className="text-[10px] text-[#64748b] mb-8 uppercase tracking-[0.2em] font-black border-y border-[#38BDF8]/20 inline-block py-1">
              Putri ke-8 dari Bapak {DATA_PENGANTIN.wanita.ayah} & Ibu {DATA_PENGANTIN.wanita.ibu}
            </p>

            <div className="relative w-64 h-80 mx-auto rounded-t-full border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden mb-6 bg-blue-50">
               <img src={womanImage} alt="Wanita" className="w-full h-full object-cover brightness-105" />
            </div>
            
            <button className="bg-white/50 backdrop-blur-sm border border-[#38BDF8]/30 px-6 py-2 rounded-full text-[#38BDF8] flex items-center justify-center gap-2 mx-auto text-[10px] font-black uppercase tracking-widest shadow-sm">
              <Instagram size={14} /> @{DATA_PENGANTIN.wanita.nama.toLowerCase()}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mempelai;