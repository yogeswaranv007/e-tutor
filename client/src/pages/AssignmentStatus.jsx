import React from 'react';
import Header from '../components/common/Header.jsx';
import PendingAssignments from '../Components/AssignmentStatus/PendingAssignments.jsx';
import CompletedAssignments from '../Components/AssignmentStatus/CompletedAssignments.jsx';
import UpcomingSessions from '../Components/AssignmentStatus/UpcomingSessions.jsx';
import CompletedSessions from '../Components/AssignmentStatus/CompletedSessions.jsx';
import FooterMessage from '../Components/AssignmentStatus/FooterMessage.jsx';
import '../Styles/AssignmentStatus/AssignmentStatus.css';

const AssignmentStatus = () => {
  return (
    <div>
      <Header />
      <div className="assignment-status-container">
        <div className="assignments-section">
          <PendingAssignments />
          <CompletedAssignments />
        </div>

        <div className="sessions-section">
          <UpcomingSessions />
          <CompletedSessions />
        </div>

        <FooterMessage />
      </div>
    </div>
  );
};

export default AssignmentStatus;
