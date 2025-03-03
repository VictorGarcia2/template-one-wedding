import React from "react";

import PinterestEmbed from "../components/Pinterest";

export default function Dresscode() {
  return (
    <div className="bg-gray-50 z-50 -mt-50">
      <div className="text-center flex flex-col gap-4 pt-10 justify-center">
        <p className="font-display text-3xl" data-aos="fade-left">CÓDIGO DE VESTIMENTA</p>
        <hr className="w-60 mx-auto" />
        <p className="font-display" data-aos="fade-right">
          <b>Mujeres:</b> Vestido largo de noche
        </p>
        <p className="font-display" data-aos="fade-left">
          <b>Hombres:</b> Traje formal completo
        </p>
        <hr className="w-60 mx-auto" />
        <p className="font-display text-3xl" data-aos="fade-right">INSPIRACIÓN DE OUTFITS</p>
        <p className="font-display w-80 mx-auto" data-aos="zoom-in">
          Te compartimos algunas ideas de outfits para que te inspires para el gran día
        </p>
        <PinterestEmbed />
      </div>
    </div>
  );
}
