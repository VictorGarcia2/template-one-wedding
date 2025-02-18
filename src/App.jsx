import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import RSVList from "./pages/RSVPList "

export default function App() {
  return (
    <>
      <Routes>
        {/* Parent route with "*" to match deeper paths */}
        <Route path="/" element={<HomePage />} />

        {/* Other routes (if needed) */}
        <Route path="/asistencia" element={<RSVList/>} />
      </Routes>
    </>
  );
}