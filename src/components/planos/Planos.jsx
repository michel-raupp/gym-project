import React from "react";
import PlanosBox from "./PlanosBox";
import check1 from "../../assets/icons/x.png";
import check2 from "../../assets/icons/check.png";
import { PContainer } from "./Styles";
import { PlanosSection } from "./Styles";

function Planos() {
  return (
    <PlanosSection id="planos">
      <h2 style={{ color: "rgb(248, 99, 0)"}}>
        START YOUR{" "}
        <span style={{ color: "#000", margin: "0 0 0 10px" }}>JOURNEY</span>
      </h2>
      <PContainer>
        <PlanosBox 
          p_title="BASIC"
          plano_preco={
            <h3 style={{ fontSize: "24px", width: "221px" }}>
              $<span style={{ fontSize: "96px" }}>7</span>
              <span style={{ fontSize: "16px" }}>.90</span>
            </h3>
          }
          icon1={check2}
          p_subtitle1="Personal Workout"
          icon2={check2}
          p_subtitle2="Personal Diet"
          icon3={check1}
          p_subtitle3="PRO Trainings"
          icon4={check1}
          p_subtitle4="Online Classes"
          icon5={check1}
          p_subtitle5="Professional Support"
        />

        <PlanosBox style={{ backgroundColor: "rgb(248, 99, 0)"}}
          p_title="PLUS"
          plano_preco={
            <h3 style={{ fontSize: "24px", width: "221px" }}>
              $<span style={{ fontSize: "96px" }}>12</span>
              <span style={{ fontSize: "16px" }}>.90</span>
            </h3>
          }
          icon1={check2}
          p_subtitle1="Personal Workout"
          icon2={check2}
          p_subtitle2="Personal Diet"
          icon3={check2}
          p_subtitle3="PRO Trainings"
          icon4={check2}
          p_subtitle4="Online Classes"
          icon5={check1}
          p_subtitle5="Professional Support"
        />

        <PlanosBox
          p_title="PREMIUM"
          plano_preco={
            <h3 style={{ fontSize: "24px", width: "221px" }}>
              $<span style={{ fontSize: "96px" }}>19</span>
              <span style={{ fontSize: "16px" }}>.90</span>
            </h3>
          }
          icon1={check2}
          p_subtitle1="Personal Workout"
          icon2={check2}
          p_subtitle2="Personal Diet"
          icon3={check2}
          p_subtitle3="PRO Trainings"
          icon4={check2}
          p_subtitle4="Online Classes"
          icon5={check2}
          p_subtitle5="Professional Support"
        />
      </PContainer>
      <p style={{width: '90%'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
    </PlanosSection>
  );
}

export default Planos;
