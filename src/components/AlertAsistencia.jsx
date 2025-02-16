import React from "react";
export default function AlertAsistencia({alerts, setAlerts}) {
  return (
    <div className={`${alerts ? "animate-fade animate-once animate-duration-1000 animate-delay-100 animate-ease-in" : ""} flex z-50 h-full  fixed top-0 items-center justify-center bg-gray-100`}>
      <div className="rounded-lg bg-gray-50 px-16 py-14">
        <div className="flex justify-center">
          <div className="rounded-full bg-green-200 p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-8 w-8 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <h3 className="my-4 font-display ß text-center text-3xl font-semibold text-gray-700">
          ¡Gracias por confirmar tu asistencia!
        </h3>
        <button className="bg-[#859382] text-white rounded-2xl" onClick={()=>setAlerts(false)}> Close</button>
      </div>
    </div>
  );
}
