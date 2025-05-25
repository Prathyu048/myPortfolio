import React from "react";
import Skills from "./Skills";
import Contact from "./Contact";
import Project from "./Project";
import Navbar from "./Navbar";
import "./Home";
const about = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutbg">
      <section id="about">
        <div className="bckg">
          <div className="aboutsec">
            <h3>LET ME INTRODUCE MY SELF</h3>
            <h2>About me</h2>
            <h4>
              I am enthusiastic software developer. My passion towards computer
              science made me as a frontend developer. Tasting latest
              technologies and improving knowledge on various domains in IT are
              my hobbies
            </h4>
          </div>
          <div className="education">
            <h2 id="educate">Education</h2>
            <h4>
              > I am currently pursuing my B.Tech 4th year in Computer Science
              and Engineering from Annamacharya Institute Of Technology And
              Sciences
            </h4>
            <h4>
              > I Completed my Intermediate (MPC) at Sri Nalanda Jr
              College,Rajampet
            </h4>
            <h4>> I Completed SSC at Sri Prathyusha High School,Pullampet</h4>
          </div>
        </div>
      </section>
      <section id="portfolio">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      </div>
    </div>
  );
};
export default about;
