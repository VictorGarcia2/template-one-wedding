import React from "react";

export default function Galeria() {
  return (
    <>
      <div>
        <div className="bg-gray-50 text-center px-10 py-2 rounded text-white pb-9 ">
          <p className="font-display text-3xl py-6 text-[#859382]">Galería</p>
          <hr className="w-72 mx-auto" />
          <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-4">
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""></img>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""></img>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""></img>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""></img>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""></img>
              </div>
            </div>
          </div>

          <hr className="w-73 text-white mx-auto my-9 " />
          <p className="font-display text-3xl text-[#859382]">SHARE YOUR MOMENTS</p>
          <p className="font-display text-base text-[#859382] ">
            Te compartimos este espacio en donde podrás subir fotos y videos de
            los mejores momentos de nuestra boda:
          </p>
          <a className="bg-[#859382]  mt-3.5 inline-block text-center px-4 py-2 rounded text-white " href="">CARGAR FOTOS Y VIDEOS</a>
        </div>
      </div>
    </>
  );
}
