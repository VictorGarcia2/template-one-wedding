import React from "react";
import Contador from "./sections/Contador";
import Padres from "./sections/Padres";
import Dedicatoria from "./sections/Dedicatoria";
import Itinerario from "./sections/Itinerario";
import Dresscode from "./sections/Dresscode";
import MesaDeRegalos from "./sections/MesaDeRegalos";
import CountdownTimer from "./components/CountdownTimer";

export default function App() {

  return (
    <>
     
      <Contador />
      <Padres />
      <Dedicatoria />
      <Itinerario />
      <Dresscode />
      <MesaDeRegalos />
      {/* <NoNinos />
      <Hospedaje />
      <Galeria />
      <Amenidades />
      <Asistencia />
      <Footer /> */}
    </>
  );
}
