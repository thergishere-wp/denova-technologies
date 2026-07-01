"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const team = [
  {
    name: "Dinesh Ratnayake",
    title: "Founder & CEO",
    credentials: [
      "25+ years apparel machinery experience",
      "Worked with leading US & European brands",
      "Pioneer of smart factory solutions in Sri Lanka",
    ],
    image: "/team/dinesh-ratnayake.png",
  },
  {
    name: "Shams Zaman",
    title: "Director / COO",
    credentials: [
      "Bangladesh market operations lead",
      "20+ years manufacturing sector expertise",
      "Expert in RMG industry compliance",
    ],
    image: "/team/shams-zaman.png",
  },
  {
    name: "Shivanthi Perera",
    title: "Head of Digital Solutions & Smart Factory",
    credentials: [
      "Smart factory digitalization specialist",
      "MES implementation experience",
      "IoT & real-time production analytics",
    ],
    image: "/team/shivanthi-perera.png",
  },
  {
    name: "Prasanga Gunawardena",
    title: "Senior IE Consultant",
    credentials: [
      "Industrial Engineering specialist",
      "Line balancing & efficiency optimization",
      "Certified IE practitioner",
    ],
    image: "/team/prasanga-gunawardena.png",
  },
  {
    name: "Raveen Lankanatha",
    title: "CAD Specialist",
    credentials: [
      "DOCAD certified trainer",
      "Pattern making & grading expert",
      "10+ years in CAD system implementation",
    ],
    image: "/team/raveen-lankanatha.png",
  },
];

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[#1E6CC8] text-xs font-mono uppercase tracking-[0.25em] mb-3">
            07 — The People
          </div>
          <h2 className="text-5xl font-bold uppercase tracking-tight text-[#142250] mb-4">
            Meet Our Team
          </h2>
          <div className="w-20 h-0.5 bg-[#29B8E8]" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group hover:-translate-y-1 transition-transform duration-150"
            >
              <div className="relative h-64 bg-[#E2E8F0] overflow-hidden mb-0">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.title}`}
                  fill
                  className="object-cover object-top transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142250]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="bg-[#142250] p-6">
                <h3 className="text-white font-bold text-lg uppercase tracking-wide mb-1">
                  {member.name}
                </h3>
                <p className="text-[#29B8E8] text-xs font-bold uppercase tracking-widest mb-4">
                  {member.title}
                </p>
                <ul className="flex flex-col gap-2">
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
