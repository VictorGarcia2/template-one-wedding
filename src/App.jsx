import React from "react";
import Contador from "./sections/Contador";
import Padres from "./sections/Padres";
import Dedicatoria from "./sections/Dedicatoria";
import Itinerario from "./sections/Itinerario";
import Dresscode from "./sections/Dresscode";
import MesaDeRegalos from "./sections/MesaDeRegalos";
import CountdownTimer from "./components/CountdownTimer";
import Footer from "./sections/Footer";
import Asistencia from "./sections/Asistencia";
import Amenidades from "./sections/Amenidades";
import Galeria from "./sections/Galeria";
import Hospedaje from "./sections/Hospedaje";
import Noninos from "./sections/Noninos";
import { Route, Routes } from "react-router";
import HomePage from "./sections/pages/HomePage";
import RSVPList from "./sections/pages/asistencia";

export default function App() {

  return (
    <>
<Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="/asistencia" element={<RSVPList/>} />
</Routes>
     
    </>
  );
}
