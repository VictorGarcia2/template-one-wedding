
import { useEffect, useState } from "react";
import { db, onValue, ref } from "../../firebase/firebase";

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

  const totalGuests = attendees.reduce((sum, att) => sum + att.guests, 0);

  return (
    <div>
      <h2>Lista de asistentes</h2>
      <p>Total de personas confirmadas: {totalGuests}</p>
      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Asistencia</th>
            <th>Personas</th>
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee, index) => (
            <tr key={attendee.id}>
              <td>{index + 1}</td>
              <td>{attendee.name}</td>
              <td>{attendee.asistencia}</td>
              <td>{attendee.guests}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RSVPList;
