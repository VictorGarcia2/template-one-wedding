import React, { useState } from "react";
import { db, ref } from "../firebase/firebase";
import { push } from "firebase/database";
import AlertAsistencia from "../components/AlertAsistencia";

export default function () {
  const [name, setName] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [guests, setGuests] = useState();
  const [alerts, setAlerts] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !asistencia || guests < 1) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }
    setAlerts(true);
    setTimeout(() => {
      setAlerts(false)
    }, 3000);
    // Guardar en Firebase
    const rsvpRef = ref(db, "rsvps");
    const newRSVPRef = push(rsvpRef, { name, asistencia, guests });
    // Llamar a la función onRSVPSubmit que pasamos como props para actualizar el estado en el componente principal
    onRSVPSubmit({
      id: newRSVPRef.key,
      name,
      asistencia,
      guests,
    });
    setName("");
    setAsistencia("");
    setGuests(0);
  };
  return (
    <div className="items-center flex flex-col justify-center text-center ">
      <img 
      className="sm:h-[500px] object-cover w-full"
      src="gallery/foto-2.jpg" alt="" />
      <div className="px-10 pt-10">
        <p className="font-display text-3xl">CONFIRMA TU ASISTENCIA</p>
        <p className="font-display py-5">
          Nos ayudas confirmando tu asistencia lo antes posible, muchas gracias.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <p className="font-display text-start">¿Asisitirás?</p>
          <label htmlFor="asistencia" className="text-start font-display">
            <input
              className="mx-2"
              type="radio"
              value="si"
              name="asistencia"
              checked={asistencia === "si"} // Marca el radio si el estado es "si"
              onChange={(e) => setAsistencia(e.target.value)} // Actualiza el estado
            />
            Si
          </label>
          <label htmlFor="asistencia" className="text-start font-display">
            <input
              className="mx-2"
              type="radio"
              value="no"
              name="asistencia"
              checked={asistencia === "no"} // Marca el radio si el estado es "no"
              onChange={(e) => setAsistencia(e.target.value)} // Actualiza el estado
            />
            No
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="border my-4 border-gray-300 p-3"
            type="text"
            name=""
            id=""
            placeholder="Tu nombre completo"
          />
          <label className="text-start font-display" htmlFor="">
            Número de personas confirmadas de acuerdo al número asignado en tu
            Pase:
            <select
              className="border mt-5 border-gray-300 w-full p-3"
              value={guests} // Usa el estado actual
              onChange={(e) => setGuests(Number(e.target.value))} // Actualiza el estado
            >
              <option value="">Selecciona una opción</option>
              <option value={1}>Solo Yo</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
          </label>
          <button
            className="my-5 bg-[#AEA38E] mt-3.5 inline-block text-center px-4 py-2 rounded text-white "
            type="submit"
          >
            CONFIRMAR
          </button>
        </form>
      </div>
      {alerts && <AlertAsistencia alerts={alerts} setAlerts={setAlerts} />}
    </div>
  );
}
