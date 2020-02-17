import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./index.scss";

const Nav = () => {
  //   const [key, setKey] = useState("home");
  return (
    <Navbar className="bg-yellow" variant="dark">
      <Navbar.Brand href="#home" className="text-align-center flex-grow-1 m-0">
        {/* <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "} */}
        kookkook
      </Navbar.Brand>
    </Navbar>
  );
};

export default Nav;
