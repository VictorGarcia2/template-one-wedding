import React, { useEffect, useState } from "react";

import Contador from "../sections/Contador";
import Padres from "../sections/Padres";
import Dedicatoria from "../sections/Dedicatoria";
import Itinerario from "../sections/Itinerario";
import Dresscode from "../sections/Dresscode";
import MesaDeRegalos from "../sections/MesaDeRegalos";
import Noninos from "../sections/Noninos";
import Hospedaje from "../sections/Hospedaje";
import Galeria from "../sections/Galeria";
import Amenidades from "../sections/Amenidades";
import Asistencia from "../sections/Asistencia";
import Footer from "../sections/Footer";
import Menu from "../sections/Menu";
import ReproductorMusica from "../components/ReproductorMusica";

export default function HomePage() {
  const [carga, setCarga] = useState("opacity-100");

  useEffect(() => {
    setTimeout(() => {
      setCarga("opacity-0 pointer-events-none");
    }, 1000);
  }, []);

  return (
    <>
      {/* Pantalla de carga */}
      <div
        className={`fixed z-50 bg-[#859381] h-screen w-screen grid place-content-center transition-opacity duration-1000 ${carga}`}
      >
        <h1 className=" font-display text-white -mt-24 text-6xl text-center">
          Alex & <br /> Caro
        </h1>
      </div>
      {/* Contenido principal */}
      <div className="overflow-x-hidden">
        <ReproductorMusica/>
        <Menu></Menu>
        <section id="contador">
          <Contador></Contador>
        </section>
        <section id="padres">
          <Padres></Padres>
        </section>
        <section id="dedicatoria">
          <Dedicatoria></Dedicatoria>
        </section>
        <section id="itinerario">
          <Itinerario></Itinerario>
        </section>
        <section id="dresscode">
          <Dresscode></Dresscode>
        </section>
        <section id="mesaDeRegalos">
          <MesaDeRegalos></MesaDeRegalos>
        </section>
        <section id="noninos">
          <Noninos></Noninos>
        </section>
        <section id="hospedaje">
          <Hospedaje></Hospedaje>
        </section>
        <section id="galeria">
          <Galeria></Galeria>
        </section>
        {/* <section id="amenidades">
          <Amenidades></Amenidades>
        </section> */}
        <section id="asistencia">
          <Asistencia></Asistencia>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
}
