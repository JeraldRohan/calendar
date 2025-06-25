import React, { useEffect, useState } from "react";
import HeaderBar from "./HeaderBar";
import Calendar from "./Calendar";

function App() {
  const [events, setEvents] = useState([]);
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => {
        console.error("Error loading events:", err);
        setEvents([]);
      });
  }, []);

  return (
    <>
      <HeaderBar
        showSidebar={showSidebar}
        toggleSidebar={() => setShowSidebar((prev) => !prev)}
      />
      <Calendar
        events={events}
        showSidebar={showSidebar}
        toggleSidebar={() => setShowSidebar(false)}
      />
    </>
  );
}

export default App;
