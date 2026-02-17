import React from "react";
import { motion } from "framer-motion";
import imgPlaceholder from "../../assets/images/espectra.png";

export default function AboutPlaceholder() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 relative group"
        >
          <div className="absolute inset-0 bg-accent/20 blur-3xl opacity-0 group-hover:opacity-50 transition-all duration-700 rounded-lg" />
          <img
            src={imgPlaceholder}
            alt="About"
            className="w-full h-72 object-cover rounded-lg border-2 border-accent/30 group-hover:border-accent transition-all duration-500 relative z-10"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:w-1/2 mt-8 md:mt-0"
        >
          <h3 className="text-accent uppercase text-sm tracking-[0.3em] font-barlow font-semibold mb-2">
            Sobre mí
          </h3>
          <h2 className="font-bebas text-textPrimary mb-6">
            QUIÉN ES ESPECTRA
          </h2>
          <p className="mt-4 max-w-xl text-textPrimary/80 font-barlow text-lg leading-relaxed">
            Manifiesto breve. Texto directo y condensado, máximo seis líneas
            para mantener impacto y ritmo.
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-accent to-accentGlow rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
