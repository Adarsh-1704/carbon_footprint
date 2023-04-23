import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.scss";
import navLogo from "../navbarLogo.png";
function NavBar() {
  return (
    <Navbar className="navbar" sticky="top">
      <Container>
        <Navbar.Brand>
          <img src={navLogo} style={{height:"35px"}} alt="navLogo" />
          FootprintFinder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navs">
            <Nav.Link href="/carbon_footprint">Home</Nav.Link>
            <Nav.Link href="/carbon_footprint/calculator">Calculator</Nav.Link>
            <Nav.Link href="/carbon_footprint/aboutus">About Us</Nav.Link>
            <Nav.Link href="/carbon_footprint/contact">Contact</Nav.Link>

            <NavDropdown title="Information" id="basic-nav-dropdown">
              <NavDropdown.Item href="/carbon_footprint/information/deforestaion">
                Deforestation
              </NavDropdown.Item>
              <NavDropdown.Item href="/carbon_footprint/information/sustainable-development">
                Sustainable Development Goals
              </NavDropdown.Item>
              <NavDropdown.Item href="/carbon_footprint/information/climate">
                Climate Changes
              </NavDropdown.Item>
              <NavDropdown.Item href="/carbon_footprint/information/references">
                References
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
