import React from "react";
//import { Navbar, Nav, Container } from "reactstrap";
import Image from "next/image";
import Logo from "/public/images/Oxair-Logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AboutOxair from "@/pages/aboutOxair";
import ButtonComponent from "./Buttons";


const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home"> <Image src={Logo} alt="" width={221} height={56} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <NavDropdown title="Products" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">High Performance Models</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Super Saver Models
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Oxair Pressure Vessels</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Other Products
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resources" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#">Understanding Our Products</NavDropdown.Item>
                <NavDropdown.Item href="#">
                FAQs
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Company and Industry News</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/aboutOxair">About Us</Nav.Link>
              <Nav.Link href="/contactUs">
              <ButtonComponent label="Get Quote">Get Quote</ButtonComponent>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};


export default Header;
