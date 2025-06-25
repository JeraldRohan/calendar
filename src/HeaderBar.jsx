import React, { useState, useEffect } from "react";
import "./HeaderBar.css";

function HeaderBar({ showSidebar, toggleSidebar }) {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString();

  return (
    <div className="header-wrapper">
      <header className="header-bar">
        <div className="header-left">
          <span className="title-main">Calendar</span>
          {/* Click to toggle sidebar */}
          <span
            className="title-sub"
            onClick={toggleSidebar}
            style={{ cursor: "pointer", userSelect: "none" }}
            title={showSidebar ? "Hide My Events" : "Show My Events"}
          >
      
          </span>
        </div>
        <div className="header-right">
          <span className="header-date">{formattedDate}</span>
          <span className="header-time">{formattedTime}</span>
        </div>
      </header>
    </div>
  );
}

export default HeaderBar;
