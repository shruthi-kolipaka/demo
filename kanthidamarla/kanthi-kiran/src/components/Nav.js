import React from 'react';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

export default function Navi() {
  return (
    <Navbar expand="md" className="navbar-dark bg-dark sticky-top">
      <Navbar.Brand href="/">Kanthi</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarresponsive" />
      <Navbar.Collapse id="navbarResponsive">
        <Nav as="ul" className="ml-auto ">
          <Nav.Item as="li">
            <Link to="/about" className="nav-link" activeClassName="active">
              About
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/life" className="nav-link" activeClassName="active">
              Life
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/projects" className="nav-link" activeClassName="active">
              Projects
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link
              to="/developers"
              className="nav-link"
              activeClassName="active"
            >
              Developers
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
