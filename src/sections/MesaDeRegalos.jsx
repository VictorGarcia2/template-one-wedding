import { Carousel } from "@material-tailwind/react";
import React from "react";

export default function MesaDeRegalos() {
  return (
    <div className="bg-[#859382] text-white ">
      <img
        className="w-full"
        src="pexels-emma-bauso-1183828-2253870.jpg"
        alt=""
      />
      <div className="flex flex-col justify-center items-center px-10 ">
        <p className="font-display text-3xl mt-10 ">MESA DE REGALOS</p>
        <p className="text-center font-display text-base mt-3 mb-5">
          Su presencia y compañía siempre será nuestro mejor regalo. Sin
          embargo, si desean obsequiarnos algo más, pueden hacerlo a través de:
        </p>
        <Carousel
          className="rounded-xl w-72 mb-10 "
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-black" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img 
          src="liverpool-es-parte-de-mi-vida-logo-png_seeklogo-259639.png"
          alt="image 1" className="h-80 w-80bject-cover" />
          <img
            src="el-palacio-de-hierro.svg"
            alt="image 2"
            className="h-80 w-80 object-cover"
          />
          <img
            src="01cada77a0a7d326d85b7969fe26a728.jpg"
            alt="image 3"
            className="h-80 w-80 object-cover"
          />
        </Carousel>
      </div>
    </div>
  );
}
