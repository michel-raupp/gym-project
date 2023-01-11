import styled from "styled-components";
import { Container, Colors} from "../../styles/Styles";

export const AboutIMGs = styled(Container)`
  flex-direction: column;
  width: 500px;
  height: 500px;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2)); 

  @media (max-width: 1050px){
      margin: 80px 0 0 0;
  } 

  @media (max-width: 800px){
      margin: -80px 0 0 0;
  } 

  @media (max-width: 600px){
      margin: -80px 0 0 30px;
  } 
  
`
export const Circle = styled.div`
  z-index: -3;
  margin: -350px 0 0 25px;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background-color: ${Colors.primary};

  @media (max-width: 1050px){
      width: 220px;
      height: 220px;
      margin: -250px 0 0 -10px;
  } 
`

export const AboutTextos = styled(Container)`
  height: 400px;
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

  @media (max-width: 1000px){
    margin: 0 0 0 -50px;
    width: 450px;
  }
  
  @media (max-width: 800px){
      margin: -180px 0 0 0;
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
      width: 600px;
    }

    @media (max-width: 600px){
      font-size: 51px;
    }
  }

  p{
    @media (max-width: 600px){
      font-size: 14px;
      width: 330px; 
    }
  }
`

export const GymIMG = styled.img`
  transform: rotate(20deg);
  z-index: -2;
  width: 400px;
  height: 400px;
  margin: -190px 0 -10px 50px;

  @media (max-width: 1050px){
      width: 300px;
      height:300px;
      margin: -190px 0 37px 20px;
  }  
`
export const GymIMG2 = styled(GymIMG)`
  transform: rotate(50deg);
  margin: -190px 0 0 -180px;
  width: 300px;
  height: 300px;

  @media (max-width: 1050px){
      width: 230px;
      height: 230px;
  } 
`

export const GymIMG3 = styled(GymIMG)`
  transform: rotate(-30deg);
  margin: -190px 0 0 120px;
  width: 220px;
  height: 220px;

  @media (max-width: 1050px){
      width: 150px;
      height: 150px;
      margin: -150px 0 0 60px;
  } 
`

export const AboutSection = styled(Container)`
    margin: 280px 100px 60px 0px;

    @media (max-width: 1400px){
      margin: 350px 0px 60px 0px;
    }

    @media (max-width: 1000px){
      margin: 350px 80px 60px 0px;
    }

    @media (max-width: 800px){
      margin: 350px 0px 60px 0px;
      flex-direction: column;
    }
    
`