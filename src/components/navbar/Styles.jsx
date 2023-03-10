import styled from "styled-components"
import { FontSizes, Colors, Container, Effects, Bgradient} from "../../styles/Styles"

export const Logo = styled.p`
  font-size: ${FontSizes.cat};
  color: ${Colors.primary};
  font-weight: 800;
  @media (max-width: 900px){
    font-size: 20px;
  }
`

export const NavbarSection = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${Bgradient.preto};
  padding: 20px 80px;
  filter: ${Effects.sombra};
  
#mobile {
  display: none;
}

#navbar{
  z-index: 4;
}

#mobile i {
  color: ${Colors.white};
  align-items: center;
}

@media screen and (max-width: 768px) {
  padding: 20px 0;
  justify-content: space-around;
  #navbar {
    transition: 0.5s ease-in-out;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    top: 80px;
    right: 0px;
    width: 100%;
    height: 0;
    background: ${Colors.secondary};
    padding: 40px 0 0 0px;
  }
  #navbar li {
    overflow: hidden;  /* Hide the element content, while height = 0 */
    height: 0;
    opacity: 0;
    transition: height 0ms 400ms, opacity 400ms 0ms;
    margin-bottom: 50px;
  }
  #mobile {
    display: block;
  }
  #mobile i {
    font-size: 24px;
    cursor: pointer;
  }
  #navbar.active {
    height: 50vh;
    li {
      height: auto; opacity: 1;
    transition: height 0ms 0ms, opacity 600ms 0ms;
  }
  }
}

  a{
    cursor: pointer;
  }
`

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center; 

li {
  list-style: none;
  padding: 0 20px;
  position: relative;

  @media (max-width: 1000px){
    padding: 0 15px;
  }
  @media (max-width: 900px){
    padding: 0 10px;
  }
}

a {

  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  color: ${Colors.white};
  transition: 0.3s ease-in-out;

  @media (max-width: 1000px){
    font-size: 14px;
  }
  @media (max-width: 900px){
    font-size: 12px;
  }
  @media (max-width: 768px){
    font-size: 20px;
    padding-left: 20px;
  }
}

li a:hover,
li a.active {
  color: ${Colors.primary};
}

a:hover::after,
a.active::after {
  content: "";
  width: 30%;
  height: 2px;
  background: ${Colors.primary};
  position: absolute;
  bottom: -4px;
  left: 20px;

  @media (max-width: 768px){
    left: 30px;
  }
}
`

export const Icons = styled(Container)`
  width: 110px;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  /* filter: drop-shadow(0px 0px 5px ${Colors.primary}); */
  @media (max-width: 1000px){
    width: 90px;
  }

  @media (max-width: 600px){
    width: 70px;
  }

  a{
    height: 40px;
    width: 40px;

    @media (max-width: 1000px){
      height: 25px;
      width: 25px;
    }
  }
`

