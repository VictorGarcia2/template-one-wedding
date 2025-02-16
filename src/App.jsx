import React from "react";

import { Route, Routes } from "react-router";
import HomePage from "./sections/pages/HomePage";
import RSVPList from "./sections/pages/RSVPList ";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/asistencia" element={<RSVPList />} />
      </Routes>
    </>
  );
}
