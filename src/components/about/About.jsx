import React from "react";

import img3 from "../../assets/imgs/img3-by-iqonic-design.png";
import img7 from "../../assets/imgs/img7-by-iqonic-design.png";
import img5 from "../../assets/imgs/img5-by-iqonic-design.png";

import {Circle, AboutIMGs, AboutTextos, GymIMG, GymIMG2, GymIMG3, AboutSection} from "./Styles"
 
function About() {
  return (
    <AboutSection id="about-section" >
      <AboutIMGs>
        <GymIMG src={img3}/>
        <GymIMG2 src={img7}/>
        <GymIMG3 src={img5}/>
        <Circle />
      </AboutIMGs>
      <AboutTextos>
        <h2>WHO WE ARE?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </AboutTextos>
    </AboutSection>
  );
}

export default About;
