// ==========================================
// FILE: src/app/layout.tsx
// ==========================================
import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google"; // Font bersih dan Monospace untuk logo
import "./globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast"; // Opsional: Untuk notifikasi form kontak

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Panji Adhikara | Frontend Developer & Automation Enthusiast",
  description: "Portofolio Personal Panji Adhikara - Frontend Developer modern dengan keahlian di bidang Automation Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans bg-[#0b0b0b] text-[#e0e0e0] antialiased`}>
        {/* POLA GRID BACKGROUND GLOBAL */}
        <div className="fixed inset-0 z-[-1] h-full w-full bg-[#0b0b0b] bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[32px_32px] opacity-30"></div>
        
        <Navbar />
        
        {/* Main Content Area */}
        <main className="relative z-0 pt-20 pb-16">
          {children}
        </main>
        
        {/* Notifikasi Toast (jika digunakan) */}
        <Toaster position="bottom-right" toastOptions={{ style: { background: '#1a1a1a', color: '#fff', border: '1px solid #333' } }} />

        {/* Footer Sederhana */}
        <footer className="w-full border-t border-[#1f1f1f] bg-[#0d0d0d] py-6 text-center text-sm text-[#888]">
          <p>&copy; {new Date().getFullYear()} Panji.dev. All Rights Reserved.</p>
          <p className="font-mono text-xs mt-1">Inspired by Modern Clean Tech Aesthetic</p>
        </footer>
      </body>
    </html>
  );
}