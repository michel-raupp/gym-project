import styled from "styled-components"
import { FontSizes, Colors, Container} from "../../styles/Styles"

export const Logo = styled.p`
  font-size: ${FontSizes.cat};
  color: ${Colors.primary};
  font-weight: 800;
  filter: drop-shadow(0px 0px 15px ${Colors.primary});

  @media (max-width: 900px){
    font-size: 20px;
  }
`

export const NavbarSection = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${Colors.secondary};
  padding: 20px 80px;
  filter: drop-shadow(0px 0px 5px ${Colors.black});
  
#mobile {
  display: none;
}

#mobile i {
  color: #fff;
  align-items: center;
}

@media screen and (max-width: 768px) {
  padding: 20px 0;
  justify-content: space-around;

  #navbar {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    top: 65px;
    right: -300px;
    width: 300px;
    height: 100vh;
    background: rgb(30, 30, 30);
    padding: 40px 0 0 10px;
    transition: 0.3s ease-in-out;
    
  }

  #navbar li {
    margin-bottom: 25px;
  }
  #mobile {
    display: block;
  }

  #mobile i {
    font-size: 24px;
    cursor: pointer;
  }

  #navbar.active {
    right: 0px;
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
  color: #fff;
  transition: 0.3s ease-in-out;

  @media (max-width: 1000px){
        font-size: 14px;
  }

  @media (max-width: 900px){
        font-size: 12px;
  }
}

li a:hover,
li a.active {
  color: rgb(248, 99, 0);
}

a:hover::after,
a.active::after {
  content: "";
  width: 30%;
  height: 2px;
  background: rgb(248, 99, 0);
  position: absolute;
  bottom: -4px;
  left: 20px;
}
`

export const Icons = styled(Container)`
  width: 110px;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  filter: drop-shadow(0px 0px 5px ${Colors.primary});

  @media (max-width: 1000px){
    width: 90px;
  }

  @media (max-width: 600px){
    width: 70px;
  }

  a{
    height: 40px;
    width: 40px;
    filter: invert();

    @media (max-width: 1000px){
      height: 25px;
      width: 25px;
    }
  }
`
