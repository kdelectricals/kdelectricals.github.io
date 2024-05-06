// Header.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./../images/logo.png";

const HeaderContainer = styled.header`
  background: #fff;
  color: #000000;
  padding: 10px 20px;
  height: 100px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 100px;
  margin-left: 20px;
`;

const Nav = styled.nav`
  margin-left: auto;
  margin-right: 40px;
`;

const NavLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  margin-left: 35px;
  margin-top: 20px;

  &:hover {
    text-decoration: none;
    color: #db0003; /* Change color on hover to your theme color */
  }

  &.active {
    color: #db0003; /* Change color when link is active (selected) */
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  font-family: "Arial", sans-serif;
  color: #000000;
  max-width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none; /* Disable text selection */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <Title> KD Electricals</Title>
      <Nav>
        <NavLink activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/products">
          Products
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="active" to="/contact">
          Contact
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
