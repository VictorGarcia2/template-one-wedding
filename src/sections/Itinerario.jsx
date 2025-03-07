import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

export default function Itinerario() {
  const list = [
    {
      id: 1,
      img: "icons/church.svg",
      tittle: "CEREMONIA",
      body: "Capilla Hacienda Tekik de Regil",
      mapa: "",
      horario: "4pm"
    },
    {
      id: 2,
      img: "icons/29048d803c2e03d04d88dba3e403f125-abstract-sunburst-rays-icon.svg",
      tittle: "RECEPCIÓN",
      body: "Jardines Hacienda Tekik de Regil",
      mapa: "",
      horario: "6pm"
    },
    {
      id: 3,
      img: "icons/coctel.svg",
      tittle: "CÓCTEL",
      body: "Terraza Hacienda Tekik de Regil",
      mapa: "",
      horario: "7pm"
    },
    {
      id: 4,
      img: "icons/church.svg",
      tittle: "CENA",
      body: "Salón Hacienda Tekik de Regil",
      mapa: "",
      horario: "8pm"
    },
  ];
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -600]); // Ajusta los valores para el efecto parallax

  return (
    <>
      <div className="w-full mx-auto flex flex-col text-center relative -z-10  h-full">
        <div
          className="fixed bottom-0 left-0 w-full h-60 backdrop-blur-sm  bg-[#AEA38E]/10"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, white 60%, white 100%, transparent)",
            maskImage:
              "linear-gradient(to bottom, transparent, white 60%, white 100%, transparent)",
          }}
        ></div>
        <img
          className="absolute  object-cover opacity-55 h-[1600px] -z-10"
          src="bg.jpg"
          alt=""
        />
        <p
          className="font-display items-center text-5xl pt-7 "
          data-aos="fade-right"
        >
          Itinerario
        </p>
        <ol class=" mx-20 sm:mx-auto sm:w-60  border-s md:border-none md:justify-center md:flex border-gray-700 pt-96 -z-10 ">
          {list &&
            list?.map((lista) => (
              <motion.div style={{ y }}>
                <li
                  class={` ${
                    lista.id === 4 ? "pb-0" : "pb-50"
                  } mx-10 flex flex-col w-full justify-center -mt-40 mb-20`}
                >
                  <span class="  w-10 h-10 mb-5 md:mt-80  md:flex md:justify-center md:ms-34 md:items-center  -ms-26  text-center   absolute">
                    <p className="font-display text-center">{lista.horario}</p>
                  </span>
                  <span class=" flex mx-auto justify-center w-14 mb-5  rounded start-10 ring-3 bg-white  ring-[#AEA38E]">
                    <img className="p-2" src={lista.img} alt="" />
                  </span>
                  <h3 class="flex items-center mb-1 text-4xl mx-auto font-display font-300 ">
                    {lista.tittle}
                  </h3>
                  <p class="mb-4 text-2xl w-56 text-center font-display italic font-light mx-auto ">
                    {lista.body}
                  </p>
                  <div className="mx-auto ">
                    <a
                      className="bg-[#AEA38E] text-center px-4 py-2 rounded text-white "
                      href=""
                    >
                      Ver mapa
                    </a>
                  </div>
                </li>
              </motion.div>
            ))}
        </ol>
      </div>
    </>
  );
}
