import React from "react";

export default function Hospedaje() {
  return (
    <div className="bg-gray-100 text-center py-10">
      <div className="flex flex-col gap-4">
        <p className="font-display text-3xl">HOSPEDAJE</p>
        <div className="items-center flex flex-col justify-center ">
          <img className="w-15" src="/public/icons/resort.svg" alt="" />
          <p className="font-display text-2xl">Hotel NH Collection <br />
          Merida Paseo Montejo</p>
          <p className="font-display text-base">MÉRIDA, YUCATÁN</p>
          <p className="font-display">Hotel: 999 690 1380</p>
          <p className="font-display">Whatsapp: 9381141491</p>
          <a href="" className="bg-[#859382] mt-3.5 inline-block text-center px-4 py-2 rounded text-white ">VER HOTEL</a>
        </div>
        <div className="items-center flex flex-col justify-center ">
        <img className="w-15" src="/public/icons/resort.svg" alt="" />
          <p className="font-display text-2xl">Hotel NH Collection <br />
          Merida Paseo Montejo</p>
          <p className="font-display text-base">MÉRIDA, YUCATÁN</p>
          <p className="font-display">Hotel: 999 690 1380</p>
          <p className="font-display">Whatsapp: 9381141491</p>
          <a href="" className="bg-[#859382] mt-3.5 inline-block text-center px-4 py-2 rounded text-white ">VER HOTEL</a>
        </div>
      </div>
    </div>
  );
}
