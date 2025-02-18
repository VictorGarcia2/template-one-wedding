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
import { Route, Routes } from "react-router";

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
          Alex & <br /> Agata
        </h1>
      </div>

      {/* Contenido principal */}
      <div className="overflow-x-hidden">
        {/* Nested routes */}
        <Routes>
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Contador" element={<Contador />} />
          <Route path="/Padres" element={<Padres />} />
          <Route path="/Dedicatoria" element={<Dedicatoria />} />
          <Route path="/Itinerario" element={<Itinerario />} />
          <Route path="/Dresscode" element={<Dresscode />} />
          <Route path="/MesaDeRegalos" element={<MesaDeRegalos />} />
          <Route path="/Noninos" element={<Noninos />} />
          <Route path="/Hospedaje" element={<Hospedaje />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Amenidades" element={<Amenidades />} />
          <Route path="/Asistencia" element={<Asistencia />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>

        {/* Render nested routes here */}
        <Outlet />
      </div>
    </>
  );
}