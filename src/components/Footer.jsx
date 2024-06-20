import React from 'react';
import Image from 'next/image';
import FooterLog from '../assets/images/Oxair-Logo.png'
const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
      <Image src={FooterLog} alt='Oxair' width={135} />
        <div className='row'>
          
          <div className='col-md-4'>
            <h5>Our Factory</h5>
              <address>
            Plot #T6, SIDCO Industrial Estate, <br />
            Kattur, Vellanoor post,<br />
            Chennai 600 062<br />
            </address>
          </div>
          <div className='col-md-4'></div>
          <div className='col-md-4'></div>
        </div>
        <span className="text-muted">&copy; 2024 Oxair</span>
      </div>
    </footer>
  );
};

export default Footer;
