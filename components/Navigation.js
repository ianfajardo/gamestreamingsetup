import {useState, useEffect} from 'react';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faTwitter, faInstagram);

export default function Navigation(props) {

  return (
    <div>
      <Navbar expand="lg" bg={props.bg} variant="dark">
        <Container>
          <Navbar.Brand className="text-primary font-weight-bolder" href="/">
            <img
              src="/game-streaming-setup-logo.png"
              className="nav-logo py-3"
              alt="Game Streaming Setup Twitch Webcam Microphone USB"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/best-streaming-setup-twitch">Streaming Gear</Nav.Link>
              <Nav.Link href="https://instagram.com/gamestreamingsetup">Computer Setups</Nav.Link>
            </Nav>
            <Form inline>
              <Button
                href="/posts"
                className="ml-2 text-white"
                variant="secondary"
              >
                Blog
              </Button>
            </Form>
            <a
              className="nav-social"
              href="https://www.instagram.com/gamestreamingsetup"
            >
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                size="lg"
                className="icon-size ml-auto"
              />
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
