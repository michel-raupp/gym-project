import React from "react";

import img3 from "../../assets/imgs/img3-by-iqonic-design.png";
import img7 from "../../assets/imgs/img7-by-iqonic-design.png";
import img5 from "../../assets/imgs/img5-by-iqonic-design.png";

import { Circle, AboutIMGs, AboutTextos, GymIMG, GymIMG2, GymIMG3, AboutSection } from "./Styles"

function About() {
  return (
    <AboutSection id="about-section" >
      <AboutIMGs>
        <GymIMG src={img3} />
        <GymIMG2 src={img7} />
        <GymIMG3 src={img5} />
        <Circle />
      </AboutIMGs>
      <AboutTextos>
        <h2>WHO WE ARE?</h2>
        <p>
          This project was my first project developing with React.JS and Styled Components. I took some images/icons from Unicons and Flaticons only for this project. 
          The purpose of this site was to create a simple landing page, with buttons, a contact form and a complete responsive menu.   
        </p>
      </AboutTextos>
    </AboutSection>
  );
}

export default About;
