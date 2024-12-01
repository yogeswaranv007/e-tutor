import React, { useState } from 'react';
import './../../Styles/LogSign/LogSign.css';
import GraduationCap from './../../assets/Graduation_Cap.png';
import MailIcon from './../../assets/MailIcon.png'; 
import UserIcon from '../../assets/UserIcon.png'; 
import LockIcon from '../../assets/LockIcon.png'; 
import GoogleIcon from '../../assets/GoogleIcon.png';

function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState('');
  const [userType, setUserType] = useState('Student');
  const [usernameAvailable, setUsernameAvailable] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(password.length > 8) {
      seterror('');
      try {
        const endpoint = userType === 'Student' ? 'register-student' : 'register-tutor';
        const response = await fetch(`http://localhost:5000/${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            username,
            password,
            usertype: userType,
          }),
        });
  
        const data = await response.json();
  
        if (response.status === 201) {
          alert('Registration successful!');
        } else if (response.status === 400 && data.error === 'User already exists') {
          alert('Account already exists');
        } else {
          alert('Registration failed');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
      }
    } else {
      seterror('Minimum 8 characters');
    }
  };

  const checkUsernameAvailability = async (username) => {
    try {
      const response = await fetch(
        `http://localhost:5000/check-username?username=${username}&table=${userType === 'Student' ? 'students' : 'tutors'}`
      );
      const data = await response.json();
      setUsernameAvailable(data.available);
    } catch (error) {
      console.error('Error checking username:', error);
    }
  };

  return (
    <div className="logsign-container">
      <form className="logsign-form" onSubmit={handleSubmit}>
        <div className="tutor_logo">
          <img src={GraduationCap} alt="E-tutor logo" />
          <span>E-Tutor</span>
        </div>
        <div className='input-bg'>
        <label htmlFor="email">Email</label>
        <div className="input-container">
          <img src={MailIcon} alt="Mail Icon" className="input-icon" />
          <input
            type="email"
            className="logsign-input"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <label htmlFor="username">Username</label>
        <div className="input-container">
          <img src={UserIcon} alt="User Icon" className="input-icon" />
          <input
            type="text"
            className={`logsign-input ${usernameAvailable ? '' : 'username-taken'}`}
            id="username"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              checkUsernameAvailability(e.target.value);
            }}
          />
        </div>
        {!usernameAvailable && <p className="username-taken-msg">Username already exists</p>}

        <label htmlFor="password">Password</label>
        <div className="input-container">
          <img src={LockIcon} alt="Lock Icon" className="input-icon" />
          <input
            type="password"
            className="logsign-input"
            id="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div style={{color:"red", fontSize:'16px', height:'15px'}}>{error}</div>}
        
        <div className="category-radio">
  <div>
    <label htmlFor="student">Student</label>
    <input
      type="radio"
      id="student"
      name="userType"
      value="Student"
      checked={userType === 'Student'}
      onChange={() => setUserType('Student')}
    />
  </div>
  <div>
    <label htmlFor="tutor">Tutor</label>
    <input
      type="radio"
      id="tutor"
      name="userType"
      value="Tutor"
      checked={userType === 'Tutor'}
      onChange={() => setUserType('Tutor')}
    />
  </div>
</div>
</div>


        <button type="submit" className="logsign-button">Sign Up</button>
        <p className='or'>or</p>
        <button type="button" className="logsign-google-button">
          <img src={GoogleIcon} alt="Google Icon" className="google-icon" /> Sign Up with Google
        </button>
      </form>
    </div>
  );
}

export default Signup;
