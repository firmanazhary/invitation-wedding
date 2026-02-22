import { motion } from 'framer-motion';

const Verse = () => {
  return (
    /* Mengubah bg dasar menjadi biru muda agar sinkron dengan Hero sebelumnya */
    <section className="relative py-24 px-8 bg-[#E0F2FE] overflow-hidden">
      
      {/* Background Watercolor Texture untuk konsistensi nuansa kertas */}
      <div className="absolute inset-0 bg-[#D7E9F7] opacity-50" />
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')] mix-blend-multiply" />

      {/* Container utama dengan bentuk Arch (Lengkungan) - Menggunakan Biru Transparan */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        /* bg-[#93C5FD]/30: Memberikan warna biru muda transparan yang elegan */
        className="max-w-md mx-auto bg-[#93C5FD]/30 backdrop-blur-md rounded-t-full pt-20 pb-16 px-8 text-center border border-white/40 shadow-xl relative z-10"
      >
        <p className="text-[#334155] font-sans text-xs tracking-widest uppercase mb-8 font-bold opacity-70">
          Allah Ta'ala berfirman,
        </p>

        {/* Tulisan Arab - Menggunakan Slate agar tetap tajam di atas biru */}
        <div className="mb-8">
          <p className="text-2xl md:text-3xl font-serif text-[#334155] leading-loose dir-rtl" style={{ fontFamily: 'serif' }}>
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>
        </div>

        {/* Terjemahan */}
        <div className="space-y-4">
          <p className="text-sm italic text-[#475569] leading-relaxed">
            “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya.”
          </p>
          <p className="text-xs font-bold text-[#334155] tracking-widest uppercase opacity-80">
            (QS. Ar-Ruum: 21)
          </p>
        </div>
      </motion.div>

      {/* Ornamen Transparan di Background - Gradasi Biru */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#E0F2FE] to-transparent z-20 pointer-events-none" />
      
      {/* Teks Judul Section Selanjutnya yang mengintip - Putih Transparan */}
      <div className="absolute -bottom-4 left-0 right-0 text-center z-10">
        <h3 className="text-4xl font-serif text-white/40 italic select-none tracking-widest">
          Pasangan Mempelai
        </h3>
      </div>
    </section>
  );
};

export default Verse;