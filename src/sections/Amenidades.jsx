import React from "react";

export default function Amenidades() {
  return (
    <div className="text-center flex flex-col justify-center items-center p-10">
        <p className="font-display italic text-3xl text-[#859382]">AMENIDADES</p>
      <div className="text-center flex flex-col  justify-center items-center p-10">
        <img className="w-15" src="icons/coche.svg" alt="" />
        <p className="font-display italic text-2xl text-[#859382]">ESTACIONAMIENTO</p>
        <p className="font-display italic text-base text-[#859382]">
          Contamos con amplio estacionamiento para que no te preocupes por nada
        </p>
      </div>
      <div className="text-center flex flex-col justify-center items-center p-10">
        <img className="w-15 mb-3" src="icons/coctel.svg" alt="" />
        <p className="font-display italic text-2xl text-[#859382]">CÓCTEL DE BIENVENIDA</p>
        <p className="font-display italic text-base text-[#859382]">
          Procura llegar temprano para que no te lo pierdas
        </p>
      </div>
    </div>
  );
}
