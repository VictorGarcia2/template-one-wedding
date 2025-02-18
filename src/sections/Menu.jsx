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
      <div className="p-5 absolute right-0">
        <img
          onClick={() => thisMenu(true)}
          className={`${open ? "hidden" : "block"} cursor-pointer`}
          src="/public/icons/menu.svg"
          alt="Menu"
        />
      </div>

      {/* Menú lateral */}
      <div
        className={`fixed right-0 bg-white w-56 h-screen z-50 transition-all duration-[1300ms] ease-in-out 
          ${open ? " translate-x-0 pointer-events-auto" : " translate-x-full pointer-events-none"}`}
      >
        <div className="p-2 font-display flex flex-col">
          <p
            onClick={() => thisMenu(false)}
            className="font-black text-3xl px-2 text-[#859381] text-end cursor-pointer"
          >
            X
          </p>
          <Link to="/contador" className="text-end mt-5 font-bold text-2xl text-[#859381]">
            Contador
          </Link>
          <Link to="/Padres" className="text-end mt-5 font-bold text-2xl text-[#859381]">
            Padres
          </Link>
          <Link to="/Itinerario" className="text-end mt-5 font-bold text-2xl text-[#859381]">
            Itinerario
          </Link>
          <Link to="/MesadeRegalos" className="text-end mt-5 font-bold text-2xl text-[#859381]">
            Mesa de Regalos
          </Link>
          <Link to="/Hospedaje" className="text-end mt-5 font-bold text-2xl text-[#859381]">
            Hospedaje
          </Link>
          <Link to="/Hospedaje" className="text-end mt-5 font-bold text-2xl text-[#859381]">
            Hospedaje
          </Link>
          <Link to="/Asistencia" className="text-end mt-5 font-bold text-2xl text-[#859381]">
            Asistencia
          </Link>
        </div>
      </div>
    </>
  );
}
