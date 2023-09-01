import React from 'react';
import './Footer.css';
import instagram from '../Images/instagram.png';
import linkedin from '../Images/linkedin.png';

function Footer() {
  return (
    <div className='footer'>
      <div className='left-footer'>
        <ul>
          <li>Prompt Generator</li>
          <li>Dweep Daily</li>
          <li>All Contributors</li>
          <li>Your data on Dweep.io</li>
          <li>Contribute to Dweep</li>
        </ul>
      </div>

      <div className='right-footer'>
        
        <ul>
        <li>Dweep.io</li>
          <li>Made with love in India</li>
          <li>
            <img src={instagram} id='a7' alt='Instagram' />
            <img src={linkedin} id='a7' alt='LinkedIn' />
          </li>
          <li>hello@dweep.io</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
