import styled from "styled-components";
import { Container, Colors, Column, Bgradient } from "../../styles/Styles";

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
    h2{
        color: ${Colors.primary};
        margin-bottom: 50px;

        @media (max-width: 600px){
            font-size: 50px;
            line-height: 50px;
        }

        @media (max-width: 480px){
      font-size: 40px
    }


    @media (max-width: 480px){
      font-size: 40px
    }
    }

    input{
        border-radius: 5px;
        width: 500px;
        max-width: 100%;
        padding: 10px;
        border: 0;
        margin: -5px;
        
    }

    textarea{
        border-radius: 5px;
        width: 500px;
        max-width: 100%;
        padding: 10px;
        height: 100px;
        margin: -5px 0 10px 0;
        border: 0;
        }

        @media (max-width: 600px){
            width: 90%;
        }

    i{
        margin-left: 5px;
    }
`
export const Footer = styled(Container)`
  bottom: 0px;
  background: ${Bgradient.cinza};
  font-size: 16px;
  font-weight: 200;
  color: ${Colors.grey};
  height: auto;
  width: 100%;
  padding: 20px;
`

export const FormsSection = styled(Column)`
    height: auto;
    background: ${Bgradient.preto};
    width: 100%;
    padding: 100px 10px;
`