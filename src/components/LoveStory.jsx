import { motion } from 'framer-motion';
import { DATA_PENGANTIN } from '../constans/content';

const LoveStory = () => {
  return (
    /* Mengubah background section menjadi biru muda cerah agar sinkron */
    <section className="relative py-24 px-8 bg-[#E0F2FE] overflow-hidden">
      
      {/* Background Watercolor Texture untuk konsistensi nuansa kertas biru */}
      <div className="absolute inset-0 bg-[#D7E9F7] opacity-50" />
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')] mix-blend-multiply" />

      <div className="max-w-md mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {/* Judul menggunakan warna Slate gelap agar terlihat profesional */}
          <h3 className="text-4xl font-serif italic text-[#334155]">Love Story</h3>
          {/* Aksen warna biru muda untuk ornamen penengah */}
          <div className="flex justify-center mt-4 opacity-40 text-[#38BDF8]">❦</div>
        </motion.div>

        {/* Kartu Cerita Melengkung */}
        <div className="relative">
          {DATA_PENGANTIN.loveStory.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              /* bg-[#93C5FD]/30: Warna biru muda transparan yang elegan dengan border biru cerah */
              className={`relative bg-[#93C5FD]/30 backdrop-blur-md p-10 mb-8 shadow-xl border-l-4 border-[#38BDF8]
                ${index === 0 ? 'rounded-tl-[5rem] rounded-br-3xl' : 'rounded-3xl'} 
                text-center overflow-hidden border border-white/40`}
            >
              <h4 className="text-2xl font-serif italic text-[#334155] mb-2">{item.judul}</h4>
              <p className="text-[#0EA5E9] font-bold text-xs uppercase tracking-[0.2em] mb-4">
                {item.waktu}
              </p>
              <p className="text-sm text-[#475569] leading-relaxed italic">
                "{item.deskripsi}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveStory;