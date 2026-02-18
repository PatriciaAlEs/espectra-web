import React from "react";
import { motion } from "framer-motion";
import imgPlaceholder from "../../assets/images/sobre-mi.png";

export default function AboutPlaceholder() {
  const viewportWidth =
    typeof window !== "undefined" ? window.innerWidth : 1280;
  const sideOffset =
    viewportWidth >= 768
      ? Math.max(140, Math.round(viewportWidth * 0.18))
      : Math.max(56, Math.round(viewportWidth * 0.16));

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -sideOffset, scale: 0.985 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.84, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ x: 4, transition: { duration: 0.35 } }}
          className="md:w-1/2 relative group"
        >
          <div className="absolute inset-0 bg-accentBright/12 blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-700 rounded-2xl" />
          <img
            src={imgPlaceholder}
            alt="About"
            className="w-full h-72 object-cover rounded-3xl border-2 border-accentBright/30 group-hover:border-accentBright transition-all duration-500 relative z-10 shadow-[0_12px_30px_rgba(0,0,0,0.34),0_0_12px_rgba(255,79,0,0.08)]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: sideOffset, scale: 0.985 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.84, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ x: -4, transition: { duration: 0.35 } }}
          className="md:w-1/2 mt-8 md:mt-0"
        >
          <h3 className="text-accentBright uppercase text-sm tracking-[0.3em] font-barlow font-semibold mb-2">
            Sobre mí
          </h3>
          <h2 className="font-bebas text-textPrimary mb-6">
            QUIÉN ES ESPECTRA
          </h2>
          <p className="mt-4 max-w-xl text-textPrimary/80 font-barlow text-lg leading-relaxed">
            Sin plan ni destino, solo intuición y verdad.
            <br />
            Entre silencios, errores y horas a solas, encontré una forma de decir lo que no sabía explicar con palabras.
            <br />
            La música no fue un plan, fue un refugio.
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-accentBright to-accentGlow rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
