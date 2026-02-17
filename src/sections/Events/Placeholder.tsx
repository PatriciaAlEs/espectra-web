import React from "react";
import imgPlaceholder from "../../assets/images/espectra.png";

export default function EventsPlaceholder() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-accent uppercase text-sm tracking-wider">
          Eventos & Colaboraciones
        </h3>

        <div className="mt-8 space-y-4">
          <div className="p-4 bg-graySoft rounded-md flex flex-col md:flex-row md:justify-between items-start md:items-center hover:shadow-lg transition">
            <div className="w-full md:w-2/3">
              <img
                src={imgPlaceholder}
                alt="Eventos"
                className="w-full h-28 object-cover rounded-md"
              />
            </div>
            <div className="mt-4 md:mt-0 text-sm text-gray-400">
              Fecha • Ciudad • Colaboración
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
