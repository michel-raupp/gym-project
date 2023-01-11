import styled from "styled-components";
import { Container, Colors, Column } from "../../styles/Styles";

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
  background: rgb(11, 12, 14);
  font-size: 16px;
  font-weight: 200;
  color: ${Colors.grey};
  height: 70px;
  width: 100%;
  padding: 50px;
`

export const FormsSection = styled(Column)`
    height: auto;
    background-color: ${Colors.black};
    width: 100%;
    padding: 100px 10px;
`