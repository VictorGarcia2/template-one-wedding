import { useEffect, useState } from "react";
import { db, onValue, ref } from "../firebase/firebase";
import { Outlet } from "react-router";

const RSVPList = () => {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const rsvpRef = ref(db, "rsvps");
    const unsubscribe = onValue(rsvpRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const formattedData = Object.entries(data).map(([id, entry]) => ({
          id,
          name: entry.name,
          asistencia: entry.asistencia,
          guests: entry.guests,
        }));
        setAttendees(formattedData);
      } else {
        setAttendees([]);
      }
    });
    return () => unsubscribe();
  }, []);
  console.log(attendees)
  const totalGuests = attendees.reduce((total, attendee) => {
    if (attendee.asistencia !== "no") {
      return total + attendee.guests;
    }
    return total;
  }, 0);
  return (
    <div className="flex flex-col justify-center  px-10 bg-[#AEA38E] text-white ">
      <div className="h-screen  grid place-content-center">

      <p className="py-2 text-9xl  text-center font-display italic">{totalGuests}</p>
      <p className="py-2 text-4xl text-center font-display italic mb-50">Personas han confirmado asistencia</p>
      </div>
      <h2 className="font-display text-3xl py-3 text-center">Lista de invitados</h2>
      <table className="border border-gray-300 text-center mb-20">
        <thead className="border border-gray-300">
          <tr className="font-display italic">
            <th className="border border-gray-300">#</th>
            <th className="border border-gray-300">Nombre</th>
            <th className="border border-gray-300">Asistencia</th>
            <th className="border border-gray-300">Personas</th>
          </tr>
        </thead>
        <tbody className="font-display rounded-4xl">
          {attendees.map((attendee, index) => (
            <tr key={attendee.id}>
              <td className="border  border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300">{attendee.name}</td>
              <td className="border border-gray-300">{attendee.asistencia}</td>
              <td className="border border-gray-300">{attendee.guests}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Outlet />
    </div>
    
  );
};

export default RSVPList;
