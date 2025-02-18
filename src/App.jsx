import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import RSVList from "./pages/RSVPList "

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
        
        </Route>
        <Route path="/asistencia" element={<RSVList/>} />
      </Routes>
    </>
  );
}