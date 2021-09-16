import { useState, useEffect } from "react";

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
      <div className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <img
                className="img-fluid"
                style={{ maxWidth: "220px;" }}
                src="/gss-logo-sq-transparent.png"
                alt="Game Streaming Square | Twitch TV"
              />
            </div>
            <div className="col-lg-3">
              <ul>
                <li>
                  <a href="">Recommended Streaming Setup</a>
                </li>
                <li>
                  <a href="">Capture Cards</a>
                </li>
                <li>
                  <a href="">Webcams</a>
                </li>
                <li>
                  <a href="">Microphones</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul>
                <li>
                  <a href="">Lighting</a>
                </li>
                <li>
                  <a href="">Headphones</a>
                </li>
                <li>
                  <a href="">Keyboards</a>
                </li>
                <li>
                  <a href="">Mice</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <a
                style={{ minWidth: "100px" }}
                className="btn btn-secondary"
                href="/blog"
              >
                Blog
              </a>
              <div className="d-flex mt-3">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
