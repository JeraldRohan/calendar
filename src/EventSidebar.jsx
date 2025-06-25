import React from "react";
import deleteIcon from "./assets/delete.png";
import "./EventSidebar.css";

function EventSidebar({ selectedDate, events, onClear }) {
  const formatDateIndian = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="event-sidebar">
      <div className="sidebar-header">
        <h3>
          {selectedDate ? `Events on ${formatDateIndian(selectedDate)}` : "All Events"}
        </h3>
        {selectedDate && (
          <button className="close-btn" onClick={onClear} title="Show All Events">
            <img src={deleteIcon} alt="Close" />
          </button>
        )}
      </div>

      {events.length === 0 ? (
        <div className="no-events">No events on this date.</div>
      ) : (
        <ul>
          {events.map((event, index) => (
            <li key={index} className="event-item">
              <div className="event-title">{event.title}</div>
              <div className="event-date">{formatDateIndian(event.date)}</div>
              <div className="event-time">
                {event.startTime} – {event.endTime}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventSidebar;
