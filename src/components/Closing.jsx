import { motion } from 'framer-motion';
import { DATA_PENGANTIN } from '../constans/content';

const Closing = () => {
  return (
    <section className="relative py-24 px-8 bg-[#FAF9F6] overflow-hidden">
      {/* Background Watercolor Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')]" />

      <div className="max-w-md mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Salam Penutup */}
          <div className="mb-10">
            <p className="text-2xl md:text-3xl font-serif text-[#4A3F35] leading-loose" dir="rtl">
              السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-sm text-[#8B7E74] leading-relaxed italic px-4">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu kepada kami.
            </p>
            
            <p className="text-sm text-[#8B7E74] leading-relaxed italic px-4">
              Atas perhatiannya, kami mengucapkan Jazaakumullah Khairan.
            </p>
          </div>

          {/* Ilustrasi Pasangan (Arch) */}
          <div className="relative w-48 h-64 mx-auto rounded-t-full border-4 border-white shadow-2xl overflow-hidden bg-stone-200 my-12">
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" 
              alt="Closing Illustration"
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </div>

          {/* Nama Mempelai */}
          <div className="space-y-2">
            <h3 className="text-4xl font-serif font-bold text-[#B58D67] italic">
              {DATA_PENGANTIN.pria.nama} & {DATA_PENGANTIN.wanita.nama}
            </h3>
            <div className="flex justify-center opacity-30 text-[#B58D67]">
              <span className="text-xl">❦</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ornamen Bunga Kering di Pojok (Goyang Halus) */}
      <motion.div 
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -right-10 w-48 h-48 opacity-40 pointer-events-none"
      >
        <img 
          src="/assets/bunga.png" 
          alt="decor" 
          className="w-full h-full object-contain rotate-180"
        />
      </motion.div>
    </section>
  );
};

export default Closing;