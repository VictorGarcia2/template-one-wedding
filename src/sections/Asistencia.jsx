import React from "react";

export default function () {
  return (
    <div>
      <p>CONFIRMA TU ASISTENCIA</p>
      <p>
        Nos ayudas confirmando tu asistencia lo antes posible, muchas gracias.
      </p>
      <form>
        <p>¿Asisitirás?</p>
        <label htmlFor="">
          Si
          <input type="radio" name="asistencia" id="" />
        </label>
        <label htmlFor="">
          No
          <input type="radio" name="asistencia" id="" />
        </label>
        <input type="text" name="" id="" placeholder="Tu nombre completo" />
        <label htmlFor="">
          Número de personas confirmadas de acuerdo al número asignado en tu
          Pase:
          <select id="cars">
            <option value="">Selecciona una opción</option>
            <option value="1">Solo Yo</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">4</option>
            <option value="6">6</option>
          </select>
        </label>
        <button type="submit"> CONFIRMAR</button>
      </form>
    </div>
  );
}
