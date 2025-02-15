import React from "react";

export default function Galeria() {
  return (
    <div>
      <div className="bg-[#859382] text-center px-10 py-2 rounded text-white ">
        <p>Galería</p>
        <hr className="w-72" />
        <div className=" grid grid-cols-2  gap-3">
          <div>
            <img src="/public/pexels-emma-bauso-1183828-2253870.jpg" alt="" />
          </div>
          <div>
          <img src="/public/pexels-pixabay-265722.jpg" alt="" />
          </div>
          <div>
          <img src="/public/pexels-emma-bauso-1183828-2253870.jpg" alt="" />
          </div>
        </div>
        <hr />
        <p>SHARE YOUR MOMENTS</p>
        <p>
          Te compartimos este espacio en donde podrás subir fotos y videos de
          los mejores momentos de nuestra boda:
        </p>
        <a href="">CARGAR FOTOS Y VIDEOS</a>
      </div>
    </div>
  );
}
