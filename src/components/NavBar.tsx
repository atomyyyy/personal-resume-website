import React from 'react';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
  position: sticky;
  z-index: 1;
  top: 0px;
  background-color: grey;
  opacity: 50%;
  height: 50px;
  width: 100%;
  display:inline-flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
`;

const ButtonWrapper = styled.div`
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  color: white;
  display:inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    font-weight: 900;
  }
`


const NavBar = () => (
  <NavBarWrapper>
    <ButtonWrapper onClick={() => window.location.assign('/#about')}>
      About
    </ButtonWrapper>
  </NavBarWrapper>
)

export default NavBar;