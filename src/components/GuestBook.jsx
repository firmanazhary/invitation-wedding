import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useSearchParams } from 'react-router-dom';
import { Send, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GuestBook = () => {
  const [searchParams] = useSearchParams();
  const defaultName = searchParams.get('to') || '';

  const [comments, setComments] = useState([]);
  const [nama, setNama] = useState(defaultName);
  const [ucapan, setUcapan] = useState('');

  useEffect(() => {
    const ambilData = async () => {
      const { data } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false });
      setComments(data || []);
    };
    ambilData();

    const channel = supabase.channel('realtime-ucapan')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'comments' }, (payload) => {
        setComments((prev) => [payload.new, ...prev]);
      }).subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  const kirimUcapan = async (e) => {
    e.preventDefault();
    if (!nama || !ucapan) return alert("Mohon isi nama dan doa terbaik Anda");

    const { error } = await supabase.from('comments').insert([
      { name: nama, message: ucapan, status: 'Hadir' } // Status tetap dikirim sebagai default di DB
    ]);

    if (!error) setUcapan('');
  };

  return (
    <section className="py-24 px-6 bg-[#E0F2FE] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[#D7E9F7] opacity-50" />
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/watercolor-paper.png')] mix-blend-multiply" />

      <div className="max-w-md mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-4xl font-serif italic text-[#334155] mb-2">Doa & Ucapan</h3>
          <div className="flex justify-center mb-8 opacity-40 text-[#38BDF8]">❦</div>
          <p className="text-sm text-[#64748b] mb-10 leading-relaxed italic">
            Berikan doa terbaik Anda untuk mengiringi langkah baru kami.
          </p>
        </motion.div>

        {/* Input Card - Glassmorphism Style */}
        <div className="bg-white/70 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-8 mb-12 border border-white/50">
          <div className="flex items-center justify-center gap-2 mb-6 text-[#334155]">
            <MessageCircle size={20} className="text-[#38BDF8]" />
            <h4 className="text-lg font-bold font-serif">{comments.length} Doa Terkirim</h4>
          </div>

          <form onSubmit={kirimUcapan} className="space-y-4">
            <input 
              type="text" 
              placeholder="Nama Anda" 
              value={nama} 
              onChange={(e) => setNama(e.target.value)}
              className="w-full p-4 rounded-2xl border border-blue-100 bg-white/80 focus:ring-2 focus:ring-[#38BDF8] outline-none text-sm transition-all"
            />
            <textarea 
              placeholder="Tulis doa terbaik..." 
              value={ucapan} 
              onChange={(e) => setUcapan(e.target.value)}
              className="w-full p-4 rounded-2xl border border-blue-100 bg-white/80 focus:ring-2 focus:ring-[#38BDF8] outline-none text-sm min-h-[120px] transition-all"
            />
            <button 
              type="submit" 
              className="w-full bg-[#38BDF8] hover:bg-[#0EA5E9] text-white py-4 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs flex justify-center items-center gap-2 shadow-lg shadow-blue-200 transition-all active:scale-95"
            >
              <Send size={16} /> Kirim Doa
            </button>
          </form>
        </div>

        {/* List Ucapan - Auto Scroll Area */}
        <div className="space-y-4 text-left max-h-[600px] overflow-y-auto pr-2 custom-scrollbar scroll-smooth">
          <AnimatePresence>
            {comments.map((item, index) => (
              <motion.div 
                key={item.id || index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/90 p-6 rounded-3xl shadow-sm border-l-4 border-[#38BDF8] relative overflow-hidden"
              >
                {/* Dekorasi tipis di dalam card */}
                <div className="absolute top-0 right-0 p-2 opacity-5">
                  <MessageCircle size={40} />
                </div>
                
                <p className="font-bold text-[#334155] text-sm mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                  {item.name}
                </p>
                <p className="text-[#475569] text-xs italic leading-relaxed">
                  "{item.message}"
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default GuestBook;