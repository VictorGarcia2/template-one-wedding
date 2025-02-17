import { Carousel, IconButton } from "@material-tailwind/react";
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
          className="rounded-xl mb-5"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          <img
            src="el-palacio-de-hierro.svg"
            alt="image 1"
            className="h-full w-96 object-cover"
          />
          <img
            src="liverpool-es-parte-de-mi-vida-logo-png_seeklogo-259639.png"
            alt="image 2"
            className="h-full w-96 object-cover"
          />
          <img
            src="01cada77a0a7d326d85b7969fe26a728.jpg"
            alt="image 3"
            className="h-full w-96 object-cover"
          />
        </Carousel>
      </div>
    </div>
  );
}
