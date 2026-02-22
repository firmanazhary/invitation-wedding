import { motion as Motion } from "framer-motion";
import BungaFull from "../assets/bunga.png"; 
import burung from "../assets/burung.webp"; 
import mainImage from "../assets/pasted-image.png";

const Curtain = ({ guestName, onOpen }) => {
  return (
    <Motion.div 
      exit={{ y: "-100%" }}
      transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
      className="fixed inset-0 z-[120] bg-[#BAE6FD] flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* 1. Background Layering */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img src={mainImage} className="w-full h-full object-cover grayscale" alt="bg" />
      </div>
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')] mix-blend-multiply" />

      {/* 2. Ornamen Burung Terbang (Posisi diatur agar tidak menumpuk teks) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(4)].map((_, i) => (
          <Motion.img
            key={i}
            src={burung}
            /* Mengatur rentang y agar burung terbang di area atas dan bawah teks */
            initial={{ x: "-30%", y: i % 2 === 0 ? "15%" : "75%", opacity: 0, scale: 0.6 }}
            animate={{ 
              x: "130%", 
              opacity: [0, 0.8, 0], // Opacity dinaikkan agar lebih kelihatan
              scale: [0.6, 0.8, 0.6] 
            }}
            transition={{ 
              duration: 15 + i * 3, 
              repeat: Infinity, 
              delay: i * 4,
              ease: "linear" 
            }}
            /* Filter dikurangi agar warna hitam burung lebih kontras di bg biru */
            className="absolute w-24 md:w-36 opacity-60 brightness-90 grayscale-[50%]"
          />
        ))}
      </div>

      {/* 3. Ornamen Bunga Mawar Besar di 4 Sudut */}
      <Motion.img
        src={BungaFull}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute -top-12 -left-12 w-[280px] md:w-[400px] z-40 pointer-events-none"
      />
      <Motion.img
        src={BungaFull}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute -top-12 -right-12 w-[280px] md:w-[400px] z-40 scale-x-[-1] pointer-events-none"
      />
      <Motion.img
        src={BungaFull}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute -bottom-12 -left-12 w-[280px] md:w-[400px] z-40 rotate-180 scale-x-[-1] pointer-events-none"
      />
      <Motion.img
        src={BungaFull}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute -bottom-12 -right-12 w-[280px] md:w-[400px] z-40 rotate-180 pointer-events-none"
      />

      {/* 4. Konten Teks Utama (Z-index tertinggi agar tidak tertutup apa pun) */}
      <div className="relative z-50 px-6 py-10 bg-white/10 backdrop-blur-[2px] rounded-3xl">
        <Motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-serif text-[#1E293B] uppercase mb-4 tracking-[0.2em] drop-shadow-sm"
        >
          Undangan <br /> Pernikahan
        </Motion.h2>
        
        <div className="space-y-1 mb-8">
          <p className="text-[#475569] font-sans text-sm tracking-widest uppercase font-bold">Kepada Bapak/Ibu/Saudara/i:</p>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#0F172A] italic border-b-2 border-[#38BDF8]/30 pb-2 inline-block">
            {guestName || "Tamu Undangan"}
          </h2>
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
          className="px-12 py-3 bg-[#38BDF8] hover:bg-[#0EA5E9] text-white rounded-full shadow-xl shadow-blue-200 text-xs font-bold uppercase tracking-[0.2em] transition-all border border-white/50"
        >
          Buka Undangan
        </Motion.button>
      </div>
    </Motion.div>
  );
};

export default Curtain;