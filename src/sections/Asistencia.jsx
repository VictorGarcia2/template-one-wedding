import React, { useState } from "react";
import { db} from "../firebase/firebase";
import { ref, push } from "firebase/database";

export default function () {
  const [name, setName] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !asistencia || guests < 1) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    // Guardar en Firebase
    
    const rsvpRef = ref(db, "rsvps");
    const newRSVPRef = push(rsvpRef, { name, asistencia, guests });

    // Llamar a la función onRSVPSubmit que pasamos como props para actualizar el estado en el componente principal
    onRSVPSubmit({
      id: newRSVPRef.key,
      name,
      asistencia,
      guests
    });

    setName("");
    setAsistencia("");
    setGuests(1);
  };
  return (
    <div className="items-center flex flex-col justify-center text-center ">
      <img src="/public/pexels-emma-bauso-1183828-2253870.jpg" alt="" />
      <div className="px-10 pt-10">
        <p className="font-display text-3xl">CONFIRMA TU ASISTENCIA</p>
        <p className="font-display py-5">
          Nos ayudas confirmando tu asistencia lo antes posible, muchas gracias.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <p className="font-display text-start">¿Asisitirás?</p>
          <label
            htmlFor="asistencia"
            name="asistencia"
            className="text-start font-display "
          >
            <input className="mx-2" type="radio" value="si" name="asistencia" id="" />
            Si
          </label>
          <label
            htmlFor="asistencia"
            name="asistencia"
            className="text-start  font-display"
          >
            <input className="mx-2" type="radio" value="no" name="asistencia" id="" />
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
            <select className="border mt-5 border-gray-300 p-3" id="cars">
              <option value="">Selecciona una opción ▼ </option>
              <option value={setGuests(1)}>Solo Yo</option>
              <option value={setGuests(2)}>2</option>
              <option value={setGuests(3)}>3</option>
              <option value={setGuests(4)}>4</option>
              <option value={setGuests(5)}>4</option>
              <option value={setGuests(6)}>6</option>
            </select>
          </label>
          <button className="my-5 bg-[#859382] mt-3.5 inline-block text-center px-4 py-2 rounded text-white " type="submit"> CONFIRMAR</button>
        </form>
      </div>
    </div>
  );
}
