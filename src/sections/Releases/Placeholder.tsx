import React from "react";
import { motion } from "framer-motion";
import imgPlaceholder from "../../assets/images/espectra.png";

export default function ReleasesPlaceholder() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-24 bg-dark urban-gradient relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-accent uppercase text-sm tracking-wider cinema-glow">
          Lanzamientos
        </h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-graySoft rounded-xl p-6 hover:border hover:border-accent transition-cinema cinema-shadow group cursor-pointer">
            <div className="relative overflow-hidden rounded-md">
              <img
                src={imgPlaceholder}
                alt="Lanzamiento 1"
                className="w-full h-56 object-cover rounded-md group-hover:scale-105 transition-cinema"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-cinema" />
            </div>
          </div>

          <div className="bg-graySoft rounded-xl p-6 hover:border hover:border-accent transition-cinema cinema-shadow group cursor-pointer">
            <div className="relative overflow-hidden rounded-md">
              <img
                src={imgPlaceholder}
                alt="Lanzamiento 2"
                className="w-full h-56 object-cover rounded-md group-hover:scale-105 transition-cinema"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-cinema" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
