import React from "react";

export default function Amenidades() {
  return (
    <div className="text-center flex flex-col justify-center items-center p-10">
        <p className="font-bodies text-3xl">AMENIDADES</p>
      <div className="text-center flex flex-col  justify-center items-center p-10">
        <img className="w-15" src="/public/icons/coche.svg" alt="" />
        <p className="font-bodies text-2xl">ESTACIONAMIENTO</p>
        <p className="font-bodies text-base">
          Contamos con amplio estacionamiento para que no te preocupes por nada
        </p>
      </div>
      <div className="text-center flex flex-col justify-center items-center p-10">
        <img className="w-15 mb-3" src="/public/icons/coctel.svg" alt="" />
        <p className="font-bodies text-2xl">CÓCTEL DE BIENVENIDA</p>
        <p className="font-bodies text-base">
          Procura llegar temprano para que no te lo pierdas
        </p>
      </div>
    </div>
  );
}
