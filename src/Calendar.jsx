import React, { useState } from "react";
import "./Calendar.css";
import prevIcon from "./assets/previous.png";
import nextIcon from "./assets/next.png";
import EventSidebar from "./EventSidebar";

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar({ events, showSidebar, toggleSidebar }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const goToPrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  const calendarDays = [];
  for (let i = 0; i < firstDayOfWeek; i++) calendarDays.push(null);
  for (let day = 1; day <= daysInMonth; day++) calendarDays.push(day);

  const eventDatesMap = {};
  events.forEach((ev) => {
    if (!eventDatesMap[ev.date]) eventDatesMap[ev.date] = [];
    eventDatesMap[ev.date].push(ev);
  });

  const today = new Date();
  const isToday = (day) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  const formatDate = (y, m, d) =>
    `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

  const getEventColors = (dateStr) => {
    const list = eventDatesMap[dateStr];
    if (!list) return [];
    const colors = [];
    for (let ev of list) {
      const hour = parseInt(ev.startTime?.split(":")[0]);
      if (isNaN(hour)) continue;
      if (hour < 12) colors.push("dot-morning");
      else if (hour < 18) colors.push("dot-afternoon");
      else colors.push("dot-evening");
      if (colors.length === 3) break;
    }
    return colors;
  };

  return (
    <div className="calendar-container" style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <div className="calendar-header">
          <button className="nav-button" onClick={goToPrevMonth} aria-label="Previous Month">
            <img src={prevIcon} alt="Previous" />
          </button>
          <h2>
            {currentDate.toLocaleString("en-IN", { month: "long" })} {year}
          </h2>
          <button className="nav-button" onClick={goToNextMonth} aria-label="Next Month">
            <img src={nextIcon} alt="Next" />
          </button>
        </div>

        <div className="calendar-grid">
          {WEEK_DAYS.map((wd) => (
            <div key={wd} className="calendar-weekday">
              {wd}
            </div>
          ))}

          {calendarDays.map((day, idx) => {
            const dateStr = day ? formatDate(year, month, day) : null;
            const colors = dateStr ? getEventColors(dateStr) : [];

            return (
              <div
                key={idx}
                className={`calendar-day ${day === null ? "empty" : ""} ${
                  isToday(day) ? "today" : ""
                }`}
                onClick={() => day && setSelectedDate(dateStr)}
                style={{ cursor: day ? "pointer" : "default" }}
              >
                <div className="day-content">
                  {day}
                  <div className="dots-container">
                    {colors.map((clr, i) => (
                      <span key={i} className={`event-dot ${clr}`} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <EventSidebar
        selectedDate={selectedDate}
        events={selectedDate ? eventDatesMap[selectedDate] || [] : events}
        onClear={() => setSelectedDate(null)}
      />
    </div>
  );
}

export default Calendar;
