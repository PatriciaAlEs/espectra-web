import React from "react";
import { motion } from "framer-motion";

const socials = [
  { name: "YouTube", url: "https://www.youtube.com/watch?v=RMNiKpaKgdU" },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/2oearEcQzcoLJqP2KQTpLk?si=SVdErPCGRM-2DK5VKJO5MQ",
  },
  { name: "Instagram", url: "https://www.instagram.com/espectra.cks/" },
];

function SocialIcon({ name }: { name: string }) {
  const iconClassName = "w-12 h-12 md:w-14 md:h-14 text-accentBright";

  if (name === "Instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClassName}
        aria-hidden="true"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
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

export default function SocialsPlaceholder() {
  const viewportWidth =
    typeof window !== "undefined" ? window.innerWidth : 1280;
  const isDesktop = viewportWidth >= 768;
  const headingOffset = isDesktop ? 80 : 34;

  return (
    <section className="py-6 md:py-7 bg-background relative overflow-hidden rounded-3xl">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -headingOffset, y: 8, scale: 0.99 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2, margin: "0px 0px -2% 0px" }}
          transition={{
            duration: isDesktop ? 1.16 : 0.94,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center justify-between gap-2 flex-wrap md:flex-nowrap"
        >
          <div className="flex items-center gap-1.5 md:gap-2 text-center md:text-left flex-wrap md:flex-nowrap">
            <h3 className="text-accentBright uppercase text-sm tracking-[0.3em] font-barlow font-semibold mb-0 whitespace-nowrap">
              Conecta conmigo
            </h3>
            <h2 className="font-bebas text-textPrimary text-[clamp(2rem,3.2vw,3.2rem)] leading-[1.02] whitespace-nowrap">
              SÍGUEME EN MIS RRSS
            </h2>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-1.5 md:gap-2.5">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: isDesktop ? 0.7 : 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.06 * index,
                }}
                whileHover={{ y: -2, scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                aria-label={`Abrir ${social.name}`}
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 border-accentBright/28 bg-graySoft/90 hover:border-accentBright transition-[border-color,box-shadow,transform] duration-300 ease-out flex items-center justify-center shadow-[0_12px_24px_rgba(0,0,0,0.3),0_0_10px_rgba(255,79,0,0.1)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.34),0_0_16px_rgba(255,79,0,0.2)]"
              >
                <SocialIcon name={social.name} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
