import React from "react";

export default function Hospedaje() {
  return (
    <div className="bg-gray-100 text-center py-10">
      <div className="flex flex-col gap-4">
        <p className="font-display text-3xl">HOSPEDAJE</p>
        <div className="items-center flex flex-col justify-center ">
          <img className="w-15" src="icons/resort.svg" alt="" data-aos="zoom-in"/>
          <p className="font-display text-2xl">Hotel Fiesta Americana <br />
          Merida Centro</p>
          <p className="font-display text-base">CANCÚN, QUINTANA ROO</p>
          <p className="font-display">Hotel: 999 123 4567</p>
          <p className="font-display">Whatsapp: 9123456789</p>
          <a href="" className="bg-[#AEA38E] mt-3.5 inline-block text-center px-4 py-2 rounded text-white ">VER HOTEL</a>
        </div>
        <div className="items-center flex flex-col justify-center ">
        <img className="w-15" src="icons/resort.svg" alt="" data-aos="zoom-in" />
          <p className="font-display text-2xl">Hotel Hyatt Regency <br />
          Merida Norte</p>
          <p className="font-display text-base">CANCÚN, QUINTANA ROO</p>
          <p className="font-display">Hotel: 999 765 4321</p>
          <p className="font-display">Whatsapp: 9876543210</p>
          <a href="" className="bg-[#AEA38E] mt-3.5 inline-block text-center px-4 py-2 rounded text-white ">VER HOTEL</a>
        </div>
      </div>
    </div>
  );
}
