import { motion } from 'framer-motion';
import { DATA_PENGANTIN } from '../constans/content';
import manImage from '../assets/man-image.png';
import womanImage from '../assets/woman-image.png';
import { Instagram } from 'lucide-react';

const Mempelai = () => {
  return (
    /* Mengubah bg-[#FAF9F6] menjadi bg-[#E0F2FE] untuk menjaga kontinuitas warna biru */
    <section className="py-24 px-8 bg-[#E0F2FE] relative overflow-hidden">
      
      {/* Background Watercolor Texture yang disesuaikan */}
      <div className="absolute inset-0 bg-[#D7E9F7] opacity-50" />
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')] mix-blend-multiply" />

      <div className="max-w-md mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 space-y-4"
        >
          <div className="mb-10">
            {/* Warna teks Arab diganti ke Slate gelap (#334155) agar lebih kontras di atas biru */}
            <p className="text-2xl md:text-3xl font-serif text-[#334155] leading-loose" dir="rtl">
              بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْمِ
            </p>
          </div>
          <p className="text-sm italic text-[#475569] leading-relaxed px-4">
            Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah perkenankanlah kami membentuk keluarga yang sakinah, mawaddah, warahmah.
          </p>
        </motion.div>

        {/* Profil Mempelai Pria */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-serif font-bold text-[#334155] mb-2">
            {DATA_PENGANTIN.pria.nama}
          </h3>
          <p className="text-xs text-[#64748b] mb-6 uppercase tracking-widest font-bold">
            Putra ke-2 dari Bapak {DATA_PENGANTIN.pria.ayah} dan Ibu {DATA_PENGANTIN.pria.ibu}
          </p>
          
          {/* Bingkai Foto Arch Pria */}
          <div className="relative w-56 h-72 mx-auto rounded-t-full border-4 border-white shadow-2xl overflow-hidden mb-4 bg-stone-100">
             <img 
               src={manImage}
               alt="Mempelai Pria"
               /* Mengurangi grayscale agar foto lebih hidup di tema biru */
               className="w-full h-full object-cover grayscale-[10%]"
             />
          </div>
          {/* Mengganti warna teks tombol Instagram ke Biru (#38BDF8) sesuai palet Curtain */}
          <button className="text-[#38BDF8] flex items-center justify-center gap-2 mx-auto text-xs font-bold uppercase tracking-wider">
            <Instagram size={14} /> @{DATA_PENGANTIN.pria.nama.toLowerCase()}
          </button>
        </motion.div>

        {/* Simbol Love Penengah - Warna aksen diganti ke Biru Muda */}
        <div className="my-10 flex justify-center opacity-30">
          <div className="h-[1px] w-20 bg-[#38BDF8] self-center" />
          <span className="mx-4 text-2xl text-[#38BDF8]">❦</span>
          <div className="h-[1px] w-20 bg-[#38BDF8] self-center" />
        </div>

        {/* Profil Mempelai Wanita */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-serif font-bold text-[#334155] mb-2">
             {DATA_PENGANTIN.wanita.nama}
          </h3>
          <p className="text-xs text-[#64748b] mb-6 uppercase tracking-widest font-bold">
            Putri ke-8 dari Bapak {DATA_PENGANTIN.wanita.ayah} dan Ibu {DATA_PENGANTIN.wanita.ibu}
          </p>

          {/* Bingkai Foto Arch Wanita */}
          <div className="relative w-56 h-72 mx-auto rounded-t-full border-4 border-white shadow-2xl overflow-hidden mb-4 bg-stone-100">
             <img 
               src={womanImage}
               alt="Mempelai Wanita"
               className="w-full h-full object-cover grayscale-[10%]"
             />
          </div>
          <button className="text-[#38BDF8] flex items-center justify-center gap-2 mx-auto text-xs font-bold uppercase tracking-wider">
            <Instagram size={14} /> @{DATA_PENGANTIN.wanita.nama.toLowerCase()}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Mempelai;