// ==========================================
// FILE: src/components/ContactSection.tsx
// ==========================================
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Link, MessageSquare, Send, Heart, User } from "lucide-react";

// Struktur Tipe Komentar Mock
interface CommentItem {
  id: number;
  name: string;
  text: string;
  likes: number;
  date: string;
}

export default function ContactSection() {
  // --- STATE FORM HUBUNGI SAYA ---
  const [formEmail, setFormEmail] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");
  
  // --- STATE FOR COMMENTS SECTION ---
  const [comments, setComments] = useState<CommentItem[]>([
    { id: 1, name: "Pak Eko (Dosen)", text: "Proyek monitoring THD Inverter kemarin luar biasa, Panji. Teruskan modifikasi antarmuka visualnya!", likes: 5, date: "2 Jam yang lalu" },
    { id: 2, name: "Rian (KSM Ecosys)", text: "Mantap kodenya bang! Ditunggu kelas mini automation di sekretariat.", likes: 3, date: "1 Hari yang lalu" }
  ]);
  const [commentForm, setCommentForm] = useState({ name: "", text: "" });

  // Handle Pengiriman Pesan Kontak Utama
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formEmail.name.trim() || !formEmail.email.trim() || !formEmail.message.trim()) {
      setStatusMessage("Silakan isi nama, email, dan pesan sebelum mengirim.");
      return;
    }

    const subject = encodeURIComponent(`Website Contact from ${formEmail.name}`);
    const body = encodeURIComponent(
      `Name: ${formEmail.name}\nEmail: ${formEmail.email}\n\nMessage:\n${formEmail.message}`
    );

    const mailtoLink = `mailto:panjiadhikara233@gmail.com?subject=${subject}&body=${body}`;

    if (typeof window !== "undefined") {
      window.location.href = mailtoLink;
      setStatusMessage("Aplikasi email Anda sedang terbuka. Silakan kirim pesan dari Gmail.");
    } else {
      setStatusMessage("Tidak bisa membuka email saat ini.");
    }

    setFormEmail({ name: "", email: "", message: "" });
  };

  // Handle Post Komentar Langsung
  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentForm.name || !commentForm.text) return;
    
    const newComment: CommentItem = {
      id: Date.now(),
      name: commentForm.name,
      text: commentForm.text,
      likes: 0,
      date: "Baru saja"
    };

    setComments([newComment, ...comments]);
    setCommentForm({ name: "", text: "" });
  };

  // Tambah Jumlah Like Komentar Komponen
  const handleLike = (id: number) => {
    setComments(comments.map(c => c.id === id ? { ...c, likes: c.likes + 1 } : c));
  };

  return (
    <section id="contact" className="py-16">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        
        {/* KOLOM KIRI: HUBUNGI SAYA FORM */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-green-500 mb-1">GET IN TOUCH</h4>
            <h2 className="text-3xl font-black text-white">HUBUNGI SAYA</h2>
            <p className="text-sm text-[#888] mt-2 leading-relaxed">
              Punya tawaran proyek kolaborasi menarik atau kebutuhan integrasi instrumen kendali web? Silakan kirimkan pesan langsung di bawah ini.
            </p>
          </div>

          <form onSubmit={handleSendMessage} className="flex flex-col gap-4 font-mono text-xs">
            <div className="flex flex-col gap-1.5">
              <label className="text-[#aaa] font-bold">NAMA</label>
              <input 
                type="text" required placeholder="Masukkan nama lengkap"
                value={formEmail.name} onChange={e => setFormEmail({...formEmail, name: e.target.value})}
                className="bg-[#141414] border border-[#222] focus:border-green-500 p-3.5 rounded-xl text-[#eee] outline-none"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[#aaa] font-bold">EMAIL</label>
              <input 
                type="email" required placeholder="alamat@email.com"
                value={formEmail.email} onChange={e => setFormEmail({...formEmail, email: e.target.value})}
                className="bg-[#141414] border border-[#222] focus:border-green-500 p-3.5 rounded-xl text-[#eee] outline-none"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[#aaa] font-bold">PESAN</label>
              <textarea 
                rows={4} required placeholder="Tulis baris pesan Anda di sini..."
                value={formEmail.message} onChange={e => setFormEmail({...formEmail, message: e.target.value})}
                className="bg-[#141414] border border-[#222] focus:border-green-500 p-3.5 rounded-xl text-[#eee] outline-none resize-none"
              />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-sans font-bold text-sm p-3.5 rounded-xl hover:bg-green-500 transition-all shadow-md mt-2">
              Send Message <Send size={16}/>
            </button>
            {statusMessage ? (
              <p className="text-sm text-green-400">{statusMessage}</p>
            ) : null}
          </form>

          {/* Deretan Media Sosial */}
          <div className="pt-4 border-t border-[#1f1f1f]">
            <span className="font-mono text-[11px] text-[#555] block mb-3 uppercase tracking-wider">EXTERNAL SOCIAL CONNECTIONS</span>
            <div className="flex flex-wrap gap-3 text-[#a0a0a0]">
              <a href="https://github.com/panji126" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2.5 bg-[#141414] border border-[#222] rounded-xl hover:text-white hover:border-green-500 transition-all">
                <GitBranch size={18} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/panji-adhikara-100b97300/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2.5 bg-[#141414] border border-[#222] rounded-xl hover:text-white hover:border-green-500 transition-all">
                <Link size={18} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/paanj1/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2.5 bg-[#141414] border border-[#222] rounded-xl hover:text-white hover:border-green-500 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a href="https://wa.me/6282111832697" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2.5 bg-[#141414] border border-[#222] rounded-xl hover:text-white hover:border-green-500 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-more">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  <path d="M8 12h.01"></path>
                  <path d="M12 12h.01"></path>
                  <path d="M16 12h.01"></path>
                </svg>
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* KOLOM KANAN: INTERACTIVE COMMENTS SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#141414] border border-[#222] p-6 rounded-2xl flex flex-col gap-6"
        >
          <div className="flex items-center gap-2 pb-4 border-b border-[#222]">
            <MessageSquare className="text-green-500" size={20} />
            <h3 className="text-lg font-bold text-white">Guestbook / Comments</h3>
          </div>

          {/* Form Pengisian Komentar */}
          <form onSubmit={handlePostComment} className="flex flex-col gap-3 font-mono text-xs">
            <input 
              type="text" required placeholder="Nama Anda/Anonim"
              value={commentForm.name} onChange={e => setCommentForm({...commentForm, name: e.target.value})}
              className="bg-[#0b0b0b] border border-[#222] focus:border-green-500 p-3 rounded-lg text-[#eee] outline-none"
            />
            <div className="flex gap-2">
              <input 
                type="text" required placeholder="Tinggalkan jejak komentar di sini..."
                value={commentForm.text} onChange={e => setCommentForm({...commentForm, text: e.target.value})}
                className="grow bg-[#0b0b0b] border border-[#222] focus:border-green-500 p-3 rounded-lg text-[#eee] outline-none"
              />
              <button type="submit" className="bg-green-600 font-sans font-bold text-white text-xs px-4 rounded-lg hover:bg-green-500 transition-colors shrink-0">
                Post
              </button>
            </div>
          </form>

          {/* List Tampilan Komentar Masuk */}
          <div className="flex flex-col gap-3 max-h-72 overflow-y-auto pr-1">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-[#0b0b0b] border border-[#222] p-4 rounded-xl flex flex-col gap-2 justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white inline-flex items-center gap-1">
                      <User size={12} className="text-green-500" /> {comment.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#555]">{comment.date}</span>
                  </div>
                  <p className="text-xs text-[#a0a0a0] leading-relaxed pr-2">{comment.text}</p>
                </div>
                
                {/* Tombol Like Interaktif */}
                <button 
                  onClick={() => handleLike(comment.id)}
                  className="self-end inline-flex items-center gap-1.5 font-mono text-[10px] text-[#666] hover:text-red-500 bg-[#141414] px-2 py-1 border border-[#222] rounded-md transition-colors"
                >
                  <Heart size={10} className="fill-none stroke-current" />
                  <span>{comment.likes} Likes</span>
                </button>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}