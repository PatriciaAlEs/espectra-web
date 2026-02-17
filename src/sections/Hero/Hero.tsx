import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/espectra-BN.png";

export default function Hero() {
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-7xl md:text-9xl font-extrabold uppercase leading-tight tracking-wider"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            ESPECTRA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-10 max-w-xl text-lg text-gray-300"
          >
            Love music hate fascism
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-14 flex items-center gap-4"
          >
            <a
              href="https://www.youtube.com/watch?v=RMNiKpaKgdU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-md bg-accent text-black font-semibold shadow-md hover:brightness-105"
            >
              Escuchar ahora
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-6 md:left-12">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="w-6 h-10 border-2 border-gray-600 rounded-xl flex items-end justify-center px-1"
          >
            <div className="w-1 h-2 bg-textPrimary rounded-sm mb-1" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
