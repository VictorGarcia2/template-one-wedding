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
    },
    {
      id: 2,
      img: "icons/29048d803c2e03d04d88dba3e403f125-abstract-sunburst-rays-icon.svg",
      tittle: "RECEPCIÓN",
      body: "Capilla Hacienda Tekik de Regil",
      mapa: "",
    },
    {
      id: 3,
      img: "icons/church.svg",
      tittle: "CÓCTEL",
      body: "Capilla Hacienda Tekik de Regil",
      mapa: "",
    },
    {
      id: 4,
      img: "icons/church.svg",
      tittle: "CENA",
      body: "Capilla Hacienda Tekik de Regil",
      mapa: "",
    },
  ];
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]); // Ajusta los valores para el efecto parallax
 
  return (
    <>
      <div className="w-full mx-auto  "  >
        <img
          className="absolute  object-cover opacity-55 h-[1600px] -z-10"
          src="/public/bg.jpg"
          alt=""
        />
        <ol class=" mx-20 border-s border-gray-700 pt-96 ">
          {list &&
            list?.map((lista) => (
              <motion.div style={{ y }}>
                <li class=" mx-10 flex flex-col w-full justify-center   mb-40">
                  <span class="  w-10 h-10 mb-5   -ms-26  text-center    absolute">
                    <p className="font-display text-center">4pm</p>
                  </span>
                  <span class=" flex mx-auto justify-center w-14 mb-5  rounded-full start-10 ring-3 bg-white  ring-green-950">
                    <img className="p-2" src={lista.img} alt="" />
                  </span>
                  <h3 class="flex items-center mb-1 text-4xl mx-auto font-display font-light ">
                    {lista.tittle}
                  </h3>
                  <p class="mb-4 text-2xl w-56 text-center font-display italic font-light mx-auto ">
                    {lista.body}
                  </p>
                  <div className="mx-auto ">
                    <a
                      className="bg-green-700 text-center px-4 py-2 text-white "
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
