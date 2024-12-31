import React from 'react'

const Contact = () => {
  return (
    <div>
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Me</h3>
          <p>I am a Frontend Developer with a passion for building beautiful and functional websites.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: bprathyu04@gmail.com</li>
            <li>Phone: +91 9640640531</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Me</h3>
          <ul className="social-media">
            <li><a href="https://github.com/Prathyu048" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a></li>
            <li><a href="https://linkedin.com/in/Prathyusha Budarapu" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
            
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Prathyusha portfolio. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Contact;
