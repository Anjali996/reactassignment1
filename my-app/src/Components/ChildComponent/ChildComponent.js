import React, { useState } from 'react';
import './ChildComponent.css';
import vector from '../Images/Vector.png';
import Footer from '../Footer/Footer';

function ChildComponent() {
  const [email, setEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the entered email matches the pattern
    if (emailPattern.test(email)) {
      // Save the email in local storage
      localStorage.setItem('userEmail', email);

      // Mark the user as registered
      setIsRegistered(true);
    } else {
      // Invalid email pattern, show alert
      window.alert('Please enter a valid email address.');
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='left-header'>
          <p id='a1'>An inspiring design delivered to your inbox every morning</p>
          <p id='a2'>
            Our team scouts the internet for the best designs,<br/> illustrations and
            art and delivers a truly inspiring<br/> one every day to your inbox
          </p>
          {isRegistered ? (
            <p id='a4'>Thank you!</p>
          ) : (
            <>
              <p id='a3'>Show me how it looks</p>
              <p>
                <input
                  type='email'
                  name=''
                  placeholder='Your e-mail address'
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  id='a8'
                />
                <button id='a9' onClick={handleRegister}>
                  Register Now
                </button>
              </p>
            </>
          )}
          <p id='a11'>Free - No Spam - No Data Sharing</p>
        </div>

        <div className='right-header'>
          <img src={vector} alt='' id='vector' />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ChildComponent;
