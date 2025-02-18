import React, { useState } from "react";
import { Link } from "react-router";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const thisMenu = (prop) => {
    setOpen(prop);
  };

  return (
    <>
      {/* Botón de menú */}
      <div className="p-2 fixed right-0  z-50">
        <img
          onClick={() => thisMenu(true)}
          className={`${
            open ? "hidden" : "block"
          } bg-[#859381] rounded p-1 w-10 cursor-pointer`}
          src="/public/icons/menu.svg"
          alt="Menu"
        />
      </div>

      {/* Menú lateral */}
      <div
        className={`fixed right-0 bg-white w-56 h-screen z-50 transition-all duration-[1300ms] ease-in-out 
          ${
            open
              ? " translate-x-0 pointer-events-auto"
              : " translate-x-full pointer-events-none"
          }`}
      >
        <div className="p-2 font-display flex flex-col">
          <p
            onClick={() => thisMenu(false)}
            className="font-black text-3xl px-2 text-[#859381] text-end cursor-pointer"
          >
            X
          </p>
          <a
            onClick={() => thisMenu(false)}
            href="#contador"
            className="text-end mt-5 font-bold text-2xl text-[#859381]"
          >
            Contador
          </a>
          <a
            onClick={() => thisMenu(false)}
            href="#padres"
            className="text-end mt-5 font-bold text-2xl text-[#859381]"
          >
            Padres
          </a>
          <a
            onClick={() => thisMenu(false)}
            href="#itinerario"
            className="text-end mt-5 font-bold text-2xl text-[#859381]"
          >
            Itinerario
          </a>
          <a
            onClick={() => thisMenu(false)}
            href="#mesaDeRegalos"
            className="text-end mt-5 font-bold text-2xl text-[#859381]"
          >
            Mesa de Regalos
          </a>
          <a
            onClick={() => thisMenu(false)}
            href="#hospedaje"
            className="text-end mt-5 font-bold text-2xl text-[#859381]"
          >
            Hospedaje
          </a>
          <a
            onClick={() => thisMenu(false)}
            href="#asistencia"
            className="text-end mt-5 font-bold text-2xl text-[#859381]"
          >
            Asistencia
          </a>
        </div>
      </div>
    </>
  );
}
