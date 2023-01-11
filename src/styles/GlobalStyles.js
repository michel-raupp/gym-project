import { createGlobalStyle } from 'styled-components';
import { Colors, Effects, FontSizes } from './Styles';

const GlobalStyle = createGlobalStyle`
  *{
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h2{
    font-size: ${FontSizes.horse};
  }
  h3{
    font-size: ${FontSizes.cat};
  }

  hr{
  display: block;
  height: 1px;
  border-top: 1px solid '${Colors.grey}';
  margin: 5px 0;
  }


  ::-webkit-scrollbar{
    width: 20px;
  }
  ::-webkit-scrollbar-track{
    background-color: ${Colors.secondary};
  }
  ::-webkit-scrollbar-thumb{
    background: ${Colors.primary};
    border: solid 2px ${Colors.secondary};;
    border-radius: 25px;
    transition: 0.5s ease-in-out;
  }

  ::-webkit-scrollbar-thumb:hover{
    transition: 0.5s ease-in-out;
    background: ${Colors.primary};
  }
`

export default GlobalStyle;