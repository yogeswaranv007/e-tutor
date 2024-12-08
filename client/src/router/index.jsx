import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import StudentDashboard from "../pages/StudentDashboard.jsx";
import TutorDashboard from "../pages/TutorDashboard.jsx";
import AssignmentStatus from "../pages/AssignmentStatus.jsx";
import AssignmentPendingPage from "../pages/AssignmentPending.jsx";
import Signup from "../components/Signup/Signup.jsx";
import FindTutors from "../pages/FindTutors.jsx";
import Login from "../pages/LoginPage.jsx";
import SubscribePage from "../pages/SubscribePage.jsx";
import HomePage from "../pages/HomePage.jsx";

export default class Index extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/tutor-dashboard" element={<TutorDashboard />} />
          <Route path="/assignment-status" element={<AssignmentStatus />} />
          <Route path="/pending-assignments" element={<AssignmentPendingPage />} />
          <Route path="/find-tutors" element={<FindTutors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscribe-page" element={<SubscribePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    );
  }
}