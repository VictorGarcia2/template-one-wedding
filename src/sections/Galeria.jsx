import React from "react";

// Datos de las imágenes (podrías mover esto a un archivo JSON o importarlo desde una API)
const images = [
  { src: "gallery/foto-11.jpg", alt: "Foto 11" },
  { src: "gallery/foto-13.jpg", alt: "Foto 13" },
  { src: "gallery/foto-14.jpg", alt: "Foto 14" },
  { src: "gallery/foto-15.jpg", alt: "Foto 15" },
  { src: "gallery/foto-16.jpg", alt: "Foto 16" },
  { src: "gallery/foto-17.jpg", alt: "Foto 17" },
  { src: "gallery/foto-18.jpg", alt: "Foto 18" },
  { src: "gallery/foto-19.jpg", alt: "Foto 19" },
  { src: "gallery/foto-20.jpg", alt: "Foto 20" },
  { src: "gallery/foto-21.jpg", alt: "Foto 21" },
];

export default function Galeria() {
  return (
    <div className="bg-[#859382] text-center px-10 py-2 rounded text-white pb-9">
      <p className="font-display text-3xl py-6 text-white" data-aos="zoom-in">
        Galería
      </p>
      <hr className="w-72 mx-auto" />
      <div className="grid grid-cols-2 md:grid-cols-3 mt-4 gap-4 h-96 sm:h-screen overflow-y-auto">
        {images.map((image, index) => (
          <div key={index} className="grid gap-4">
            <img
              className="h-auto max-w-full rounded-lg"
              src={image.src}
              alt={image.alt}
              loading="lazy" 
            />
          </div>
        ))}
      </div>

      <hr className="w-73 text-white mx-auto my-9" />
      <p className="font-display text-3xl text-white" data-aos="fade-right">
        SHARE YOUR MOMENTS
      </p>
      <p className="font-display text-base text-white" data-aos="fade-left">
        Te compartimos este espacio en donde podrás subir fotos y videos de los
        mejores momentos de nuestra boda:
      </p>
      <a
        className="bg-white mt-3.5 inline-block text-center px-4 py-2 rounded text-[#859382]"
        href="#"
      >
        CARGAR FOTOS Y VIDEOS
      </a>
    </div>
  );
}