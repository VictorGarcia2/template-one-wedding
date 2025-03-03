import React from "react";

export default function Noninos() {
  return (
    <div>
      <img 
      className="w-full sm:h-[500px] object-cover"
      src="gallery/foto-6.jpg" alt="" />
      <div className="bg-gray-100 text-center py-10">
      <p className="font-display text-3xl " data-aos="zoom-in">NO NIÑOS</p>
      <p className="font-display text-2xl mt-5 mx-auto w-60" data-aos="fade-right">
        Aunque amamos a sus pequeños, hagan de este día una cita y pasémosla
        increíble
      </p>
      </div>
    </div>
  );
}
