import React from "react";

export default function Padres() {
  return (
    <div className="bg-slate-100 flex flex-col justify-center text-white align-middle items-center">
    <div className="w-80 bg-[#859382] mt-10 mb-10">
      {/* Título principal */}
      <p
        className="font-display text-3xl text-center pt-10"
        data-aos="fade-down" // Animación de fade hacia abajo
      >
        NUESTROS PADRES
      </p>
      <hr className="text-white mt-10 mx-auto w-20" />

      {/* Padres de la novia */}
      <div className="mt-10 text-center">
        <p
          className="font-display text-center text-2xl"
          data-aos="fade-right" // Animación de fade hacia la derecha
        >
          PADRES DE LA NOVIA
        </p>
        <p
          className="font-display"
          data-aos="fade-up" // Animación de fade hacia arriba
        >
          Olga García De García <br /> Edgar Alberto García Coronado
        </p>
      </div>

      {/* Padres del novio */}
      <div className="mt-10 text-center mb-10">
        <p
          className="font-display text-center text-2xl"
          data-aos="fade-left" // Animación de fade hacia la izquierda
        >
          PADRES DEL NOVIO
        </p>
        <p
          className="font-display"
          data-aos="fade-up" // Animación de fade hacia arriba
        >
          Olga García De García <br /> Edgar Alberto García Coronado
        </p>
      </div>
    </div>
  </div>
  );
}
