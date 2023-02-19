import React, { useState, useEffect } from "react";
import { BsMoonStars } from "react-icons/bs";
import { AiOutlineHome, AiOutlineProject, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { BiMoon } from "react-icons/bi";
import { HiOutlineSun } from "react-icons/hi";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Images from "../images/Images";
import "./Styles/Header.scss";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
export default function Header({ backgroundColor = "transparent" }) {
  //logo scroll when active
  const activeStyle = {
    backgroundColor: "#61082b",
    padding: "7px",
    borderRadius: "50px",
    // color: "#61082b",
    // fontWeight: "500",
  };

  return (
    <>
      {/* <Navbar
        style={{ backgroundColor }}
        expand="lg"
        className={`fixed-top navbar`}
      >
        <Container className="d-flex flex-row">
          <Navbar.Brand href="#home">
            <img src={Images.av} alt="Logo" style={{ width: "7%" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                style={{ cursor: "pointer" }}
                className="nav-link  "
                aria-current="page"
                activeclassName="active"
                activeStyle={activeStyle}
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
              >
                Home
              </Link>
              <Link
                style={{ cursor: "pointer" }}
                className="nav-link mx-3"
                aria-current="page"
                activeclassName="active"
                activeStyle={activeStyle}
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
              >
                About
              </Link>
              <Link
                style={{ cursor: "pointer" }}
                className="nav-link "
                aria-current="page"
                activeclassName="active"
                activeStyle={activeStyle}
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
              >
                Projects
              </Link>
              <Link
                style={{ cursor: "pointer" }}
                activeStyle={activeStyle}
                className="nav-link mx-3"
                aria-current="page"
                activeclassName="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
              >
                Skills
              </Link>
              <Link
                style={{ cursor: "pointer" }}
                className="nav-link "
                aria-current="page"
                activeclassName="active"
                activeStyle={activeStyle}
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <nav className="navbar navbar-expand-lg fixed-bottom">
        {/* <a className="navbar-brand" href="#">
          Navbar
        </a> */}
        <div className="container">
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 navBarUl px-5 py-1 ">
              <li className="nav-item">
                <Link
                  style={{ cursor: "pointer" }}
                  className="nav-link  "
                  aria-current="page"
                  activeclassName="active"
                  activeStyle={activeStyle}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  <AiOutlineHome size={25} />
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  style={{ cursor: "pointer" }}
                  className="nav-link "
                  aria-current="page"
                  activeclassName="active"
                  activeStyle={activeStyle}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  <AiOutlineUser size={25} />
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  style={{ cursor: "pointer" }}
                  className="nav-link "
                  aria-current="page"
                  activeclassName="active"
                  activeStyle={activeStyle}
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  <AiOutlineProject size={25} />
                </Link>
              </li>

              <li className="nav-item px-4">
                <Link
                  style={{ cursor: "pointer" }}
                  activeStyle={activeStyle}
                  className="nav-link "
                  aria-current="page"
                  activeclassName="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  <GiSkills size={25} />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ cursor: "pointer" }}
                  className="nav-link "
                  aria-current="page"
                  activeclassName="active"
                  activeStyle={activeStyle}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  <BiMessageSquareDetail size={25} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
