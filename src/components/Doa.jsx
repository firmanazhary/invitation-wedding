import { motion } from 'framer-motion';

const Doa = () => {
  return (
    /* Mengubah bg dasar menjadi biru muda cerah agar selaras dengan section sebelumnya */
    <section className="relative py-24 px-8 bg-[#E0F2FE] overflow-hidden">
      
      {/* Background Decor: Tekstur Watercolor Biru */}
      <div className="absolute inset-0 bg-[#D7E9F7] opacity-50" />
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')] mix-blend-multiply" />

      {/* Container utama dengan bentuk Arch (Lengkungan) - Menggunakan Biru Transparan */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        /* bg-[#93C5FD]/30: Memberikan efek glassmorphism biru yang mewah */
        className="max-w-md mx-auto bg-[#93C5FD]/30 backdrop-blur-md rounded-t-full pt-20 pb-16 px-8 text-center border border-white/40 shadow-xl relative z-10"
      >
        <h3 className="text-3xl font-serif italic text-[#334155] mb-2">
          Doa Untuk
        </h3>
        <h3 className="text-3xl font-serif italic text-[#334155] mb-6">
          Kedua Mempelai
        </h3>
        
        {/* Mengubah warna ornamen ke biru cerah */}
        <div className="flex justify-center mb-8 opacity-40 text-[#38BDF8]">
          <span className="text-2xl">❦</span>
        </div>

        {/* Tulisan Arab Doa - Menggunakan Slate gelap agar tetap tajam */}
        <div className="mb-8">
          <p className="text-2xl md:text-3xl font-serif text-[#334155] leading-loose" dir="rtl">
            بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
        </div>

        {/* Terjemahan */}
        <div className="space-y-4">
          <p className="text-sm italic text-[#475569] leading-relaxed">
            “Semoga Allah Memberkahimu Di Waktu Bahagia Dan Memberkahimu Di Waktu Susah, Serta Semoga Allah Mempersatukan Kalian Berdua Dalam Kebaikan”
          </p>
          <p className="text-xs font-bold text-[#334155] tracking-widest uppercase opacity-80">
            (HR. Abu Dawud No. 2130)
          </p>
        </div>
      </motion.div>

      {/* Ornamen Gradasi Biru untuk transisi halus */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#38BDF8]/20 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Doa;