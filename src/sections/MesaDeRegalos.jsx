import { Carousel, IconButton } from "@material-tailwind/react";
import React from "react";

export default function MesaDeRegalos() {
  return (
    <div className="bg-[#859382] text-white mx-auto ">
      <img
        className="w-full sm:h-[500px] object-cover"
        src="pexels-emma-bauso-1183828-2253870.jpg"
        alt=""
      />
      <div className="flex flex-col justify-center items-center px-10 sm:w-[400px] mx-auto ">
        <p className="font-display text-2xl sm:text-3xl mt-10 " data-aos="fade-up">
          MESA DE REGALOS
        </p>
        <p
          className="text-center font-display text-sm sm:text-base mt-3 mb-5"
          data-aos="fade-right"
        >
          Su presencia y compañía siempre será nuestro mejor regalo. Sin
          embargo, si desean obsequiarnos algo más, pueden hacerlo a través de:
        </p>
        <Carousel
          className="rounded-xl mb-5 "
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={5}
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
              className="!absolute top-2/4 !right-4 -translate-y-2/4 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={5}
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
          <a href="https://www.liverpool.com.mx/tienda/home">
            <img
              src="liverpool-es-parte-de-mi-vida-seeklogo-01.webp"
              alt="image 1"
              className="h-full w-96 object-cover "
            />
          </a>
          <a href="https://www.elpalaciodehierro.com/">
            <img
              src="liverpool-es-parte-de-mi-vida-seeklogo-02.webp"
              alt="image 2"
              className="h-full w-96 object-cover "
            />
          </a>
        </Carousel>
      </div>
    </div>
  );
}
