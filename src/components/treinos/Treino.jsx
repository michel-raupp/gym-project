import React from "react";
// import TreinoBox from "./TreinoBox";
import iconimage1 from "../../assets/icons/muscle.png";
import iconimage2 from "../../assets/icons/diet.png";
import iconimage3 from "../../assets/icons/healthy-food.png";
import iconimage4 from "../../assets/icons/kettlebell.png";
import { Column } from "../../styles/Styles";
import { TreinoContainer, TreinoTitle, TreinoContainer2, ParagraphOrange, Treinos, Brilho } from "./Styles";

function TreinoBox(props) {
  return (
    <TreinoContainer>
      <Column>
        <img src={props.image} alt="" />
        <h3> {props.title} </h3>
        <ParagraphOrange> {props.subtitle} </ParagraphOrange>
      </Column>
    </TreinoContainer>
  );
}

function Treino() {
  return (
    <Treinos id="treinos">
      <TreinoTitle>
        READY TO ASSIST
        <span style={{ color: "rgb(248, 99, 0)", margin: "0 0 0 20px" }}>
          YOU
        </span>
      </TreinoTitle>
      <Brilho>
        <TreinoContainer2>
          <TreinoBox
            image={iconimage1}
            title="Strength"
            subtitle="Improve your strength!"
          />
          <TreinoBox
            image={iconimage2}
            title="Diet"
            subtitle="Lose weight, be lean!"
          />
          <TreinoBox
            image={iconimage3}
            title="Healthy"
            subtitle="Always be healthy!"
          />
          <TreinoBox
            image={iconimage4}
            title="HIT"
            subtitle="High Intensity Trainings!"
          />

        </TreinoContainer2>
        <ParagraphOrange style={{margin: '0 0px'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </ParagraphOrange>
      </Brilho >
    </Treinos>

  );
}

export default Treino;
