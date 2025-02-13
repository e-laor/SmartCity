import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaBars } from 'react-icons/fa';
import '../Style.css'; // Ensure this file doesn't conflict with the styled-components
import logoImage from '../HIT.png';

const MainHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleMapClick = (e, mapDivId) => {
    e.preventDefault();
    sessionStorage.setItem('mapDivId', mapDivId);
    window.location.href = '/';
  };

  return (
    <Container>
      <CustomNavBar>
        <LogoAndTitle href='/'>
          <Logo src={logoImage} alt='Smart Campus Logo' />
          <Title>Smart Campus</Title>
        </LogoAndTitle>
        <MenuIcon onClick={handleMenuClick}>
          <FaBars />
        </MenuIcon>
        <MenuLinks show={showMenu}>
          <ul>
            <MenuItem>
              <a href='Staff'>Staff</a>
            </MenuItem>
            <MenuItem>
              <a href='Students'>Students</a>
            </MenuItem>
            <MenuItem>
              <a href='Partners'>Partners</a>
            </MenuItem>
            <MenuItem>
              <a href='Contact'>Contact Us</a>
            </MenuItem>
            <MenuItem>
              <a href='News'>News</a>
            </MenuItem>
            <MenuItem>
              <a href='/' onClick={(e) => handleMapClick(e, 'hitMap')}>
                HIT 3D Map
              </a>
            </MenuItem>
            <MenuItem>
              <a href='Login'>Login</a>
            </MenuItem>
          </ul>
        </MenuLinks>
      </CustomNavBar>
    </Container>
  );
};

export default MainHeader;

const bounceAnimation = keyframes`
  16.65% {
    transform: translateY(8px);
  }
  33.3% {
    transform: translateY(-6px);
  }
  49.95% {
    transform: translateY(4px);
  }
  66.6% {
    transform: translateY(-2px);
  }
  83.25% {
    transform: translateY(1px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(48 48 48);
  padding: 5px 20px;
  border-bottom: 1px solid #dddddd;
  position: sticky;
  top: 0px;
  z-index: 1;
  text-align: center;
  color: white;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    color: white; /* White text color */
  }
`;

const CustomNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LogoAndTitle = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none; /* Ensure the link has no underline */

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 60px; /* Adjust the size as needed */
  height: auto;
  margin-bottom: 5px;
  margin-right: 10px;
`;

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: white; /* White text color */
  margin-left: 10px;
  margin: 0; /* Reset margin to ensure alignment with Logo */

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    display: block;
    font-size: 24px;
  }
`;

const MenuLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 2em; /* Match the left and right margins */
    margin-right: 2em;
  }

  a {
    color: white; /* White text color */
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    transition: color 0.5s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    display: ${({ show }) => (show ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgb(48, 48, 48);
    padding: 20px;
  }
`;

const hoverableStyles = css`
  display: inline-block;
  backface-visibility: hidden;
  vertical-align: middle;
  position: relative;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transform: translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;

  &:before {
    position: absolute;
    pointer-events: none;
    z-index: -1;
    content: '';
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 0.35) 0%,
      rgba(255, 255, 255, 0) 80%
    );
    transition-duration: 0.3s;
    transition-property: transform, opacity;
  }

  &:hover,
  &:active,
  &:focus {
    transform: translateY(-5px);

    &:before {
      opacity: 1;
    }
  }
`;

const MenuItem = styled.li`
  ${hoverableStyles}
`;
