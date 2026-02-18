import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/espectra-BN.png";
import AudioPlayer from "../../components/ui/AudioPlayer";

export default function Hero() {
  const title = "ESPECTRA";

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
          <h1
            className="whitespace-nowrap text-[clamp(1.9rem,9.5vw,2.25rem)] md:text-[11rem] font-extrabold uppercase leading-[0.9] tracking-[0.06em] md:tracking-[0.1em]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
            }}
          >
            {title}
          </h1>

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
            transition={{ delay: 0.5, duration: 0.75 }}
            className="mt-14"
          >
            <div className="inline-flex items-center">
              <AudioPlayer
                src="/assets/audio/POLLOCK.wav"
                title="Haz click aqui para escuchar mi último tema"
                mobileTitle="Último tema"
                variant="inline"
                className="max-w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
