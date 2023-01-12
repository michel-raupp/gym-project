import styled from "styled-components";
import { Colors, Bgradient } from "../../styles/Styles";
import { FontSizes } from "../../styles/Styles";
// import * as React from "react";
// import { render } from "react-dom";
// import { motion } from "framer-motion";


//Botão do header

export const PrimaryButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    border: 3px solid ${Colors.primary};
    border-radius: 5px;
    background: ${Bgradient.laranja};
    
    margin-top: 80px;
    padding: 20px 50px;

    color: ${Colors.white}; 
    font-size: ${FontSizes.cat};
    font-weight: 300;

    transition: 0.5s;
    background: ${Bgradient.laranja};
    cursor: pointer;

    &:hover{
      background: ${Bgradient.cinza};
    border-color: ${Colors.white};
    color: ${Colors.white};
  }
  
  &:active {
    background: ${Colors.white};
    border-color: ${Colors.white};
    color: ${Colors.black};
  }
  
  i {
    margin-left: 5px;
  }
`


//Botão dos planos
export const SecondaryButton = styled(PrimaryButton)`
    margin-top: 30px;
    padding: 10px 30px;
    
  &:hover {
    background: ${Bgradient.cinza};
    color: ${Colors.white};
    border-color: ${Colors.black};
  }
  
  &:active {
    border-color: ${Colors.black};
  }

  @media (max-width: 1050px){
    font-size: 20px;
    margin-top: 20px;
  }

  @media (max-width: 900px){
    font-size: 18px;
    margin-top: 15px;
    padding: 8px 23px;
  }
  
  @media (max-width: 800px){
    font-size: ${FontSizes.cat};
    margin-top: 30px;
    padding: 10px 30px;
  }

`

//botão do contato/footer
export const TerciaryButton = styled(PrimaryButton)`
    margin-top: 0px;
    padding: 10px 30px;
    width: 500px;

  @media (max-width: 800px){
    font-size: ${FontSizes.cat};
    margin-top: 0px;
    padding: 10px 30px;
    width: 100%;
  }
  `
