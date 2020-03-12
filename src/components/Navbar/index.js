import React from "react";
import Navbar from "react-bootstrap/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Hamburger from "../../static/icon/hamburger.svg";
import ProfilePic from "../../static/icon/profile_pic.svg";
import "./index.scss";
import { slide as Menu } from "react-burger-menu";

const Nav = () => {
  //   const [key, setKey] = useState("home");
  const showSettings = e => {
    e.preventDefault();
  };
  return (
    <>
      <Menu
        right
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        customBurgerIcon={<img src={Hamburger} alt="hamburger" />}
      >
        <div className="d-flex flex-column align-items-end">
          <img src={ProfilePic} alt="profile_pic" className="mb-2" />
          <div className="text-name">Worker Name</div>
          <DropdownButton id="btn-dropdown" title="House A">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/">
          About
        </a>
        <a id="contact" className="menu-item" href="/">
          Contact
        </a>
        <a onClick={showSettings} className="menu-item--small" href="/">
          Settings
        </a>
      </Menu>
      <Navbar collapseOnSelect expand="lg" className="bg-yellow" variant="dark">
        <Navbar.Brand
          href="#home"
          className="text-align-center flex-grow-1 m-0"
        >
          kookkook
        </Navbar.Brand>
      </Navbar>
    </>
    // Another one
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#features">Features</Nav.Link>
    //       <Nav.Link href="#pricing">Pricing</Nav.Link>
    //       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">
    //           Another action
    //         </NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">
    //           Separated link
    //         </NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //     <Nav>
    //       <Nav.Link href="#deets">More deets</Nav.Link>
    //       <Nav.Link eventKey={2} href="#memes">
    //         Dank memes
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    // Another
    // <Navbar className="bg-yellow" variant="dark">
    //   <Navbar.Brand href="#home" className="text-align-center flex-grow-1 m-0">
    //     kookkook
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
    //   <Button classname="hamburger hamburger--collapse" type="button">
    //     <span class="hamburger-box">
    //       <span class="hamburger-inner"></span>
    //     </span>
    //   </Button>
    // </Navbar>
  );
};

export default Nav;
