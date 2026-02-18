import React from "react";
import { motion } from "framer-motion";

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/espectra.cks/" },
  { name: "YouTube", url: "https://www.youtube.com/watch?v=RMNiKpaKgdU" },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/2oearEcQzcoLJqP2KQTpLk?si=SVdErPCGRM-2DK5VKJO5MQ",
  },
];

function SocialIcon({ name }: { name: string }) {
  const iconClassName = "w-16 h-16 text-accentBright";

  if (name === "Instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={iconClassName}
        aria-hidden="true"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "YouTube") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={iconClassName}
        aria-hidden="true"
      >
        <rect x="2.5" y="6" width="19" height="12" rx="4" />
        <path
          d="M10 9.5L15 12L10 14.5V9.5Z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={iconClassName}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.5C9.6 13.7 11 13.2 12.6 13.2C14.1 13.2 15.5 13.6 16.6 14.4" />
      <path d="M7.4 11.8C8.8 10.8 10.6 10.2 12.7 10.2C14.7 10.2 16.5 10.8 17.9 11.8" />
      <path d="M6.3 9.2C8.1 7.9 10.3 7.2 12.8 7.2C15.3 7.2 17.5 8 19.3 9.3" />
      <circle cx="8.5" cy="16.8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
            Conecta conmigo
          </h3>
          <h2 className="font-bebas text-textPrimary mb-8">
            PUEDES SEGUIRME EN MIS RRSS
          </h2>
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
              className="w-64 h-40 bg-graySoft rounded-3xl overflow-hidden transition-[border-color,box-shadow] duration-300 ease-out group relative border-2 border-accentBright/28 hover:border-accentBright will-change-transform shadow-[0_12px_30px_rgba(0,0,0,0.34),0_0_14px_rgba(255,79,0,0.12)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.38),0_0_20px_rgba(255,79,0,0.2)]"
            >
              <div className="relative w-full h-full bg-gradient-to-t from-black/85 via-graySoft/95 to-black/80">
                <div className="absolute inset-0 bg-gradient-to-t from-accentBright/45 via-black/35 to-transparent opacity-75 group-hover:opacity-90 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative z-10 group-hover:scale-110 transition-transform">
                    <SocialIcon name={social.name} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
