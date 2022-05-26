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

export default function Footer(props) {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <img
                className="img-fluid"
                style={{ maxWidth: "220px" }}
                src="/gss-logo-sq-transparent.png"
                alt="Game Streaming Square | Twitch TV"
              />
            </div>
            <div className="col-lg-3">
              <ul>
                <li>
                  <a href="/blog/budget-friendly-guide-streaming-twitch-2022">
                    Twitch Budget-Friendly Guide 2022
                  </a>
                </li>
                <li>
                  <a href="/blog/live-streaming-career-tips-tricks-youtuber">
                    Live Streaming as a Career
                  </a>
                </li>
                <li>
                  <a href="/best-streaming-setup-twitch">
                    Best Streaming Twitch Gear
                  </a>
                </li>
                <li>
                  <a href="/blog/best-capture-card-under-100">
                    Best Capture Card Under $100
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul>
                <li>
                  <a href="/mice/corsair">
                    Corsair Gaming Mice
                  </a>
                </li>
                <li>
                  <a href="/best-streaming-setup-twitch">
                    Best Streaming Twitch Setup
                  </a>
                </li>
                <li>
                  <a href="https://streamlabs.com/goprime?promo=ianfajardo-d6c6-10">
                    The Best All-in-One Streaming Software
                  </a>
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
