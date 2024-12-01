import React from 'react';
import Header from '../components/common/Header.jsx';
import PlanDetails from '../Components/StudentDashboard/PlanDetails.jsx';
import ScheduledLessons from '../Components/StudentDashboard/ScheduledLessons.jsx';
import LastAttendedTutors from '../Components/StudentDashboard/LastAttendedTutors.jsx';
import StudentProgress from '../Components/StudentDashboard/StudentProgress.jsx';
import '../Styles/StudentDashboard/StudentDashboard.css';

const StudentDashboard = () => {
  return (
    <div className="student-dashboard">
      <Header />
      <div className="dashboard-container">
        <div className="left-side">
          <div className='plan'>
          <PlanDetails />
          </div>
          <div className="lastAttendedTutors">
            <LastAttendedTutors />
          </div>
        </div>
        <div className="right-side">
          <ScheduledLessons />
          <StudentProgress />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
