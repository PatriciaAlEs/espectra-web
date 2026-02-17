import React from "react";
import { motion } from "framer-motion";
import imgPlaceholder from "../../assets/images/espectra.png";

export default function ReleasesPlaceholder() {
  return (
    <section className="py-24 bg-dark urban-gradient relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-accent uppercase text-sm tracking-[0.3em] font-barlow font-semibold mb-2">
            Lanzamientos
          </h3>
          <h2 className="text-textPrimary mb-8 font-bebas">ÚLTIMOS DROPS</h2>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-graySoft rounded-xl p-6 hover:border-2 hover:border-accent transition-cinema cinema-shadow group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-md">
              <img
                src={imgPlaceholder}
                alt="Lanzamiento 1"
                className="w-full h-56 object-cover rounded-md group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-cinema" />
            </div>
            <div className="absolute top-4 right-4 bg-accent text-black px-3 py-1 rounded-full text-xs font-barlow font-bold uppercase opacity-0 group-hover:opacity-100 transition-all duration-300">
              Ver más
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-graySoft rounded-xl p-6 hover:border-2 hover:border-accent transition-cinema cinema-shadow group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-accentGlow/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-md">
              <img
                src={imgPlaceholder}
                alt="Lanzamiento 2"
                className="w-full h-56 object-cover rounded-md group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-cinema" />
            </div>
            <div className="absolute top-4 right-4 bg-accent text-black px-3 py-1 rounded-full text-xs font-barlow font-bold uppercase opacity-0 group-hover:opacity-100 transition-all duration-300">
              Ver más
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
