import React from "react";
import GaleriaSlider from "../components/GaleriaSlider";

// Datos de las imágenes (podrías mover esto a un archivo JSON o importarlo desde una API)
const images = [
  { src: "gallery/foto-4.jpg", alt: "Foto 14" },
  { src: "gallery/foto-5.jpg", alt: "Foto 16" },
  { src: "gallery/foto-7.jpg", alt: "Foto 17" },
  { src: "gallery/foto-3.jpg", alt: "Foto 15" },
  { src: "gallery/foto-2.jpg", alt: "Foto 13" },
  { src: "gallery/foto.jpg", alt: "Foto 11" },
  { src: "gallery/foto-8.jpg", alt: "Foto 18" },
  { src: "gallery/foto-9.jpg", alt: "Foto 19" },
  { src: "gallery/foto-10.jpg", alt: "Foto 20" },
  { src: "gallery/foto-6.jpg", alt: "Foto 21" },
];

export default function Galeria() {
  return (
    <div className="bg-[#AEA38E] text-center px-10 py-2 rounded text-white pb-9">
      <p className="font-display text-3xl py-6 text-white" data-aos="zoom-in">
        Galería
      </p>
      <hr className="w-72 mx-auto" />
      <div className="hidden md:grid md:visible grid-cols-2 md:grid-cols-5 mt-4 gap-4 h-96 sm:h-screen overflow-y-auto">
        {images.map((image, index) => (
          <div key={index} className="grid gap-4">
            <img
              className="w-full h-auto object-cover rounded-2xl"
              src={image.src}
              alt={image.alt}
              loading="lazy" 
            />
          </div>
        ))}
      </div>
      <div className="visible  md:hidden  mt-4 gap-4 h-96 sm:h-screen ">
        <GaleriaSlider/>
      </div>

      <hr className="w-73 text-white mx-auto my-9" />
      <p className="font-display text-3xl text-white" data-aos="fade-right">
        COMPARTE TUS MOMENTOS
      </p>
      <p className="font-display text-base text-white" data-aos="fade-left">
      Queremos que formes parte de nuestros recuerdos más especiales. Sube tus fotos y videos de los mejores momentos de nuestra boda en este espacio. ¡Gracias por ser parte de nuestra historia!
      </p>
      <a
        className="bg-white mt-3.5 inline-block text-center px-4 py-2 rounded text-[#AEA38E]"
        href="#"
      >
        CARGAR FOTOS Y VIDEOS
      </a>
    </div>
  );
}