import styled from "styled-components";
import { Colors, Container, Effects, Paragraph, Column, Bgradient} from "../../styles/Styles"

export const TreinoContainer = styled(Container)`
    flex-direction: column;
    width: 220px;
    border: 3px;
    border-radius: 5px;
    padding: 40px 40px;
    border: 3px;
    color:${Colors.primary};
    background: ${Colors.white};
    filter: ${Effects.sombrinha};

    img {
        width: 100px;
        
        @media (max-width: 1050px){
            width: 80px;
        }

        @media (max-width: 800px){
            width: 100px;
        }

        @media (max-width: 600px){
            width: 150px;
        }
        @media (max-width: 500px){
            width: 50%;
        }
    }

    h3{
    margin: 30px 0 0 0;

        @media (max-width: 1050px){
            font-size: 20px;
        }

        @media (max-width: 800px){
            font-size: 24px;
        }

        @media (max-width: 600px){
            margin: 20px 0 0 0;
        }
    }

    @media (max-width: 1050px){
        width: 200px;
        padding: 35px 35px;
    }

    @media (max-width: 900px){
        width: 175px;
        padding: 30px 30px;
    }

    @media (max-width: 800px){
        width: 200px;
        padding: 35px 35px;
    }

    @media (max-width: 600px){
        width: 100%;
        padding: 30px 30px;
    }

`

export const TreinoTitle = styled.h2`
  
    color: ${Colors.white};
    width: 80%;
    line-height: 70px;

    @media (max-width: 1400px){
        font-size: 60px;
    }

    @media (max-width: 1050px){
        font-size: 50px;
    }

    @media (max-width: 800px){
        font-size: 72px;
    }

    @media (max-width: 600px){
        line-height: 50px;
        width: 70%;
        font-size: 51px;
        margin: 0 20px 20px 20px;
    }

    @media (max-width: 480px){
        line-height: 50px;
        width: 90%;
        font-size: 40px;
        margin: 0 20px 0px 20px;
    }

`

export const TreinoContainer2 = styled.div`
  margin: 50px 0 50px 0;
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  width: 950px;

  @media (max-width: 1050px){
        width: 850px;
        margin: 30px 0 30px 0;
  }

  @media (max-width: 900px){
        width: 750px;
  }

  @media (max-width: 800px){
        margin: 30px 0 30px 0;
        width: 450px;
        height: auto;
        gap: 50px;
        flex-wrap: wrap;
  }

  @media (max-width: 600px){
        width: 400px;
        gap: 30px;
  }

  @media (max-width: 500px){
        width: 80%;
        gap: 15px;
  }

`
export const ParagraphOrange = styled(Paragraph)`
    margin: 10px 0 0 0;
    color: ${Colors.black};
`


export const Treinos = styled(Column)`
  height: 700px;
  margin: 0;
  background: ${Bgradient.laranja};

  @media (max-width: 800px){
    height: 1100px;
  }

  @media (max-width: 600px){
    height: 1800px;
  }

  @media (max-width: 500px){
    height: auto;
    padding: 100px 0;
    justify-content: flex-start;
  }


`

export const Brilho = styled(Column)`
    filter: ${Effects.sombra};
`