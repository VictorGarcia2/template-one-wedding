import React from "react";
import CountdownTimer from "../components/CountdownTimer";

export default function Contador() {
      const targetDate = '2025-10-23T00:00:00';
  return (
    <div className="">
      <div className="flex flex-col items-center  ">
        <h1 className="animate-pulse text-white mt-20 text-6xl absolute font-display">
          {" "}
          Alex & <br /> Agata
        </h1>
        <div className="absolute  mt-[500px]  w-full ">
          <p className="w-full font-display text-center text-xl tracking-widest text-white">21 DE OCTUBRE 2025</p>
          <hr className=" mx-auto text-white w-80 static"/>
          <CountdownTimer targetDate={targetDate} />
          <hr className="mx-auto text-white w-80 static"/>
        </div>
        <img
          className=" object-cover   h-screen"
          src="/public/pexels-emma-bauso-1183828-2253870.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
