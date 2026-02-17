import React from "react";
import { motion } from "framer-motion";
import imgPlaceholder from "../../assets/images/espectra.png";

export default function EventsPlaceholder() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-accent uppercase text-sm tracking-[0.3em] font-barlow font-semibold mb-2">
            Eventos & Colaboraciones
          </h3>
          <h2 className="font-bebas text-textPrimary mb-8">PRÓXIMAS FECHAS</h2>
        </motion.div>

        <div className="mt-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 bg-graySoft rounded-lg flex flex-col md:flex-row md:justify-between items-start md:items-center hover:shadow-lg hover:border-2 hover:border-accent transition-all group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="w-full md:w-2/3 relative z-10">
              <img
                src={imgPlaceholder}
                alt="Eventos"
                className="w-full h-32 object-cover rounded-md border border-accent/20 group-hover:border-accent/60 transition-all"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 text-sm text-textPrimary/60 font-barlow font-semibold uppercase tracking-wider relative z-10">
              <span className="text-accent">Fecha</span> • Ciudad • Colaboración
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-graySoft rounded-lg flex flex-col md:flex-row md:justify-between items-start md:items-center hover:shadow-lg hover:border-2 hover:border-accent transition-all group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accentGlow/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="w-full md:w-2/3 relative z-10">
              <img
                src={imgPlaceholder}
                alt="Eventos"
                className="w-full h-32 object-cover rounded-md border border-accent/20 group-hover:border-accent/60 transition-all"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 text-sm text-textPrimary/60 font-barlow font-semibold uppercase tracking-wider relative z-10">
              <span className="text-accent">Fecha</span> • Ciudad • Colaboración
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
