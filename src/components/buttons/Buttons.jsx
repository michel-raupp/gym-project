import styled from "styled-components";
import { Colors, Button } from "../../styles/Styles";
import { FontSizes } from "../../styles/Styles";
// import * as React from "react";
// import { render } from "react-dom";
// import { motion } from "framer-motion";


//Botão do header

export const PrimaryButton = styled(Button)`
    background: none;
    color: ${Colors.white};
    margin-top: 80px;
    padding: 20px 50px;

    font-size: ${FontSizes.cat};
    filter: drop-shadow(0px 0px 5px ${Colors.primary});
    cursor: pointer;
  
  &:hover {
    /* <motion.button animate={{ scale: 1.2}} initial={{scale: 1}}/> */
    background:none;
    border-color:${Colors.white};
    filter: drop-shadow(0px 0px 5px ${Colors.primary});
    color: ${Colors.primary};
  }
  
  &:active {
    border-color: ${Colors.bright};
    color: ${Colors.bright};
  }
  
  i {
    margin-left: 5px;
  }
`


//Botão dos planos
export const SecondaryButton = styled(PrimaryButton)`
    background: ${Colors.primary};
    color: ${Colors.white};
    color: #fff;
    margin-top: 30px;
    padding: 10px 30px;
    border: 3px solid '${Colors.primary}';
    border-radius: 5px;
    filter: none;
    transition: 0.3s ease-in-out;
    font-size: ${FontSizes.cat};

    cursor: pointer;
  
  &:hover {
    filter: none;
    background: ${Colors.black};
    border-color: ${Colors.black};
    color: ${Colors.white};
  }
  
  &:active {
    background: ${Colors.white};
    border-color: ${Colors.black};
    color: ${Colors.black};
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
    background: ${Colors.primary};
    color: ${Colors.white};
    margin-top: 0px;
    padding: 10px 30px;
    border: 3px solid '${Colors.primary}';
    border-radius: 5px;
    width: 500px;
    transition: 0.3s ease-in-out;
    font-size: ${FontSizes.cat};
    filter: none;
    cursor: pointer;
  
  &:hover {
    filter: none;
    background: ${Colors.black};
    border-color: ${Colors.white};
    color: ${Colors.white};
  }
  
  &:active {
    background: ${Colors.white};
    border-color: ${Colors.white};
    color: ${Colors.black};
  }

  @media (max-width: 800px){
    font-size: ${FontSizes.cat};
    margin-top: 0px;
    padding: 10px 30px;
    width: 100%;
  }
  `
