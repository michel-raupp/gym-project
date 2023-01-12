import styled from "styled-components"
import { Colors, Container, Effects, Column } from "../../styles/Styles"

export const PlanoContainers = styled(Column)`
  width: 300px;
  height: 600px;
  padding: 30px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid ${Colors.primary};
  color:${Colors.black};
  //filter: ${Effects.sombrinha};// 

  img{
    width: 30px;

    @media (max-width: 1050px){
      width: 25px;
    }
    @media (max-width: 900px){
      width: 20px;
    }
    @media (max-width: 800px){
      width: 30px;
    }
  }
  
  li{
    color:${Colors.black};
    display: flex;
    width: 220px;
    align-items: center;
    justify-content: space-between;

      @media (max-width: 1050px){
        font-size: 14px;
        width: 200px;
      }

      @media (max-width: 900px){
        font-size: 12px;
        width: 180px;
      }

      @media (max-width: 800px){
        font-size: 16px;
        width: 300px;

      }

      @media (max-width: 500px){
        width: 200px;
      }
  }

  @media (max-width: 1050px){
    width: 250px;
    height: 530px;
    padding: 20px;
  }

  @media (max-width: 900px){
    width: 220px;
    height: 490px;
  }

  @media (max-width: 800px){
    width: 100%;
    height: 100%;
    padding: 30px;
  }

  @media (max-width: 500px){
     
  }
`
export const PContainer = styled(Container)`
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 50px 0;
  
  @media (max-width: 1050px){
    gap: 20px;
    margin: 40px 0;
  }

  @media (max-width: 800px){
    width: 80%;
    flex-direction: column;
  }
`
export const PerMonth = styled.p`
  color: ${Colors.grey};
  margin: -20px 0 30px 0;
`

export const PlanosSection = styled(Column)`
align-items: center;
height: auto;
padding: 100px 0;

  h2{
    padding: 0 30px;
    @media (max-width: 1050px){
      font-size: 50px
    }
  }

  p{
    @media (max-width: 1050px){
      font-size: 14px
    }
  }


`
