import React, { useEffect, useState } from "react";
import CountdownTimer from "../components/CountdownTimer";
import Aos from "aos";

export default function Contador() {
  const targetDate = "2025-10-23T00:00:00";
  useEffect(() => {
    Aos.init({
      offset: 200,
      once: true,
      duration: 800
    }
    );
  }, []);
  return (
    <div className="sm:h-[900px]  bg-black/90 z-20   w-full">
      <div className="flex flex-col items-center ">
        <h1  className=" text-white mt-40 text-7xl absolute font-display font-bold z-20  ">
          Alex & <br /> Caro
        </h1>
        <div className="absolute  bg-black/20 rounded p-4 flex flex-col justify-center  mt-[500px] z-20  ">
          <p className="w-full font-display text-center text-xl tracking-widest text-white ">
            21 DE OCTUBRE 2025
          </p>
          <hr className=" mx-auto text-white w-80 static" />
          <CountdownTimer targetDate={targetDate}  />
          <hr className="mx-auto text-white w-80 static" />
        </div>
        <img
          className="object-cover h-screen sm:h-[900px] sm:w-full opacity-75"
          src="gallery/foto-20.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
