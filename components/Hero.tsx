// ==========================================
// FILE: src/components/Hero.tsx
// ==========================================
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, GitBranch, Link } from "lucide-react";
import LanyardCard from "./LanyardCard"; // Komponen Lanyard Interaktif Terpisah

// Komponen TECH STACK BADGES Sederhana
const TechBadge = ({ name }: { name: string }) => (
    <span className="bg-[#1a1a1a] border border-[#333] text-[#a0a0a0] px-3 py-1.5 rounded-full text-xs font-mono font-medium hover:border-green-800 hover:text-white hover:bg-[#1a1a1a]/50 transition-all cursor-default">
        {name}
    </span>
);

const Hero = () => {
  return (
    <section id="home" className="pt-8 pb-12 md:pt-10 md:pb-14 grid md:grid-cols-2 gap-8 md:gap-12 items-center border-b border-[#1f1f1f] min-h-[72vh]">
      {/* Kolom Kiri: Teks & Info */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="flex flex-col gap-6"
      >
        {/* Badge status 'Available for work' */}
        <div className="inline-flex items-center gap-2.5 bg-[#1a1a1a] border border-[#333] px-4 py-2 rounded-full w-fit">
          <span className="relative flex h-2.5 w-2.5">
            {/* Dot hijau berkedip (ping animation) */}
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-[#e0e0e0]">Available for work</span>
        </div>

        {/* Judul teks besar bold */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tighter">
          Automation & Scada <span className="text-green-500">Engineer.</span>
        </h1>

        {/* Sub-deskripsi */}
        <p className="text-lg text-[#a0a0a0] max-w-xl leading-relaxed">
          Hello, I'm <span className="text-white font-semibold">Panji Adhikara</span>. Creating modern, responsive, and interactive Automation Systems. 
          Bringing the precision of Industrial Automation to the digital world.
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          <TechBadge name="Ecostruxure Machine Experts" />
          <TechBadge name="Machine Scada Experts" />
          <TechBadge name="Haiwell Cloud SCADA" />
          <TechBadge name="Aveva Plant SCADA" />
          <TechBadge name="Siemens Tia Portal" />
          <TechBadge name="Cx One" />
          <TechBadge name="Weintek" />
        </div>

        {/* Tombol Aksi */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <a href="#portfolio" className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-green-500 transition-all shadow-lg shadow-green-600/10">
            View My Projects
            <ArrowRight size={20} />
          </a>
          <a href="/PanjiAdhikara_CV.pdf" download="PanjiAdhikara_CV.pdf" className="inline-flex items-center justify-center gap-2.5 bg-[#1a1a1a] border border-[#333] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[#252525] hover:border-[#444] transition-all">
            Download CV
            <Download size={20} />
          </a>
        </div>
        
        {/* Social Links Kecil */}
        <div className="flex flex-wrap items-center gap-3 pt-8">
            <a href="https://github.com/panji126" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2.5 rounded-xl border border-[#333] bg-[#141414] text-[#a0a0a0] hover:text-white hover:border-green-500 transition-all">
              <GitBranch size={18} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/panji-adhikara-100b97300/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2.5 rounded-xl border border-[#333] bg-[#141414] text-[#a0a0a0] hover:text-white hover:border-green-500 transition-all">
              <Link size={18} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/paanj1/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2.5 rounded-xl border border-[#333] bg-[#141414] text-[#a0a0a0] hover:text-white hover:border-green-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
              </svg>
              <span className="text-sm font-medium">Instagram</span>
            </a>
            <a href="https://wa.me/6282111832697" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2.5 rounded-xl border border-[#333] bg-[#141414] text-[#a0a0a0] hover:text-white hover:border-green-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-more">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                <path d="M8 12h.01"></path>
                <path d="M12 12h.01"></path>
                <path d="M16 12h.01"></path>
              </svg>
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
        </div>

      </motion.div>

      {/* Kolom Kanan: Lanyard Interaktif / ID Card */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="flex justify-center md:justify-end"
      >
        <LanyardCard />
      </motion.div>
    </section>
  );
};

export default Hero;