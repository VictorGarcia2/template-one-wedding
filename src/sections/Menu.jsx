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
          } bg-[#AEA38E] rounded p-1 w-10 cursor-pointer`}
          src="icons/menu.svg"
          alt="Menu"
        />
      </div>

      {/* Menú lateral */}
      <div
        className={`fixed right-0 bg-white w-56 h-screen z-50 transition-all duration-[1300ms] ease-in-out 
          ${
            open
              ? " translate-x-0 pointer-events-auto"
              : " translate-x-full pointer-events-none"}`}
      >
        <div className="p-2 font-display flex flex-col">
          <p
            onClick={() => thisMenu(false)}
            className="font-black text-3xl px-2 text-[#AEA38E] text-end cursor-pointer"
          >
            X
          </p>
          <a
            onClick={() => thisMenu(false)}
            href="#contador"
            className="text-end mt-5 font-bold text-2xl text-[#AEA38E]"
          >
            Contador
          </a>
          <a
            onClick={() => thisMenu(false)}
            href="#padres"
            className="text-end mt-5 font-bold text-2xl text-[#AEA38E]"
          >
            Padres
          </a>
          <a
            onClick={() => thisMenu(false)}
            href="#itinerario"
            className="text-end mt-5 font-bold text-2xl text-[#AEA38E]"
          >
            Itinerario
          </a>
          <a
            onClick={() => thisMenu(false)}
            href="#mesaDeRegalos"
            className="text-end mt-5 font-bold text-2xl text-[#AEA38E]"
          >
            Mesa de Regalos
          </a>
          <a
            onClick={() => thisMenu(false)}
            href="#hospedaje"
            className="text-end mt-5 font-bold text-2xl text-[#AEA38E]"
          >
            Hospedaje
          </a>
          <a
            onClick={() => thisMenu(false)}
            href="#asistencia"
            className="text-end mt-5 font-bold text-2xl text-[#AEA38E]"
          >
            Asistencia
          </a>
        </div>
      </div>
    </>
  );
}
