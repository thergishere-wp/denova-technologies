"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const lead = {
  name: "Dinesh Ratnayake",
  title: "Founder & Chief Executive Officer (CEO)",
  credentials: [
    "30+ years in apparel machinery & software solutions across South Asia",
    "Former General Manager, DMS Garment Technologies & DMS Technologies Bangladesh",
    "MBA, Australian Institute of Business + Diploma in Marketing",
    "Drives DeNova's mission: leading manufacturers into next-generation automated operations",
  ],
  image: "/team/dinesh-ratnayake.png",
};

const team = [
  {
    name: "Shams Zaman",
    title: "Director / COO",
    credentials: [
      "10+ years of experience in engineering and manufacturing coordination",
      "Expertise in quality control and large-scale production operations",
      "Experience supporting international industrial manufacturing projects",
      "Committed to efficiency, precision, and operational excellence",
    ],
    image: "/team/shams-zaman.png",
  },
  {
    name: "Shivanthi Perera",
    title: "Head of Digital Solutions & Smart Factory",
    credentials: [
      "15+ years in apparel technology, CAD/CAM design & digital transformation",
      "Specialist in Gerber Technology, Smart Factory & Industry 4.0",
      "Expertise in PLM, ERP systems (SAP, Acumatica, Odoo)",
      "Master of Applied Management, Australian Institute of Business",
    ],
    image: "/team/shivanthi-perera.png",
  },
  {
    name: "Prasanga Gunawardena",
    title: "Senior IE Consultant",
    credentials: [
      "25+ years in apparel manufacturing & industrial engineering",
      "Expert in process automation, SMV optimization & new technology implementation",
      "Former DGM – Industrial Engineering & Sample/Technical, Hela Apparel Holdings PLC",
      "MBA, University of Wolverhampton, UK | GSD Practitioner & License Holder (UK)",
    ],
    image: "/team/prasanga-gunawardena.png",
  },
  {
    name: "Raveen Lankanatha",
    title: "CAD Specialist",
    credentials: [
      "15+ years in apparel manufacturing, engineering operations & process optimization",
      "Expertise in technical CAD solutions and large-scale manufacturing operations",
      "Specialized in consumption management, product development & digital transformation",
      "MBA — University of West London, UK",
    ],
    image: "/team/raveen-lankanatha.png",
  },
];

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-14 sm:py-20 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="text-[#1E6CC8] text-xs font-mono uppercase tracking-[0.25em] mb-3">
            10 — The People
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#142250] mb-4">
            Meet Our Team
          </h2>
          <div className="w-20 h-0.5 bg-[#29B8E8]" />
        </motion.div>

        {/* Founder — full-width featured card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-[#142250] mb-6 flex flex-col md:flex-row overflow-hidden"
        >
          <div className="relative w-full md:w-80 h-52 sm:h-72 md:h-auto shrink-0 bg-[#E2E8F0]">
            <Image
              src={lead.image}
              alt={`${lead.name} — ${lead.title}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 320px"
              priority
            />
          </div>
          <div className="p-5 sm:p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-white font-bold text-xl sm:text-2xl md:text-3xl uppercase tracking-wide mb-1">
              {lead.name}
            </h3>
            <p className="text-[#29B8E8] text-sm font-bold uppercase tracking-widest mb-4 sm:mb-6">
              {lead.title}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 sm:gap-y-3">
              {lead.credentials.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-1" aria-hidden="true">
                    <path d="M2 7l4 4 6-6" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white/70 text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Rest of the team — 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group hover:-translate-y-1 transition-transform duration-150 flex flex-row bg-[#142250] overflow-hidden"
            >
              <div className="relative w-28 sm:w-40 h-auto shrink-0 bg-[#E2E8F0]">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.title}`}
                  fill
                  className="object-cover object-top transition-all duration-300"
                  sizes="(max-width: 640px) 112px, 160px"
                />
              </div>
              <div className="p-4 sm:p-6 flex-1">
                <h3 className="text-white font-bold text-base sm:text-lg uppercase tracking-wide mb-1">
                  {member.name}
                </h3>
                <p className="text-[#29B8E8] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-4">
                  {member.title}
                </p>
                <ul className="flex flex-col gap-1.5 sm:gap-2">
                  {member.credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                        <path d="M2 7l4 4 6-6" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-white/60 text-xs leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
