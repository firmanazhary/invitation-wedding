import { motion } from 'framer-motion';
import { DATA_PENGANTIN } from '../constans/content';
import bunga from '../assets/bunga.png'; // Menggunakan path yang konsisten

const Closing = () => {
  return (
    /* Mengubah bg dasar menjadi biru muda cerah (#E0F2FE) agar sinkron */
    <section className="relative py-24 px-8 bg-[#E0F2FE] overflow-hidden">
      
      {/* Background Decor: Tekstur Watercolor Biru */}
      <div className="absolute inset-0 bg-[#D7E9F7] opacity-50" />
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')] mix-blend-multiply" />

      <div className="max-w-md mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Salam Penutup - Menggunakan Slate gelap agar tajam di atas biru */}
          <div className="mb-10">
            <p className="text-2xl md:text-3xl font-serif text-[#334155] leading-loose" dir="rtl">
              السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-sm text-[#475569] leading-relaxed italic px-4 font-medium">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu kepada kami.
            </p>
            
            <p className="text-sm text-[#475569] leading-relaxed italic px-4 font-medium">
              Atas perhatiannya, kami mengucapkan Jazaakumullah Khairan.
            </p>
          </div>

          {/* Ilustrasi Pasangan (Arch) - Dengan border biru muda transparan */}
          <div className="relative w-48 h-64 mx-auto rounded-t-full border-4 border-white shadow-2xl overflow-hidden bg-blue-50 my-12">
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" 
              alt="Closing Illustration"
              className="w-full h-full object-cover grayscale-[10%] brightness-105"
            />
          </div>

          {/* Nama Mempelai - Menggunakan aksen biru cerah (#38BDF8) */}
          <div className="space-y-2">
            <h3 className="text-4xl font-serif font-bold text-[#38BDF8] italic">
              {DATA_PENGANTIN.pria.nama} & {DATA_PENGANTIN.wanita.nama}
            </h3>
            <div className="flex justify-center opacity-40 text-[#38BDF8]">
              <span className="text-xl">❦</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ornamen Bunga Mawar di Pojok (Goyang Halus) - Opacity dinaikkan sedikit */}
      <motion.div 
        animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -right-10 w-56 h-56 opacity-60 pointer-events-none"
      >
        <img 
          src={bunga} 
          alt="decor" 
          className="w-full h-full object-contain rotate-180"
        />
      </motion.div>

      {/* Ornamen Bunga Tambahan di Pojok Bawah agar seimbang */}
      <motion.div 
        animate={{ rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 -left-10 w-56 h-56 opacity-60 pointer-events-none"
      >
        <img 
          src={bunga} 
          alt="decor bottom" 
          className="w-full h-full object-contain"
        />
      </motion.div>
    </section>
  );
};

export default Closing;