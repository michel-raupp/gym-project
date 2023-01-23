import React from "react";
import img3 from "../../assets/imgs/img2-by-iqonic-design.png";
import { PrimaryButton } from "../buttons/Buttons";
import { Title, Subtitle, ContainerIMG, HeaderStuffs } from "./Styles";
import { FlexStartAlign, BgOrange, BgBlack, BgContainer } from "../../styles/Styles";



function Header() {

  return (
    <div id="main">

      <HeaderStuffs>
        <FlexStartAlign>
          <Title primary>WELCOME TO</Title>
          <Title primary={false}>THE GYM!</Title>

          <Subtitle>Achieve a better version of you!</Subtitle>
          <a href="https://github.com/michel-raupp/gym-project" target="_blank" rel="noreferrer">
            <PrimaryButton>
              Acess GitHub
              <i class="bx bx-right-arrow-alt bx-md"></i>
            </PrimaryButton>
          </a>
        </FlexStartAlign>
        <ContainerIMG src={img3} />

        {/* DIV PARA FUNDO */}
        <BgContainer>
          <BgBlack />
          <BgOrange />
        </BgContainer>
      </HeaderStuffs>
    </div >
  );
}

export default Header;
