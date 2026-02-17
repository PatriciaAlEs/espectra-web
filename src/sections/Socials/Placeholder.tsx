import React from "react";
import imgPlaceholder from "../../assets/images/espectra.png";

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/espectra.cks/" },
  { name: "YouTube", url: "https://www.youtube.com/watch?v=RMNiKpaKgdU" },
  { name: "Spotify", url: "https://www.instagram.com/espectra.cks/" },
];

export default function SocialsPlaceholder() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-accent uppercase text-sm tracking-wider">Redes</h3>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-64 h-40 bg-graySoft rounded-lg overflow-hidden hover:shadow-[0_0_20px_rgba(161,62,34,0.15)] transition flex items-center justify-center"
            >
              <div className="text-center">
                <img
                  src={imgPlaceholder}
                  alt={social.name}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <span className="relative z-10 text-accent font-semibold text-lg">
                  {social.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
