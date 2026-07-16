// ==========================================
// FILE: src/components/Navbar.tsx
// ==========================================
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Ikon Mobile Menu

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0b0b0b]/80 backdrop-blur-md border-b border-[#1f1f1f]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Pojok Kiri Atas: Logo Teks Monospace */}
        <Link href="/" className="font-mono text-xl font-bold tracking-tight text-white hover:text-green-400 transition-colors">
          Panji<span className="text-green-500">.</span>dev
        </Link>

        {/* Pojok Kanan Atas: Navigasi Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="relative group text-sm text-[#a0a0a0] hover:text-white transition-colors">
              {link.name}
              {/* Efek Bawah Smooth Interaktif saat Hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link href="#contact" className="bg-green-600/10 text-green-400 border border-green-500/20 px-4 py-1.5 rounded-full text-xs font-medium hover:bg-green-600/20 transition-all">
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#a0a0a0] hover:text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden absolute top-full left-0 w-full bg-[#0d0d0d] border-b border-[#1f1f1f] px-6 py-8"
            >
                <div className="flex flex-col gap-6 items-center">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            className="text-lg text-[#a0a0a0] hover:text-white"
                            onClick={() => setIsOpen(false)} // Tutup menu setelah diklik
                        >
                            {link.name}
                        </Link>
                    ))}
                     <Link href="#contact" className="w-full text-center bg-green-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-500 transition-all">
                        Hire Me
                    </Link>
                </div>
            </motion.div>
        )}
    </motion.nav>
  );
};

export default Navbar;