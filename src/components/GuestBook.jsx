import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useSearchParams } from 'react-router-dom';
import { MessageSquare, Send, Users, UserX } from 'lucide-react';

const GuestBook = () => {
  const [searchParams] = useSearchParams();
  // Mengambil nama tamu dari URL sebagai nilai awal (default)
  const defaultName = searchParams.get('to') || '';

  const [comments, setComments] = useState([]);
  const [nama, setNama] = useState(defaultName);
  const [ucapan, setUcapan] = useState('');
  const [kehadiran, setKehadiran] = useState('Hadir');

  // Statistik kehadiran
  const jmlHadir = comments.filter(c => c.status === 'Hadir').length;
  const jmlAbsen = comments.filter(c => c.status === 'Tidak hadir').length;

  useEffect(() => {
    const ambilData = async () => {
      const { data } = await supabase.from('comments').select('*').order('created_at', { ascending: false });
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
    if (!nama || !ucapan) return alert("Mohon isi nama dan ucapan");

    const { error } = await supabase.from('comments').insert([
      { name: nama, message: ucapan, status: kehadiran }
    ]);

    if (!error) setUcapan('');
  };

  return (
    <section className="py-20 px-6 bg-[#FAF9F6]">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-3xl font-serif italic text-[#4A3F35] mb-2">Berikan Ucapan</h3>
        <div className="flex justify-center mb-8 opacity-40">❦</div>

        <p className="text-sm text-[#8B7E74] mb-10 leading-relaxed italic">
          Silahkan memberikan sedikit pesan dan ucapan kepada kami, barakallahu fiikum.
        </p>

        {/* Card Statistik (Sesuai Gambar) */}
        <div className="bg-white rounded-[2rem] shadow-xl p-8 mb-10 border border-stone-100">
          <h4 className="text-lg font-bold mb-6 text-[#4A3F35]">{comments.length} Ucapan</h4>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-[#489d67] text-white p-4 rounded-2xl">
              <div className="text-2xl font-bold">{jmlHadir}</div>
              <div className="text-[10px] uppercase font-bold tracking-widest">Hadir</div>
            </div>
            <div className="bg-[#d12424] text-white p-4 rounded-2xl">
              <div className="text-2xl font-bold">{jmlAbsen}</div>
              <div className="text-[10px] uppercase font-bold tracking-widest">Tidak hadir</div>
            </div>
          </div>

          {/* Form Input */}
          <form onSubmit={kirimUcapan} className="space-y-4">
            <input 
              type="text" 
              placeholder="Nama" 
              value={nama} 
              onChange={(e) => setNama(e.target.value)}
              className="w-full p-4 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#B58D67] outline-none text-sm"
            />
            <textarea 
              placeholder="Ucapan" 
              value={ucapan} 
              onChange={(e) => setUcapan(e.target.value)}
              className="w-full p-4 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#B58D67] outline-none text-sm min-h-[100px]"
            />
            <select 
              value={kehadiran} 
              onChange={(e) => setKehadiran(e.target.value)}
              className="w-full p-4 rounded-xl border border-stone-200 bg-white text-sm outline-none"
            >
              <option value="Hadir">Konfirmasi Kehadiran - Hadir</option>
              <option value="Tidak hadir">Konfirmasi Kehadiran - Tidak Hadir</option>
            </select>
            <button type="submit" className="w-full bg-[#B58D67] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex justify-center items-center gap-2">
              <Send size={16} /> Kirim Ucapan
            </button>
          </form>
        </div>

        {/* List Ucapan */}
        <div className="space-y-4 text-left max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {comments.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#B58D67]">
              <div className="flex justify-between items-start mb-2">
                <p className="font-bold text-[#4A3F35] text-sm">{item.name}</p>
                <span className={`text-[9px] px-2 py-1 rounded-full uppercase font-bold ${item.status === 'Hadir' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {item.status}
                </span>
              </div>
              <p className="text-stone-600 text-xs italic leading-relaxed">"{item.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestBook;