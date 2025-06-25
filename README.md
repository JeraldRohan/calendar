Hosted link:[https://calendar-rohan.vercel.app/]

Calendar Web Application
A modern, interactive calendar web application designed to efficiently display, navigate, and manage events with a sleek, responsive UI and intuitive interactions.

🌟 Features
📆 Dynamic Calendar View
Navigate between months
Highlight for today's date
Weekday labels and responsive grid

🔴 Event Indicators
Color-coded dots based on event time:
▪️ Morning (#ff9999)
▪️ Afternoon (#ffd966)
▪️ Evening (#8fbc8f)

📋 Event Sidebar
Displays detailed events for the selected date
Automatically updates on day click
Clean formatting with date, time, and duration

📱 Mobile-First Responsive Design

Fully optimized for small screens
Sticky calendar and header for easy access
Scrollable event list for smaller devices

🧊 Glassmorphism UI
Soft gradients, blur effects, and shadows
Visually soothing interface

🛠️ Tech Stack
Technology	Purpose
React	Frontend Framework
CSS	Styling & Responsive Layouts
JSON	Static Event Data
JavaScript	Logic for event mapping & calendar

🧪 Folder Structure
📁 src
├── 📁 assets/          # Image icons for navigation and close
├── 📁 components/
│   ├── Calendar.js     # Main calendar logic and layout
│   ├── HeaderBar.js    # Date/time bar and nav toggle
│   └── EventSidebar.js # Side panel with event list
├── events.json         # Static events dataset
├── App.js              # Component wrapper
└── Calendar.css        # All application styling
📂 Sample Events Format (events.json)
json
Copy
Edit
[
  {
    "title": "Team Sync",
    "date": "2025-06-26",
    "startTime": "10:00",
    "endTime": "12.00"
  },
  {
    "title": "Client Review",
    "date": "2025-06-26",
    "startTime": "14:30",
    "endTime": "16.00"
  }
]
🚀 How to Run Locally
git clone https://github.com/your-username/calendar-web-app.git
cd calendar-web-app
npm install
npm start
Open http://localhost:3000 to view the app or npm run dev for react

🧠 How It Works
Calendar is dynamically generated using Date objects.
Dates are compared with the event list loaded from events.json.
Event dots are rendered conditionally based on the time slot.
The sidebar shows the full list of events for the selected day.
A HeaderBar updates in real-time and allows future controls (e.g., filtering, user login, etc.)

🎨 UI Design 
Minimalistic yet informative
Sticky elements enhance mobile UX
Gradients + blur for modern, elegant look

