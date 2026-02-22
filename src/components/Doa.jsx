import { motion } from 'framer-motion';

const Doa = () => {
  return (
    <section className="relative py-24 px-8 bg-[#FAF9F6] overflow-hidden">
      {/* Container utama dengan bentuk Arch (Lengkungan) */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-md mx-auto bg-[#D2B48C]/40 backdrop-blur-sm rounded-t-full pt-20 pb-16 px-8 text-center border border-white/30 shadow-xl relative z-10"
      >
        <h3 className="text-3xl font-serif italic text-[#4A3F35] mb-2">
          Doa Untuk
        </h3>
        <h3 className="text-3xl font-serif italic text-[#4A3F35] mb-6">
          Kedua Mempelai
        </h3>
        
        <div className="flex justify-center mb-8 opacity-40 text-[#B58D67]">
          <span className="text-2xl">❦</span>
        </div>

        {/* Tulisan Arab Doa */}
        <div className="mb-8">
          <p className="text-2xl md:text-3xl font-serif text-[#4A3F35] leading-loose" dir="rtl">
            بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
        </div>

        {/* Terjemahan */}
        <div className="space-y-4">
          <p className="text-sm italic text-[#6B5B4B] leading-relaxed">
            “Semoga Allah Memberkahimu Di Waktu Bahagia Dan Memberkahimu Di Waktu Susah, Serta Semoga Allah Mempersatukan Kalian Berdua Dalam Kebaikan”
          </p>
          <p className="text-xs font-bold text-[#4A3F35] tracking-widest uppercase">
            (HR. Abu Dawud No. 2130)
          </p>
        </div>
      </motion.div>

      {/* Ornamen Gradasi di bawah untuk transisi ke section penutup */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#B58D67]/20 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Doa;