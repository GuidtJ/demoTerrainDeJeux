import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="logo ms-5 me-4" src="/img/logo3.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarColor02" />
        <Navbar.Collapse id="navbarColor02">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/catalogue">Les jeux à la location</Nav.Link>
            <Nav.Link as={Link} to="/pochette">Pochettes surprise</Nav.Link>
            <Nav.Link as={Link} to="/louer">Comment louer ?</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contactez-nous</Nav.Link>
            <Nav.Link as={Link} to="/questions">Questions fréquentes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;