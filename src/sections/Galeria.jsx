import React from "react";
export default function Galeria() {
  return (
    <>
      <div>
        <div className="bg-[#859382] text-center px-10 py-2 rounded text-white pb-9 ">
          <p className="font-display text-3xl py-6 text-white" data-aos="zoom-in">Galería</p>
          <hr className="w-72 mx-auto" />
          <div className="grid grid-cols-2 md:grid-cols-3 mt-4 gap-4 h-96 sm:h-screen overflow-y-scroll overflow-hidden">
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="gallery/foto-11.jpg" alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="gallery/foto-13.jpg" alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="gallery/foto-14.jpg" alt=""></img>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="gallery/foto-18.jpg" alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="gallery/foto-15.jpg" alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="gallery/foto-18.jpg" alt=""></img>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="gallery/foto-13.jpg" alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="gallery/foto-14.jpg" alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="gallery/foto-18.jpg" alt=""></img>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="gallery/foto-18.jpg" alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="gallery/foto-14.jpg" alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="gallery/foto-16.jpg" alt=""></img>
              </div>
            </div>
          </div>

          <hr className="w-73 text-white mx-auto my-9 " />
          <p className="font-display text-3xl text-white" data-aos="fade-right">SHARE YOUR MOMENTS</p>
          <p className="font-display text-base text-white" data-aos="fade-left">
            Te compartimos este espacio en donde podrás subir fotos y videos de
            los mejores momentos de nuestra boda:
          </p>
          <a className="bg-white  mt-3.5 inline-block text-center px-4 py-2 rounded text-[#859382] " href="">CARGAR FOTOS Y VIDEOS</a>
        </div>
      </div>
    </>
  );
}
