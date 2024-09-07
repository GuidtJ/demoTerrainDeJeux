import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="mt-4">
      <div className="social-media">
        <a href="https://github.com/GuidtJ" target="_blank" rel="noopener noreferrer" title="Facebook"><i className='bx bxl-facebook'></i></a>
        <a href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-guidt-3b915725a/" target="_blank" rel="noopener noreferrer" title="Instagram"><i className='bx bxl-instagram-alt'></i></a>
      </div>
      <div className="footer-text">
        <p>Copyright &copy; 2023 by Guidt Jérôme | All Rights Reserved.</p>
      </div>
      <div className="footer-iconTop">
        <Link to="#home"><i className='bx bx-up-arrow-alt'></i></Link>
      </div>
    </footer>
  );
}

export default Footer;