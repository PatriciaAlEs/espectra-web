import React from "react";
import { motion } from "framer-motion";
import imgPlaceholder from "../../assets/images/espectra.png";

export default function ReleasesPlaceholder() {
  const viewportWidth =
    typeof window !== "undefined" ? window.innerWidth : 1280;
  const sideOffset =
    viewportWidth >= 768
      ? Math.max(160, Math.round(viewportWidth * 0.2))
      : Math.max(60, Math.round(viewportWidth * 0.18));

  const releaseCardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -sideOffset : sideOffset,
      scale: 0.98,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.64,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.06 * (index + 1),
      },
    }),
    hover: {
      y: -5,
      scale: 1.01,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 22,
        mass: 0.8,
      },
    },
  };

  return (
    <section className="py-24 bg-dark urban-gradient relative overflow-hidden rounded-3xl">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -sideOffset + 10, scale: 0.985 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-accentBright uppercase text-sm tracking-[0.3em] font-barlow font-semibold mb-2">
            Lanzamientos
          </h3>
          <h2 className="text-textPrimary mb-8 font-bebas">ÚLTIMOS DROPS</h2>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={releaseCardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: false, amount: 0.1 }}
            custom={0}
            className="bg-graySoft rounded-3xl p-6 border border-accentBright/20 hover:border-accentBright/60 transition-cinema group cursor-pointer relative overflow-hidden shadow-[0_14px_34px_rgba(0,0,0,0.34),0_0_14px_rgba(255,79,0,0.08)] hover:shadow-[0_14px_34px_rgba(0,0,0,0.38),0_0_18px_rgba(255,79,0,0.16)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accentBright/6 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={imgPlaceholder}
                alt="Lanzamiento 1"
                className="w-full h-56 object-cover rounded-xl group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accentBright/65 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-cinema" />
            </div>
            <div className="absolute top-4 right-4 bg-accentBright text-black px-3 py-1 rounded-full text-xs font-barlow font-bold uppercase opacity-0 group-hover:opacity-100 transition-all duration-300">
              Ver más
            </div>
          </motion.div>

          <motion.div
            variants={releaseCardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: false, amount: 0.1 }}
            custom={1}
            className="bg-graySoft rounded-3xl p-6 border border-accentBright/20 hover:border-accentBright/60 transition-cinema group cursor-pointer relative overflow-hidden shadow-[0_14px_34px_rgba(0,0,0,0.34),0_0_14px_rgba(255,79,0,0.08)] hover:shadow-[0_14px_34px_rgba(0,0,0,0.38),0_0_18px_rgba(255,79,0,0.16)]"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-accentBright/6 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={imgPlaceholder}
                alt="Lanzamiento 2"
                className="w-full h-56 object-cover rounded-xl group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accentBright/65 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-cinema" />
            </div>
            <div className="absolute top-4 right-4 bg-accentBright text-black px-3 py-1 rounded-full text-xs font-barlow font-bold uppercase opacity-0 group-hover:opacity-100 transition-all duration-300">
              Ver más
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
