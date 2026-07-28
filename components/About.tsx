// ==========================================
// FILE: src/components/About.tsx
// ==========================================
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, LayoutGrid, Award, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-[#1f1f1f]">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        
        {/* Kolom Kiri: Detail Profil & Teks (8 Kolom di Desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-8 flex flex-col gap-6"
        >
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-green-500 mb-1">ABOUT ME</h4>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              PANJI ADHIKARA
            </h2>
          </div>

          <p className="text-base text-[#a0a0a0] leading-relaxed">
            Saya adalah mahasiswa <span className="text-white font-medium">Teknik Otomasi Listrik Industri</span> di Politeknik Negeri Jakarta yang memiliki passion mendalam di persimpangan antara <span className="text-green-400 font-medium">Automation Engineering</span> dan <span className="text-green-400 font-medium">Scada Engineer</span>. 
          </p>

          <p className="text-base text-[#a0a0a0] leading-relaxed">
            Berbekal latar belakang pendidikan kejuruann selama 4 tahun di bidang Otomasi Industri, saya terbiasa membangun sistem kontrol logika yang presisi menggunakan PLC dan HMI. Ketertarikan saya pada antarmuka modern membawa saya ke dunia Otomasi Industri, di mana saya menerapkan tingkat presisi dan arsitektur logika yang sama kuatnya untuk membangun Mesin yang interaktif, responsif, dan berperforma tinggi.
          </p>

          {/* Quick Stats / Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-mono">
            <div className="flex items-start gap-3 bg-[#141414] border border-[#222] p-4 rounded-xl">
              <GraduationCap className="text-green-500 shrink-0 mt-0.5" size={20} />
              <div>
                <h5 className="text-white text-sm font-bold">Pendidikan</h5>
                <p className="text-xs text-[#888] mt-1">D4 Teknik Otomasi Listrik Industri - Politeknik Negeri Jakarta</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#141414] border border-[#222] p-4 rounded-xl">
              <Award className="text-green-500 shrink-0 mt-0.5" size={20} />
              <div>
                <h5 className="text-white text-sm font-bold">Spesialisasi PLC</h5>
                <p className="text-xs text-[#888] mt-1">Juara Berbagai Kompetisi Dan Terlibat Dalam Project PLC</p>
              </div>
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="/PanjiAdhikara_CV.pdf" 
              download="PanjiAdhikara_CV.pdf"
              className="inline-flex items-center gap-2.5 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-[#e0e0e0] transition-all"
            >
              <Download size={18} />
              Download CV
            </a>
            <a 
              href="#portfolio" 
              className="inline-flex items-center gap-2.5 bg-[#141414] border border-[#333] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#222] hover:border-[#444] transition-all"
            >
              <LayoutGrid size={18} />
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Kolom Kanan: Foto Profil Elegan (4 Kolom di Desktop) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-4 flex justify-center"
        >
          <div className="relative group">
            {/* Ring Border Animasi / Ornamen Neo-Brutalism */}
            <div className="absolute inset-0 border-2 border-dashed border-green-500 rounded-full animate-[spin_40s_linear_infinite] p-2"></div>
            <div className="relative h-64 w-64 md:h-72 md:w-72 rounded-full border-4 border-[#1a1a1a] overflow-hidden m-2 bg-[#1a1a1a] shadow-2xl">
              <Image 
                src="/profile-photo.jpeg"
                alt="Panji Adhikara"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;