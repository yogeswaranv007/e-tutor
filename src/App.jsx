import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDashboard from './pages/StudentDashboard.jsx';
import TutorDashboard from './pages/TutorDashboard.jsx';
// import ChatPage from './Pages/Chats.jsx';
import AssignmentStatus from './pages/AssignmentStatus.jsx';
import AssignmentPendingPage from './pages/AssignmentPending.jsx';
// import Availability from './Components/Availability/availability.jsx';
import LogSignf from './Components/LogSign/LogSign.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login-signin" element={<LogSignf />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/tutor-dashboard" element={<TutorDashboard />} />
        {/* <Route path="/chats" element={<ChatPage />} /> */}
        <Route path="/assignment-status" element={<AssignmentStatus />} />
        <Route path="/pending-assignments" element={<AssignmentPendingPage />} />
        {/* <Route path="/availability" element={<Availability />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
