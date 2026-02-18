import React from "react";
import { motion } from "framer-motion";
import imgPlaceholder from "../../assets/images/espectra.png";

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/espectra.cks/" },
  { name: "YouTube", url: "https://www.youtube.com/watch?v=RMNiKpaKgdU" },
  { name: "Spotify", url: "https://www.instagram.com/espectra.cks/" },
];

type SocialCardMotion = {
  direction: -1 | 1;
  order: number;
};

export default function SocialsPlaceholder() {
  const viewportWidth =
    typeof window !== "undefined" ? window.innerWidth : 1280;
  const isDesktop = viewportWidth >= 768;
  const revealDuration = isDesktop ? 0.8 : 0.62;
  const headingOffset = isDesktop ? 80 : 34;
  const headingDuration = isDesktop ? 0.8 : 0.62;
  const sideOffset = isDesktop
    ? Math.max(120, Math.round(viewportWidth * 0.14))
    : Math.max(44, Math.round(viewportWidth * 0.12));

  const socialCardVariants = {
    hidden: ({ direction }: SocialCardMotion) => ({
      opacity: 0,
      x: direction * sideOffset,
    }),
    visible: ({ order }: SocialCardMotion) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: isDesktop ? 1.08 : 0.88,
        ease: [0.22, 1, 0.36, 1],
        delay: order * 0.045,
      },
    }),
    hover: {
      y: isDesktop ? -3 : -5,
      scale: isDesktop ? 1.006 : 1.01,
      transition: {
        type: "spring",
        stiffness: isDesktop ? 170 : 240,
        damping: isDesktop ? 28 : 22,
        mass: 0.8,
      },
    },
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, x: -headingOffset, y: 8, scale: 0.99 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2, margin: "0px 0px -2% 0px" }}
          transition={{
            duration: isDesktop ? 1.16 : 0.94,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h3 className="text-accentBright uppercase text-sm tracking-[0.3em] font-barlow font-semibold mb-2">
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
              variants={socialCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{
                once: false,
                amount: 0.22,
                margin: "0px 0px 0px 0px",
              }}
              custom={{ direction: index % 2 === 0 ? -1 : 1, order: index }}
              className="w-64 h-40 bg-graySoft rounded-3xl overflow-hidden transition-[border-color,box-shadow] duration-300 ease-out group relative border-2 border-accentBright/20 hover:border-accentBright will-change-transform shadow-[0_12px_30px_rgba(0,0,0,0.34),0_0_12px_rgba(255,79,0,0.08)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.38),0_0_16px_rgba(255,79,0,0.15)]"
            >
              <div className="relative w-full h-full">
                <img
                  src={imgPlaceholder}
                  alt={social.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accentBright/72 via-black/45 to-transparent opacity-80 group-hover:opacity-90 transition-all" />
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
