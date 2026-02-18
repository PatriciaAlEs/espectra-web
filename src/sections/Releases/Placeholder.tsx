import React from "react";
import { motion } from "framer-motion";

export default function ReleasesPlaceholder() {
  const [activeModalVideoUrl, setActiveModalVideoUrl] = React.useState<
    string | null
  >(null);
  const viewportWidth =
    typeof window !== "undefined" ? window.innerWidth : 1280;
  const isDesktop = viewportWidth >= 768;
  const revealDuration = isDesktop ? 0.82 : 0.64;
  const sideOffset = isDesktop
    ? Math.max(160, Math.round(viewportWidth * 0.2))
    : Math.max(60, Math.round(viewportWidth * 0.18));

  const releaseCardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -sideOffset : sideOffset,
      y: 10,
      scale: 0.985,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: isDesktop ? 115 : 135,
        damping: isDesktop ? 30 : 26,
        mass: 0.95,
        restDelta: 0.001,
        restSpeed: 0.01,
        delay: 0.06 * (index + 1),
      },
    }),
    hover: {
      y: isDesktop ? -3 : -4,
      scale: isDesktop ? 1.006 : 1.01,
      transition: {
        type: "spring",
        stiffness: isDesktop ? 170 : 240,
        damping: isDesktop ? 28 : 22,
        mass: 0.8,
      },
    },
  };

  const firstPreviewVideoUrl =
    "https://www.youtube.com/embed/aJiA3_-4q4Y?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=aJiA3_-4q4Y&playsinline=1";
  const firstModalVideoUrl =
    "https://www.youtube.com/embed/aJiA3_-4q4Y?autoplay=1&controls=1&modestbranding=1&rel=0&playsinline=1";
  const secondPreviewVideoUrl =
    "https://www.youtube.com/embed/XtClHpPdFkk?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=XtClHpPdFkk&playsinline=1";
  const secondModalVideoUrl =
    "https://www.youtube.com/embed/XtClHpPdFkk?autoplay=1&controls=1&modestbranding=1&rel=0&playsinline=1";

  return (
    <section className="py-24 bg-dark urban-gradient relative overflow-hidden rounded-3xl">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -sideOffset + 10, scale: 0.985 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{
            duration: isDesktop ? 0.78 : 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h3 className="text-accentBright uppercase text-sm tracking-[0.3em] font-barlow font-semibold mb-2">
            Lanzamientos
          </h3>
          <h2 className="text-textPrimary mb-8 font-bebas">ÚLTIMOS DROPS</h2>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={releaseCardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: false, amount: 0.18, margin: "0px 0px -8% 0px" }}
            custom={0}
            className="bg-graySoft rounded-3xl p-6 border border-accentBright/20 hover:border-accentBright/60 transition-cinema group relative overflow-hidden shadow-[0_14px_34px_rgba(0,0,0,0.34),0_0_14px_rgba(255,79,0,0.08)] hover:shadow-[0_14px_34px_rgba(0,0,0,0.38),0_0_18px_rgba(255,79,0,0.16)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accentBright/6 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-xl">
              <iframe
                src={firstPreviewVideoUrl}
                title="Lanzamiento 1"
                className="w-full h-56 rounded-xl pointer-events-none"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accentBright/65 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-cinema" />
            </div>
            <button
              type="button"
              onClick={() => setActiveModalVideoUrl(firstModalVideoUrl)}
              className="absolute top-4 right-4 bg-accentBright text-black px-3 py-1 rounded-full text-xs font-barlow font-bold uppercase opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              Ver más
            </button>
          </motion.div>

          <motion.div
            variants={releaseCardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: false, amount: 0.18, margin: "0px 0px -8% 0px" }}
            custom={1}
            className="bg-graySoft rounded-3xl p-6 border border-accentBright/20 hover:border-accentBright/60 transition-cinema group relative overflow-hidden shadow-[0_14px_34px_rgba(0,0,0,0.34),0_0_14px_rgba(255,79,0,0.08)] hover:shadow-[0_14px_34px_rgba(0,0,0,0.38),0_0_18px_rgba(255,79,0,0.16)]"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-accentBright/6 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-xl">
              <iframe
                src={secondPreviewVideoUrl}
                title="Lanzamiento 2"
                className="w-full h-56 rounded-xl pointer-events-none"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accentBright/65 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-cinema" />
            </div>
            <button
              type="button"
              onClick={() => setActiveModalVideoUrl(secondModalVideoUrl)}
              className="absolute top-4 right-4 bg-accentBright text-black px-3 py-1 rounded-full text-xs font-barlow font-bold uppercase opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              Ver más
            </button>
          </motion.div>
        </div>

        {activeModalVideoUrl && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveModalVideoUrl(null)}
          >
            <div
              className="relative w-full max-w-4xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveModalVideoUrl(null)}
                className="absolute -top-10 right-0 text-accentBright text-sm uppercase tracking-[0.2em] font-barlow font-semibold"
              >
                Cerrar
              </button>
              <div className="relative w-full rounded-2xl overflow-hidden border border-accentBright/35 shadow-[0_20px_40px_rgba(0,0,0,0.55),0_0_24px_rgba(255,79,0,0.18)]">
                <div className="relative w-full pt-[56.25%] bg-black">
                  <iframe
                    src={activeModalVideoUrl}
                    title="Video completo"
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
