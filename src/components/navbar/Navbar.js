import { Component } from "react";
// import "./NavbarStyles.css";
import wpp from "../../assets/icons/whatsapp.svg";
import insta from "../../assets/icons/instagram.svg";
import { Logo, NavbarSection, Menu, Icons } from "./Styles";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <NavbarSection>
          <Logo>THE GYM</Logo>

          <div>
            <Menu
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active" href="index.html">
                  HOME
                </a>
              </li>
              <li>
                <a href="#about-section">ABOUT</a>
              </li>
              <li>
                <a href="#treinos">TRAININGS</a>
              </li>
              <li>
                <a href="#planos">PLANS</a>
              </li>
              <li>
                <a href="#contact">CONTACT US</a>
              </li>
            </Menu>
          </div>

          <Icons> 
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img src={insta} className="navbar-icon" alt="" />{" "}
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
              <img src={wpp} className="navbar-icon" alt="" />{" "}
            </a>
          </Icons>

          <div id="mobile" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "bx bx-x" : "bx bx-menu bx"}
            ></i>
          </div>
        </NavbarSection>
      </>
    );
  }
}
export default Navbar;
