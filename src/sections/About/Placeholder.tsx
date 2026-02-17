import React from "react";
import imgPlaceholder from "../../assets/images/espectra.png";

export default function AboutPlaceholder() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:gap-10">
        <div className="md:w-1/2">
          <img
            src={imgPlaceholder}
            alt="About"
            className="w-full h-72 object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h3 className="text-3xl font-bold">Quién es</h3>
          <p className="mt-4 max-w-xl">
            Manifiesto breve. Texto directo y condensado, máximo seis líneas
            para mantener impacto y ritmo.
          </p>
        </div>
      </div>
    </section>
  );
}
