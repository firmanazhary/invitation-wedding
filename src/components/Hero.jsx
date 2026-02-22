import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { DATA_PENGANTIN } from '../constans/content';
import bunga from '../assets/bunga.png';

const Hero = () => {
  return (
    /* Mengubah bg dasar menjadi biru muda cerah (#E0F2FE) agar sinkron dengan Curtain */
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#E0F2FE]">
      
      {/* Background Watercolor Texture dengan nuansa biru lembut */}
      <div className="absolute inset-0 bg-[#D7E9F7]" />
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')] mix-blend-multiply" />
      
      {/* Dekorasi Bunga Kering Pojok Atas - Sedikit diturunkan Opacity-nya agar lebih soft */}
      <motion.div 
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -right-10 w-64 h-64 pointer-events-none"
      >
        <img 
          src={bunga}
          alt="dried flower hero" 
          className="w-full h-full object-contain rotate-180"
        />
      </motion.div>

      {/* Content */}
      <div className="z-10 text-center px-6">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          /* Mengganti text-amber-800 menjadi text-blue-600 */
          className="text-blue-600 tracking-[0.4em] uppercase text-xs mb-6 font-sans font-bold"
        >
          Walimatul Ursy
        </motion.p>
        
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          /* Mengganti warna teks ke Slate gelap (#334155) dan ampersand ke Biru */
          className="text-5xl md:text-8xl font-serif font-bold text-[#334155] mb-6"
        >
          {DATA_PENGANTIN.pria.nama} <br /> <span className="text-blue-500"> & </span><br /> {DATA_PENGANTIN.wanita.nama}
        </motion.h1>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <p className="text-xl md:text-2xl text-[#64748b] font-serif italic">
            Sabtu, 12 September 2026
          </p>
          
          {/* Tombol disesuaikan dengan warna aksen biru muda dari Curtain */}
          <button className="bg-white/80 backdrop-blur-sm border border-blue-200 px-8 py-3 rounded-full text-blue-600 text-sm font-bold shadow-sm flex items-center gap-2 mx-auto hover:bg-white transition-all">
            <Calendar size={16} /> Save the date
          </button>
        </motion.div>
      </div>

      {/* Dekorasi Bunga Kering Pojok Bawah */}
      <motion.div 
      animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 -left-10 w-72 h-72 pointer-events-none"
      >
        <img src={bunga}
          alt="dried flower hero bottom" 
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Ornamen Gradasi Biru untuk Kedalaman */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-100/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;