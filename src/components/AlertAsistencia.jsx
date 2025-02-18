import Lottie from "lottie-react";
import React from "react";
import animationData from "../assets/Success.json" 
export default function AlertAsistencia({alerts}) {
  return (
    <div className={`${alerts ? "animate-fade animate-once animate-duration-[3200] animate-delay-100 animate-ease-in" : "hidden"} flex z-50 h-full  fixed top-0 items-center justify-center bg-white`}>
      <div className="rounded-lg bg-white px-16 py-14">
        <div className="flex justify-center">
          <div className="">
            <div className="flex h-full w-full items-center justify-center">
              <Lottie animationData={animationData} loop={true}/>
            </div>
          </div>
        </div>
        <h3 className="animate-fade animate-once animate-duration-[9200] animate-delay-100 animate-ease-in my-4 font-display ß text-center text-3xl font-semibold text-gray-700">
          ¡Gracias por confirmar tu asistencia!
        </h3>
      </div>
    </div>
  );
}
