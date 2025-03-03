import React from "react";

export default function Dedicatoria() {
  return (
    <div className="bg-black">
      <p
        className="absolute shadow-2xs text-white z-50  font-display text-4xl text-center px-10 pt-5"
        data-aos="zoom-in"
      >
        "Amar no es mirarse eternamente frente a frente, sino construir un mundo
        donde vuestros pasos y los nuestros se entrelacen hacia el mismo
        horizonte"
      </p>
      <img
        className="opacity-50 object-cover w-full h-[500px]"
        src="gallery/foto-8.jpg"
        alt=""
      />
    </div>
  );
}
