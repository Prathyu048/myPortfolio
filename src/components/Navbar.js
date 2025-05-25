import React from 'react'
import { Link } from "react-scroll";

const Navbar = () => {
  const navigateToHome = () => {
    window.location.href = 'Home.js';
  };
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
        }
      };
  return (
    <div>
        <header>
                <nav className="mobile-nav">
                  <ul>
                    <li>
                      <Link onClick={navigateToHome}>Home</Link>
                    </li>
                    <li>
                      <Link onClick={() => scrollToSection("about")}>About</Link>
                    </li>
                    <li>
                      <Link onClick={() => scrollToSection("portfolio")}>
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => scrollToSection("skills")}>Skills</Link>
                    </li>
                    <li>
                      <Link onClick={() => scrollToSection("contact")}>Contact</Link>
                    </li>
                  </ul>
                </nav>
              </header>
        
      
    </div>
  )
}

export default Navbar
