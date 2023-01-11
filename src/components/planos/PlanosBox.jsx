import React from "react";
import { Column, Container } from "../../styles/Styles";
import { SecondaryButton } from "../buttons/Buttons";
import { PerMonth, PlanoContainers } from "./Styles";

function PlanosBox(props) {
    return (
      <PlanoContainers>
        {/* Column is a container with flexbox, with "flex-direction: column" */}
        <Column>
          <h3 style={{margin: "0 0 -10px 0"}}> {props.p_title} </h3>
          <h3> {props.plano_preco} </h3>
          <PerMonth>per month</PerMonth>
          <Container>
          <ul>
            <hr />
            <li>
              <img src={props.icon1} alt="" className="check-icon" />
              <p> {props.p_subtitle1} </p>
            </li>
            <hr />
            <li>
              <img src={props.icon2} alt="" className="check-icon" />
              <p> {props.p_subtitle2} </p>
            </li>
            <hr />
            <li>
              <img src={props.icon3} alt="" className="check-icon" />
              <p> {props.p_subtitle3} </p>
            </li>
            <hr />
            <li>
              <img src={props.icon4} alt="" className="check-icon" />
              <p> {props.p_subtitle4} </p>
            </li>
            <hr />
            <li>
              <img src={props.icon5} alt="" className="check-icon" />
              <p> {props.p_subtitle5} </p>
            </li>
            <hr />
          </ul>
          </Container>
        </Column>
  
        <SecondaryButton>
            COMPRAR
          <i class="bx bx-right-arrow-alt bx-md"></i>
          </SecondaryButton>
      </PlanoContainers>
    );
  }

export default PlanosBox;
