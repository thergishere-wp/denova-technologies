"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[640px] sm:min-h-screen flex items-center bg-[#142250] overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-automation.jpg"
          alt="Industrial robot arm on an automated manufacturing line"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#142250] via-[#142250]/85 to-[#142250]/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-24 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px] sm:min-h-screen py-10 sm:py-16 lg:py-24">
          {/* Left: text */}
          <div className="min-w-0 w-full overflow-visible">
            <motion.div
              initial="hidden"
              animate="visible"
              className="mb-2 overflow-visible"
            >
              <div className="overflow-visible">
                <motion.h1
                  custom={0}
                  variants={wordVariants}
                  className="text-[1.85rem] sm:text-4xl md:text-5xl xl:text-7xl font-bold uppercase tracking-tight text-white leading-[0.9] mb-2 whitespace-nowrap overflow-visible"
                  style={{ hyphens: "none" }}
                >
                  ADVANCED
                </motion.h1>
              </div>
              <div className="overflow-visible">
                <motion.h1
                  custom={1}
                  variants={wordVariants}
                  className="text-[1.85rem] sm:text-4xl md:text-5xl xl:text-7xl font-bold uppercase tracking-tight text-[#29B8E8] leading-[0.9] mb-8 whitespace-nowrap overflow-visible"
                  style={{ hyphens: "none" }}
                >
                  MANUFACTURING
                </motion.h1>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-lg mb-6 sm:mb-10"
            >
              Providing cutting-edge machinery and intelligent software systems
              for apparel and non-apparel industries in Sri Lanka &amp; Bangladesh.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#about"
                className="border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-white/10 transition-colors duration-150 text-center cursor-pointer"
              >
                Discover DeNova
              </a>
              <a
                href="#solutions"
                className="bg-[#1E6CC8] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#29B8E8] transition-colors duration-150 text-center cursor-pointer"
              >
                Explore Solutions
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-8 sm:mt-16 flex gap-6 sm:gap-10 border-t border-white/10 pt-6 sm:pt-8"
            >
              {[
                { value: "25+", label: "Years Experience" },
                { value: "5", label: "Global Brands" },
                { value: "4", label: "Countries Served" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-mono font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#94A3B8] uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: image panel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative h-[600px]"
          >
            {/* Diagonal clip frame */}
            <div
              className="absolute inset-0 border-l-2 border-[#29B8E8]/40 overflow-hidden"
              style={{ clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            >
              <Image
                src="/images/hero-machine.jpg"
                alt="JWEI automated multi-layer fabric cutting system"
                fill
                className="object-cover object-center"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-[#142250]/40" />
            </div>
            {/* Cyan accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#29B8E8] to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* DeNova logo watermark badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden sm:block absolute bottom-8 right-8 z-10"
      >
        <span className="bg-white/90 px-3 py-1.5 inline-flex items-center opacity-70 hover:opacity-100 transition-opacity duration-150">
          <Image
            src="/denova-logo.png"
            alt="DeNova Technologies Ltd"
            width={93}
            height={30}
            className="object-contain"
            style={{ maxHeight: "22px", width: "auto" }}
          />
        </span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <div className="text-[#94A3B8] text-[10px] uppercase tracking-widest">Scroll</div>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-[#29B8E8] to-transparent"
        />
      </motion.div>
    </section>
  );
}
