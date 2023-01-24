import styled from "styled-components"
import { FontSizes, Colors, Container} from "../../styles/Styles"

export const Title = styled.h1`
    font-size: ${props => props.primary ? '72px' : `${FontSizes.giraffe}`};
    color: ${props => props.primary ? `${Colors.white}` : `${Colors.primary}`};
    font-weight: 800;
    margin-top: ${props => props.primary ? 0 : '-30px'};

    @media (max-width: 1400px){
        font-size: ${props => props.primary ? `60px` : `${FontSizes.hippo}`};
        margin-bottom: ${props => props.primary ? 0 : '-30px'};
    }
    @media (max-width: 1050px){
        font-size: ${props => props.primary ? `51px` : `${FontSizes.horse}`};
    }
    @media (max-width: 800px){
        font-size: ${props => props.primary ? `72px` : `${FontSizes.giraffe}`};
    }
    @media (max-width: 600px){
        font-size: ${props => props.primary ? `51px` : `${FontSizes.horse}`};
    }
    @media (max-width: 370px){
        font-size: ${props => props.primary ? `40px` : `55px`};
    }
`
export const Subtitle = styled.p`
    color: ${Colors.grey};
    font-weight: 300;
    font-size: 30px;
    margin: 30px 0 0 0;

    @media (max-width: 1400px){
        font-size: ${FontSizes.cat};
    }

    @media (max-width: 1050px){
        font-size: 21px;
        margin: 30px 0 -40px 0;
    }

    @media (max-width: 800px){
        font-size: ${FontSizes.wolf};
        margin: 30px 0 -40px 0;
    }

    @media (max-width: 600px){
        font-size: ${FontSizes.rat};
    }
`

export const ContainerIMG = styled.img`
  height: 100%;
  width: 700px;
  margin-left: 50px;
  z-index: -1;
  position: relative;


  @media (max-width: 1400px){
    width: 500px;
  }

  @media (max-width: 1050px){
    width: 350px;
  }

  @media (max-width: 800px){
     display: none;
    }
`
export const HeaderStuffs = styled(Container)`
    margin-top: 120px;
`
