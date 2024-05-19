// Header.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "./../images/logo.png";
import { FaBars } from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";

const HeaderContainer = styled.header`
  background: #fff;
  color: #000000;
  margin-right: 100px;
  height: 100px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: 80px;
  }
`;

const Logo = styled.img`
  height: 80px;
  margin-left: 20px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    height: 60px;
    margin-left: 10px;
    margin-top: 10px;
  }
`;

const CompanyInfo = styled.img`
  font-size: 28px;
  height: 80px;
  margin-left: 20px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: "Arial", sans-serif;
  margin: 0;
  margin-left: 10px; /* Add margin to the left */
  margin-top: 40px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-left: 5px;
    margin-top: 30px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    width: 70%;
    z-index: 1000;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
`;

const NavLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  margin: 0 10px;
  display: block;
  padding: 10px 0;

  &:hover {
    color: #db0003;
  }

  &.active {
    color: #db0003;
  }

  @media screen and (max-width: 400px) {
    margin: 8px;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 30px;
    right: 20px;
    z-index: 1100;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <div style={{ display: "flex" }}>
        {" "}
        <Logo src={logo} alt="Logo" />
        <Title>KD Electricals</Title>
      </div>

      <Nav isOpen={isOpen}>
        <NavLink
          to="/"
          className={location.pathname === "/" ? "active" : ""}
          onClick={toggleMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={location.pathname === "/products" ? "active" : ""}
          onClick={toggleMenu}
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
          onClick={toggleMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
          onClick={toggleMenu}
        >
          Contact
        </NavLink>
      </Nav>
      <MenuIcon onClick={toggleMenu}>
        <FaBars />
      </MenuIcon>
    </HeaderContainer>
  );
};

export default Header;
