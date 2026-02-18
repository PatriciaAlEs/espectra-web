import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/espectra-BN.png";

export default function Hero() {
  const title = "ESPECTRA";

  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.22,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: -140,
      rotate: -14,
      filter: "blur(7px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 1.18,
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="absolute inset-0 hero-overlay pointer-events-none" />

      <div className="relative z-10 w-full px-6 md:px-12">
        <div className="max-w-4xl">
          <motion.h1
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-8xl md:text-[11rem] font-extrabold uppercase leading-[0.9] tracking-wider"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            {title.split("").map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                variants={letterVariants}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-10 max-w-xl text-lg text-textPrimary/85"
          >
            Love music hate fascism
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-14 flex items-center gap-4"
          >
            <a
              href="https://www.youtube.com/watch?v=RMNiKpaKgdU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4.5 rounded-2xl bg-accentBright text-black text-lg md:text-xl font-semibold tracking-wide shadow-[0_0_32px_rgba(255,79,0,0.45)] hover:brightness-110 hover:scale-[1.03] transition-cinema"
            >
              Último tema
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-6 md:left-12">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
            className="w-6 h-10 border-2 border-accent/60 rounded-2xl flex items-end justify-center px-1"
          >
            <div className="w-1 h-2 bg-accentBright rounded-sm mb-1" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
