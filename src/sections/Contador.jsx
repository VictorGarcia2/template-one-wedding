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
    <div className="animate-fade-left relative animate-once animate-duration-1000 animate-delay-1000 animate-ease-in bg-black/90   w-full">
      <div className="flex flex-col items-center ">
        <h1  className=" text-white mt-40 text-7xl absolute font-display font-bold z-20  ">
          Alex & <br /> Agata
        </h1>
        <div className="absolute  mt-[500px] z-20  w-full ">
          <p className="w-full font-display text-center text-xl tracking-widest text-white ">
            21 DE OCTUBRE 2025
          </p>
          <hr className=" mx-auto text-white w-80 static" />
          <CountdownTimer targetDate={targetDate}  />
          <hr className="mx-auto text-white w-80 static" />
        </div>
        <img
          className="object-cover h-screen opacity-75"
          src="gallery/foto-20.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
