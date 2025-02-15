import { Carousel } from "@material-tailwind/react";
import React from "react";

export default function MesaDeRegalos() {
  return (
    <div className="bg-[#859382] text-white ">
      <img className="w-full" src="/public/pexels-emma-bauso-1183828-2253870.jpg" alt="" />
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
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
    </div>
  );
}
