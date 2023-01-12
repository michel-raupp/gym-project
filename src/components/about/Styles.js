import styled from "styled-components";
import { Container, Bgradient} from "../../styles/Styles";

export const AboutIMGs = styled(Container)`
  flex-direction: column;
  height: auto;
  width: 500px;


  @media (max-width: 1050px){
      margin: 80px 0 0 0;
  } 

  @media (max-width: 800px){
    margin: 0px 0 150px 0px;
  } 

  @media (max-width: 600px){
      margin: 0px 0 150px 0px;
  } 

  @media (max-width: 500px){
      width: 100%;
  } 
  
`

export const GymIMG = styled.img`
//kettlebell of 10kg

  transform: rotate(320deg);
  z-index: -2;
  width: 170px;

  margin: -190px 0 50px 80px;

  @media (max-width: 1050px){
      width: 130px;

      margin: -190px 0 80px 20px;
  }
`
export const GymIMG2 = styled(GymIMG)`
  z-index: 2;
  transform: rotate(30deg) scaleX(-1);
  margin: -190px 0 0 -130px;
  width: 280px;
  height: 280px;

  @media (max-width: 1050px){
      width: 220px;
      height: 220px;
  } 


`

export const GymIMG3 = styled(GymIMG)`
//balance

  transform: rotate(-30deg);
  margin: -190px 0 0 150px;
  width: 200px;
  height: 200px;

  @media (max-width: 1050px){
      width: 150px;
      height: 150px;
      margin: -150px 0 0 90px;
  } 


`


export const Circle = styled.div`
  z-index: -3;
  margin: -320px 0 -100px 25px;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: ${Bgradient.laranja};

  @media (max-width: 1050px){
      width: 220px;
      height: 220px;
      margin: -250px 0 -100px -10px;
  } 

  @media (max-width: 800px){
      margin: -250px 0 0px 0px;
  } 
`

export const AboutTextos = styled(Container)`
  
  width: 500px;
  margin: -30px 0 0 0;
  text-align: left;
  flex-direction: column;

  @media (max-width: 1400px){
    align-items: baseline;
  }

  @media (max-width: 1200px){
      width: 400px; 
  }

  @media (max-width: 1050px){
    margin: 0 0 0 -50px;
    width: 450px;
  }
  
  @media (max-width: 800px){
      margin: -120px 0 0 0;
      width: 90%;
      align-items: center;
      text-align: center;
  } 

  h2{
    @media (max-width: 1400px){
      font-size: 60px;
      margin-bottom: 10px;
    }

    @media (max-width: 1200px){
      font-size: 50px;
      margin-bottom: 10px;
    }

    @media (max-width: 800px){
      font-size: 72px;
      line-height: 70px;
      margin-bottom: 30px;
    }

    @media (max-width: 600px){
      margin-bottom: 10px;
      font-size: 51px;
    }

    @media (max-width: 450px){
      font-size: 40px;
      line-height: 50px;
      margin-bottom: 20px;
    }
  }

  p{
    @media (max-width: 600px){
      font-size: 14px;
      width: 100%; 
    }
  }
`



export const AboutSection = styled(Container)`
    margin: 280px 100px 60px 0px;
    padding: 100px 0;


    @media (max-width: 1400px){
      margin: 350px 0px 60px 0px;
    }

    @media (max-width: 1000px){
      margin: 350px 80px 60px 0px;
    }


    @media (max-width: 800px){
      margin: 380px 0px 0px 0px;
      flex-direction: column;
      justify-content: center;
    }
    
`