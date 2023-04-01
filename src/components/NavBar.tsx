import React from 'react';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
  position: sticky;
  z-index: 1;
  top: 0px;
  background-color: grey;
  opacity: 50%;
  height: 40px;
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
  font-weight: 900;
  display:inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: #b6ede8f0;
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