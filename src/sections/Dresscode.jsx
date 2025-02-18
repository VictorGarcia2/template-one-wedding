import React from "react";
import PinterestScript from "../components/Pinterest";
import PinterestBoard from "../components/Pinterest";
import PinterestEmbed from "../components/Pinterest";

export default function Dresscode() {
  return (
    <div className="bg-gray-50 z-50 -mt-50">
      <div className=" text-center flex flex-col gap-4 pt-10 justify-center">
        <p className="font-display text-3xl" data-aos="fade-left">DRESS CODE</p>
        <hr  className="w-60 mx-auto" />
          <p className="font-display" data-aos="fade-right">
            {" "}
            <b> Mujeres: </b> Vestido Largo de Noche
          </p>
          <p className="font-display" data-aos="fade-left">
            {" "}
            <b> Hombres: </b> Traje Completo Forma
          </p>
          <hr className="w-60 mx-auto" />
          <p className="font-display text-3xl" data-aos="fade-right"> OUTFIT INSPO</p>
          <p className="font-display w-80 mx-auto" data-aos="zoom-in"> Te compartimos nuestro outfit inspo
          para que tomes ideas para el gran día </p>
          <PinterestEmbed/>
      </div>
    </div>
  );
}
