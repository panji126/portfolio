// ==========================================
// FILE: src/components/LanyardCard.tsx
// ==========================================
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, MapPin } from "lucide-react";

const LanyardCard = () => {
    // Pengaturan Framer Motion untuk efek 3D Tilt saat Hover
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring untuk pergerakan yang mulus
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

    // Tangani pergerakan kursor
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPercent = mouseX / width - 0.5;
        const yPercent = mouseY / height - 0.5;
        x.set(xPercent);
        y.set(yPercent);
    };

    // Tangani kursor meninggalkan kartu (kembali ke posisi awal)
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative h-[480px] w-[310px] bg-[#1a1a1a] border-4 border-[#333] rounded-[24px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] p-6 flex flex-col items-center gap-6 cursor-pointer overflow-hidden border-b-[16px]"
        >
            {/* Efek Shine Melayang (Overlay) */}
            <div style={{ transform: "translateZ(100px)" }} className="absolute -inset-20 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.1),transparent_70%)] rounded-[30px] opacity-70"></div>

            {/* Bagian Atas: Logo & Status */}
            <div style={{ transform: "translateZ(80px)" }} className="w-full flex items-center justify-between pb-4 border-b border-[#333]">
                <span className="font-mono text-xl font-black text-green-500">PNJ</span>
                <div className="flex items-center gap-1.5 bg-green-600/10 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs font-semibold">
                    <ShieldCheck size={14} />
                    VERIFIED
                </div>
            </div>

            {/* Bagian Tengah: Foto Profil */}
            <div style={{ transform: "translateZ(120px)" }} className="relative h-48 w-48 rounded-full border-4 border-[#333] p-1 bg-[#1a1a1a] flex items-center justify-center overflow-hidden shadow-inner shadow-black/50">
                <Image
                    src="/profile-photo.jpeg"
                    alt="Panji Adhikara Profile Photo"
                    fill
                    className="object-cover rounded-full filter contrast-110"
                />
            </div>

            {/* Bagian Bawah: Nama & Detail */}
            <div style={{ transform: "translateZ(90px)" }} className="flex flex-col items-center gap-2 text-center pt-2">
                <h3 className="text-3xl font-black text-white leading-none tracking-tighter">
                    Panji Adhikara
                </h3>
                <p className="text-sm font-mono text-[#888]">Automation Engineering '24</p>
                
                <div className="inline-flex items-center gap-1 text-[#aaa] pt-2 text-sm">
                    <MapPin size={14} className="text-[#666]"/>
                    Depok, Indonesia
                </div>
            </div>

             {/* Chip "Frontend Developer" di pojok */}
            <div style={{ transform: "translateZ(70px)" }} className="absolute bottom-6 left-6 right-6 bg-[#0f0f0f] border border-[#333] p-3 rounded-xl flex items-center gap-3">
                 <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                 <p className="text-xs font-mono text-[#eee]">Role: Automation Engineer</p>
            </div>
            
             {/* Teks ID/No Seri di tepi bawah */}
            <p className="absolute bottom-1.5 left-6 text-[10px] font-mono text-[#444] uppercase tracking-widest">ID-P.ADK-2023-FDEV</p>

        </motion.div>
    );
};

export default LanyardCard;