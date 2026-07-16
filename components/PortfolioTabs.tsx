// ==========================================
// FILE: src/components/PortfolioTabs.tsx
// ==========================================
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Layers, ShieldAlert, ArrowLeft, Maximize2, Cpu } from "lucide-react";

// --- MOCK DATA PROJECTS ---
const projectsData = [
  {
    id: "p1",
    title: "Automatic Water Pump Distribution",
    category: "Automation / Web",
    desc: "Sistem otomasi handal dan pemantauan HMI terintegrasi untuk jaringan distribusi air PDAM skala regional.",
    longDesc: "Proyek berskala industri ini menggabungkan pemrograman sistem kendali PLC utama dengan antarmuka HMI interaktif untuk memantau performa debit air, kontrol pompa otomatis, dan deteksi alarm pada sistem secara real-time demi efisiensi operasional mutakhir.",
    techStack: ["Schneider PLC", "Vijeo Designer", "Modbus RTU", "Harmony HMI", "Ladder Logic"],
    features: ["Kontrol Pompa Otomatis Terjadwal", "HMI Monitoring frequency, arus, tegangan & Lainnya", "Monitoring Riwayat Data & Alarm Real-time"],
    image: "/waterpumpdistributioncover.jpg"
  },
  {
    id: "p2",
    title: "Smart Blind Stick IoT",
    category: "IoT / Microcontroller",
    desc: "Alat bantu jalan pintar untuk penyandang disabilitas tunanetra berbasis ESP32 dengan pelacakan lokasi akurat.",
    longDesc: "Mengembangkan purwarupa tongkat pintar yang menggunakan modul sensor ultrasonik untuk mendeteksi rintangan serta modul GPS untuk mentransmisikan data koordinat secara berkala ke platform IoT awan.",
    techStack: ["ESP32", "Ultrasonic Sensors", "GPS Module", "Blynk IoT", "Flame Sensor"],
    features: ["Deteksi Hambatan Jarak Akurat", "Deteksi Genangan Air & Kobaran Api", "Monitoring Lokasi Real-time Via Aplikasi Mobile"],
    image: "/smartblindstickcover.png"
  },
  {
    id: "p3",
    title: "PLTS Monitoring & Saving System",
    category: "Renewable Energy",
    desc: "Dashboard analitik web untuk riset pengisian Baterai bertenaga surya (Solar Charging).",
    longDesc: "Proyek riset akademik untuk menganalisis dan mendokumentasikan performa keluaran gelombang daya inverter listrik dengan fokus mereduksi distorsi harmonik total (THD) pada fasilitas pengisian daya Baterai mandiri.",
    techStack: ["ESP32", "DHT11 Sensor", "PZEM 004T", "Modbus TCP", "Website Monitoring"],
    features: ["Visualisasi Real-time THD Inverter", "Log Data Parameter Elektrik Komprehensif", "Estimasi Waktu Pengisian Optimal EV"],
    image: "/PLTSCOVER.jpg",
    imageClassName: "object-[center_15%]"
  }
];

// --- MOCK DATA CERTIFICATES (Berdasarkan berkas asli Anda) ---
const certificatesData = [
  { id: "c1", title: "Juara 3 - WECON Tech Competition 2026", sub: "Lomba Program PLC & HMI Tingkat Mahasiswa", src: "/certificates/certificate-wtc-2026.jpg" },
  { id: "c2", title: "Juara 2 - Maestro Fest 2025 (Politeknik Astra)", sub: "Lomba PLC dan IoT Nasional Perguruan Tinggi", src: "/certificates/certificate-maestro-fest-2025.jpg" },
  { id: "c3", title: "Harapan 1 - Electrical Skill Competition (ESC) 2025", sub: "Cabang PLC Nasional - Politeknik Negeri Madiun", src: "/certificates/certificate-esc.jpg" },
  { id: "c4", title: "Harapan 1 - FUSE 2025 (Politeknik Manufaktur Bandung)", sub: "Lomba Programmable Logic Controller Perguruan Tinggi", src: "/certificates/certificate-fuse.jpg" },
  { id: "c5", title: "Third Honorable Mention - ERIC UNJ 2025", sub: "Electronics and Robotics Innovation Competition - PLC Industrial", src: "/certificates/certificate-eric-unj.jpg" },
  { id: "c6", title: "Juara 1 - LKS Industrial Control Kabupaten Tangerang 2023", sub: "Lomba Kompetensi Siswa SMK Tingkat Kabupaten", src: "/certificates/certificate-lks-tangerang.jpg" },
];

// --- MOCK DATA TECH STACK ---
const techStackData = [
  { name: "AutoCAD", icon: "/tech/autocad.png", desc: "Perancangan desain teknis dan dokumentasi engineering." },
  { name: "React / Next.js", icon: "/tech/nextjs.png", desc: "Framework andalan untuk antarmuka performa tinggi." },
  { name: "Tailwind CSS", icon: "/tech/tailwind.png", desc: "Styling utility-first untuk layout responsif instan." },
  { name: "JavaScript (ES6+)", icon: "/tech/javascript.png", desc: "Fondasi pemrograman logika web interaktif." },
  { name: "Node.js", icon: "/tech/nodejs.png", desc: "Runtime backend & otomasi middleware integrasi data." },
  { name: "Schneider EcoStruxure", icon: "/tech/schneider.png", desc: "Pemrograman PLC tingkat lanjut sistem industri." },
  { name: "Siemens TIA Portal", icon: "/tech/siemens.jpg", desc: "Konfigurasi otomasi otomotif & manufaktur modern." },
  { name: "MQTT", icon: "/tech/mqtt.png", desc: "Protokol andalan komunikasi data perangkat keras & IoT." },
  { name: "Haiwell Cloud SCADA", icon: "/tech/haiwell.png", desc: "Platform SCADA berbasis cloud untuk visualisasi dan kontrol industri." },
  { name: "Weintek", icon: "/tech/weintek.jpg", desc: "Solusi HMI/SCADA berbasis panel dan software industri." },
  { name: "CX-One", icon: "/tech/cxone.png", desc: "Lingkungan pengembangan otomasi untuk PLC Omron." },
  { name: "AVEVA Plant SCADA", icon: "/tech/aveva.jpg", desc: "Sistem SCADA terintegrasi untuk fasilitas industri besar." }
];

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<"projects" | "certificates" | "tech">("projects");
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-16 border-b border-[#1f1f1f]">
      <div className="flex flex-col gap-10">
        
        {/* Navigasi Utama Tab */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-green-500 mb-1">MY WORK</h4>
            <h2 className="text-3xl font-black text-white">PORTFOLIO SHOWCASE</h2>
          </div>
          
          {/* Menu Tab Switcher (State) */}
          <div className="flex bg-[#141414] border border-[#222] p-1.5 rounded-xl self-stretch sm:self-auto">
            {(["projects", "certificates", "tech"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setSelectedProject(null); }}
                className={`flex-1 sm:flex-none capitalize font-mono text-xs font-semibold px-4 py-2.5 rounded-lg transition-all ${
                  activeTab === tab ? "bg-green-600 text-white shadow-md" : "text-[#888] hover:text-white"
                }`}
              >
                {tab === "tech" ? "Tech Stack" : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Konten Utama Berdasarkan Aktivitas Tab */}
        <div className="min-h-100">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: PROJECTS */}
            {activeTab === "projects" && (
              <motion.div
                key="projects-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {!selectedProject ? (
                  // Grid View Proyek
                  <div className="grid md:grid-cols-3 gap-6">
                    {projectsData.map((project) => (
                      <div 
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="group bg-[#141414] border border-[#222] rounded-2xl overflow-hidden cursor-pointer hover:border-green-500/50 transition-all flex flex-col h-full"
                      >
                        <div className="relative h-48 w-full bg-[#222]">
                          <Image src={project.image} alt={project.title} fill className={`object-cover ${project.imageClassName ?? "object-center"} group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100`} />
                          <div className="absolute top-3 left-3 bg-[#0b0b0b]/80 border border-[#333] px-2.5 py-1 rounded-md text-[10px] font-mono font-medium tracking-wide text-green-400 uppercase">
                            {project.category}
                          </div>
                        </div>
                        <div className="p-5 flex flex-col justify-between grow gap-4">
                          <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors line-clamp-1">{project.title}</h3>
                            <p className="text-sm text-[#888] line-clamp-2 leading-relaxed">{project.desc}</p>
                          </div>
                          <div className="flex items-center justify-between pt-2 border-t border-[#222] text-xs font-mono text-[#666] group-hover:text-white transition-colors">
                            <span>{project.techStack.length} Tech Built-in</span>
                            <ExternalLink size={14} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Detail View Proyek Terpilih (Router/State Mock)
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-[#141414] border-2 border-[#222] rounded-2xl p-6 md:p-8 flex flex-col gap-6"
                  >
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#888] hover:text-white bg-[#0b0b0b] border border-[#222] px-3 py-1.5 rounded-lg w-fit transition-colors"
                    >
                      <ArrowLeft size={14} /> Back to Projects
                    </button>
                    
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden border border-[#333] bg-[#222]">
                        <Image src={selectedProject.image} alt={selectedProject.title} fill className={`object-cover ${selectedProject.imageClassName ?? "object-center"}`} />
                      </div>
                      <div className="flex flex-col gap-5">
                        <div>
                          <span className="text-xs font-mono text-green-500 uppercase font-bold tracking-wider">{selectedProject.category}</span>
                          <h3 className="text-2xl md:text-3xl font-black text-white mt-1">{selectedProject.title}</h3>
                        </div>
                        <p className="text-sm text-[#a0a0a0] leading-relaxed">{selectedProject.longDesc}</p>
                        
                        <div className="flex flex-col gap-2">
                          <h5 className="text-xs font-mono text-white font-bold uppercase tracking-wider flex items-center gap-1.5"><Layers size={14}/> Fitur Utama:</h5>
                          <ul className="list-disc list-inside text-sm text-[#888] flex flex-col gap-1">
                            {selectedProject.features.map((f, i) => <li key={i}>{f}</li>)}
                          </ul>
                        </div>

                        <div className="flex flex-col gap-2">
                          <h5 className="text-xs font-mono text-white font-bold uppercase tracking-wider flex items-center gap-1.5"><Cpu size={14}/> Teknologi Terintegrasi ({selectedProject.techStack.length}):</h5>
                          <div className="flex flex-wrap gap-1.5">
                            {selectedProject.techStack.map((tech, i) => (
                              <span key={i} className="bg-[#0b0b0b] border border-[#222] text-[#ccc] text-xs font-mono px-2.5 py-1 rounded-md">{tech}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* TAB 2: CERTIFICATES (Lightbox Overlay Terintegrasi) */}
            {activeTab === "certificates" && (
              <motion.div
                key="certs-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
              >
                {certificatesData.map((cert) => (
                  <div 
                    key={cert.id}
                    onClick={() => {
                      // Jika berkas adalah PDF asli, berikan tautan langsung atau perbesar placeholder gambar
                      if(cert.src.endsWith('.pdf')) {
                        window.open(cert.src, '_blank');
                      } else {
                        setLightboxImg(cert.src);
                      }
                    }}
                    className="group bg-[#141414] border border-[#222] rounded-xl p-4 cursor-pointer hover:border-green-500/40 transition-all flex flex-col gap-4"
                  >
                    <div className="relative h-40 w-full bg-[#222] rounded-lg overflow-hidden border border-[#2d2d2d] flex items-center justify-center text-center px-4">
                      {cert.src.endsWith('.pdf') ? (
                        <div className="flex flex-col items-center gap-2 text-[#666] group-hover:text-red-400 transition-colors">
                          <ShieldAlert size={36} />
                          <span className="text-xs font-mono font-medium">Buka Dokumen PDF Asli</span>
                        </div>
                      ) : (
                        <>
                          <Image src={cert.src} alt={cert.title} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-102 transition-all duration-300" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <Maximize2 className="text-white" size={20} />
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-bold text-white group-hover:text-green-400 transition-colors line-clamp-1">{cert.title}</h4>
                      <p className="text-xs text-[#666] font-mono line-clamp-1">{cert.sub}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TAB 3: TECH STACK GRID & TOOLTIP */}
            {activeTab === "tech" && (
              <motion.div
                key="tech-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {techStackData.map((tech, i) => (
                  <div 
                    key={i}
                    className="group relative bg-[#141414] border border-[#222] hover:border-green-500 p-5 rounded-xl flex flex-col items-center justify-center gap-3 text-center cursor-default transition-all hover:-translate-y-1"
                  >
                    <div className="h-12 w-12 rounded-xl bg-[#0b0b0b] border border-[#333] group-hover:border-green-500/30 flex items-center justify-center overflow-hidden p-2 transition-colors">
                      <Image src={tech.icon} alt={tech.name} width={40} height={40} className="object-contain" />
                    </div>
                    <span className="text-sm font-bold text-white">{tech.name}</span>
                    
                    {/* Efek Hover Tooltip Halus Modern */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-[#0b0b0b] border border-[#333] p-2.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl z-20">
                      <p className="text-[11px] font-mono font-medium text-green-400 mb-0.5">{tech.name}</p>
                      <p className="text-[10px] text-[#888] leading-normal">{tech.desc}</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0b0b0b] border-r border-b border-[#333] rotate-45 -mt-1"></div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* LIGHTBOX MODAL OVERLAY (Untuk Memperbesar Sertifikat) */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[85vh] w-full h-full"
            >
              <Image src={lightboxImg} alt="Certificate Enlarged View" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}