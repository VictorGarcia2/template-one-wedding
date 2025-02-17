import React, { useEffect, useState } from "react";
import Contador from "../Contador";
import Padres from "../Padres";
import Dedicatoria from "../Dedicatoria";
import Itinerario from "../Itinerario";
import Dresscode from "../Dresscode";
import MesaDeRegalos from "../MesaDeRegalos";
import Noninos from "../Noninos";
import Hospedaje from "../Hospedaje";
import Galeria from "../Galeria";
import Amenidades from "../Amenidades";
import Asistencia from "../Asistencia";
import Footer from "../Footer";

export default function HomePage() {
  const [carga, setCarga] = useState("visible");
  
  useEffect(() => {
    setTimeout(() => {
      setCarga("invisible");
    }, 1000);
  }, []);

  return (
    <>
      <div
        className={` ${carga} animate-fade animate-ease-out  z-50 fixed bg-[#859381] h-screen w-screen grid place-content-center invisible`}
      >
        <h1 className="font-display text-white -mt-24 text-6xl text-center">
          Alex y Agata
        </h1>
      </div>
      <div className="overflow-x-hidden">
        <Contador />
        <Padres />
        <Dedicatoria />
        <Itinerario />
        <Dresscode />
        <MesaDeRegalos />
        <Noninos />
        <Hospedaje />
        <Galeria />
        <Amenidades />
        <Asistencia />
        <Footer />
      </div>
    </>
  );
}
