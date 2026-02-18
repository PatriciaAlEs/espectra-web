import React from "react";
import { motion } from "framer-motion";
import imgPlaceholder from "../../assets/images/espectra.png";

export default function EventsPlaceholder() {
  const viewportWidth =
    typeof window !== "undefined" ? window.innerWidth : 1280;
  const sideOffset =
    viewportWidth >= 768
      ? Math.max(150, Math.round(viewportWidth * 0.19))
      : Math.max(58, Math.round(viewportWidth * 0.17));

  const eventCardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -sideOffset : sideOffset,
      scale: 0.982,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.62,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.06 * (index + 1),
      },
    }),
    hover: {
      y: -4,
      scale: 1.008,
      transition: {
        type: "spring",
        stiffness: 240,
        damping: 21,
        mass: 0.85,
      },
    },
  };

  return (
    <section className="py-24 bg-dark relative overflow-hidden rounded-3xl">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -sideOffset + 8, scale: 0.985 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-accentBright uppercase text-sm tracking-[0.3em] font-barlow font-semibold mb-2">
            Eventos & Colaboraciones
          </h3>
          <h2 className="font-bebas text-textPrimary mb-8">PRÓXIMAS FECHAS</h2>
        </motion.div>

        <div className="mt-8 space-y-4">
          <motion.div
            variants={eventCardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: false, amount: 0.1 }}
            custom={0}
            className="p-6 bg-graySoft rounded-3xl flex flex-col md:flex-row md:justify-between items-start md:items-center border border-accentBright/20 hover:border-accentBright/60 transition-all group relative overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.34),0_0_12px_rgba(255,79,0,0.08)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.38),0_0_16px_rgba(255,79,0,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accentBright/6 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="w-full md:w-2/3 relative z-10">
              <img
                src={imgPlaceholder}
                alt="Eventos"
                className="w-full h-32 object-cover rounded-xl border border-accentBright/20 group-hover:border-accentBright/70 transition-all"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 text-sm text-textPrimary/60 font-barlow font-semibold uppercase tracking-wider relative z-10">
              <span className="text-accentBright">Fecha</span> • Ciudad •
              Colaboración
            </div>
          </motion.div>

          <motion.div
            variants={eventCardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: false, amount: 0.1 }}
            custom={1}
            className="p-6 bg-graySoft rounded-3xl flex flex-col md:flex-row md:justify-between items-start md:items-center border border-accentBright/20 hover:border-accentBright/60 transition-all group relative overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.34),0_0_12px_rgba(255,79,0,0.08)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.38),0_0_16px_rgba(255,79,0,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accentBright/6 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="w-full md:w-2/3 relative z-10">
              <img
                src={imgPlaceholder}
                alt="Eventos"
                className="w-full h-32 object-cover rounded-xl border border-accentBright/20 group-hover:border-accentBright/70 transition-all"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 text-sm text-textPrimary/60 font-barlow font-semibold uppercase tracking-wider relative z-10">
              <span className="text-accentBright">Fecha</span> • Ciudad •
              Colaboración
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
