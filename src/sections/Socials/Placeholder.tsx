import React from "react";
import { motion } from "framer-motion";
import imgPlaceholder from "../../assets/images/espectra.png";

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/espectra.cks/" },
  { name: "YouTube", url: "https://www.youtube.com/watch?v=RMNiKpaKgdU" },
  { name: "Spotify", url: "https://www.instagram.com/espectra.cks/" },
];

export default function SocialsPlaceholder() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-accent uppercase text-sm tracking-[0.3em] font-barlow font-semibold mb-2">
            Redes Sociales
          </h3>
          <h2 className="font-bebas text-textPrimary mb-8">CONECTA CONMIGO</h2>
        </motion.div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-64 h-40 bg-graySoft rounded-lg overflow-hidden hover:shadow-[0_0_30px_rgba(161,62,34,0.3)] transition-all group relative border-2 border-accent/20 hover:border-accent"
            >
              <div className="relative w-full h-full">
                <img
                  src={imgPlaceholder}
                  alt={social.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-black/50 to-transparent opacity-80 group-hover:opacity-95 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="relative z-10 text-textPrimary font-bebas text-3xl tracking-wider group-hover:scale-110 transition-transform">
                    {social.name}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
