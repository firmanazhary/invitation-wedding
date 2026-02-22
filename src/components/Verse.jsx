import { motion } from 'framer-motion';
import bunga from '../assets/bunga.png'; // Aset mawar besar

const Verse = () => {
  return (
    <section className="relative py-24 px-8 bg-[#E0F2FE] overflow-hidden">
      {/* 1. Background Layering */}
      <div className="absolute inset-0 bg-[#D7E9F7] opacity-50" />
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')] mix-blend-multiply" />

      {/* 2. Ornamen Bunga Mawar yang "Mengepung" Arch */}
      <motion.img 
        src={bunga} 
        animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 -left-20 w-64 opacity-60 z-0" 
      />
      <motion.img 
        src={bunga} 
        animate={{ rotate: [0, -5, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-20 -right-20 w-80 opacity-60 z-0 scale-x-[-1]" 
      />

      {/* 3. Container Arch dengan Animasi Memancar */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-md mx-auto bg-white/40 backdrop-blur-xl rounded-t-full pt-20 pb-16 px-8 text-center border-t-4 border-x-4 border-white/60 shadow-[0_20px_50px_rgba(56,189,248,0.2)] relative z-10"
      >
        {/* Ornamen Atas */}
        <div className="flex justify-center mb-6 text-[#38BDF8] opacity-60">
          <span className="text-3xl">❦</span>
        </div>

        <p className="text-[#1E293B] font-sans text-[10px] tracking-[0.3em] uppercase mb-10 font-black opacity-80">
          — Ar-Ruum: 21 —
        </p>

        {/* Tulisan Arab dengan Drop Shadow Halus */}
        <div className="mb-10">
          <p className="text-2xl md:text-3xl font-serif text-[#0F172A] leading-[2.5] drop-shadow-sm" dir="rtl">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>
        </div>

        {/* Terjemahan dengan Garis Pembatas */}
        <div className="space-y-6 relative">
          <div className="w-12 h-[2px] bg-[#38BDF8]/30 mx-auto" />
          <p className="text-sm italic text-[#334155] leading-relaxed font-medium">
            “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya.”
          </p>
        </div>
      </motion.div>

      {/* 4. Partikel Cahaya (Gleaming Effect) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              opacity: [0, 0.4, 0], 
              scale: [0, 1.5, 0],
              y: [0, -100] 
            }}
            transition={{ 
              duration: 4 + i, 
              repeat: Infinity, 
              delay: i * 2 
            }}
            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]"
            style={{ 
              left: `${20 + Math.random() * 60}%`, 
              bottom: "20%" 
            }}
          />
        ))}
      </div>

      {/* Ornamen Gradasi Bawah */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#BAE6FD] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Verse;