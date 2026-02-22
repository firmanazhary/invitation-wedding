import { motion as Motion } from "framer-motion";
import BungaFull from "../assets/bunga.png"; 
import burung from "../assets/burung.webp"; // Pastikan aset burung ada
import mainImage from "../assets/pasted-image.png";

const Curtain = ({ guestName, onOpen }) => {
  return (
    <Motion.div 
      exit={{ y: "-100%" }}
      transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
      /* Mengganti bg krem menjadi biru muda langit sesuai keinginanmu */
      className="fixed inset-0 z-[120] bg-[#BAE6FD] flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* 1. Background Layering (Biru & Tekstur) */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img src={mainImage} className="w-full h-full object-cover grayscale" alt="bg" />
      </div>
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')] mix-blend-multiply" />

      {/* 2. Ornamen Burung Terbang (Animasi Melintas) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(4)].map((_, i) => (
          <Motion.img
            key={i}
            src={burung}
            initial={{ x: "-20%", y: `${20 + i * 15}%`, opacity: 0, scale: 0.5 }}
            animate={{ 
              x: "120%", 
              opacity: [0, 0.6, 0],
              scale: [0.5, 0.8, 0.5] 
            }}
            transition={{ 
              duration: 12 + i * 2, 
              repeat: Infinity, 
              delay: i * 3,
              ease: "linear" 
            }}
            className="absolute w-24 md:w-32 grayscale brightness-150"
          />
        ))}
      </div>

      {/* 3. Ornamen Bunga Mawar Besar di 4 Sudut */}
      <Motion.img
        src={BungaFull}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute -top-10 -left-10 w-[300px] md:w-[450px] z-40 pointer-events-none"
      />
      <Motion.img
        src={BungaFull}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute -top-10 -right-10 w-[300px] md:w-[450px] z-40 scale-x-[-1] pointer-events-none"
      />
      <Motion.img
        src={BungaFull}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute -bottom-10 -left-10 w-[300px] md:w-[450px] z-40 rotate-180 scale-x-[-1] pointer-events-none"
      />
      <Motion.img
        src={BungaFull}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute -bottom-10 -right-10 w-[300px] md:w-[450px] z-40 rotate-180 pointer-events-none"
      />

      {/* 4. Konten Teks Utama */}
      <div className="relative z-50 px-6 space-y-2">
        <Motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-serif text-[#1E293B] uppercase mb-4 tracking-[0.2em]"
        >
          Undangan <br /> Pernikahan
        </Motion.h2>
        
        <div className="space-y-1 mb-8">
          <p className="text-[#475569] font-sans text-sm tracking-wide">Kepada Bapak/Ibu/Saudara/i:</p>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#0F172A] italic">{guestName || "Tamu Undangan"}</h2>
        </div>

        <Motion.p 
          className="font-serif italic text-3xl md:text-5xl text-[#334155] mb-12"
        >
          Bagus & Ayu
        </Motion.p>

        <Motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-3 bg-[#38BDF8] hover:bg-[#0EA5E9] text-white rounded-full shadow-lg shadow-blue-200 text-xs font-bold uppercase tracking-[0.2em] transition-all"
        >
          Buka Undangan
        </Motion.button>
      </div>
    </Motion.div>
  );
};

export default Curtain;