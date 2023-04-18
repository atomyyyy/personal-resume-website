import React, {
  useState,
  useEffect
} from 'react';
import styled from 'styled-components';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const NavBarWrapper = styled.div`
  position: sticky;
  z-index: 1;
  top: 0px;
  background-color: grey;
  opacity: 80%;
  height: 40px;
  width: 100%;
  display:inline-flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
`;

const ButtonWrapper = styled(ToggleButton)`
  height: 40px;
  &.MuiToggleButton-root {
    border: none;
    color: #d8d2ed;
    &.Mui-selected {
      color: #d8d2ed;
      font-weight: 900;
      border-bottom: 5px solid #d8d2ed;
      background-color: inherit;
    }
  }
  &:hover {
    color: #d8d2ed;
    font-weight: 900;
  }
`

type navigationConfig = {
  name: string,
  id: string | null,
  display: boolean,
  height: number
}

const NavBar = (props: { data: navigationConfig[] }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeSection = props.data.reduce<[number, string | null]>((agg, cur) => {
    const [prevY, prevSection] = agg;
    return [
      prevY + cur.height,
      scrollPosition > prevY ? cur.id : prevSection
    ]
  }, [0, null]);

  return (
    <NavBarWrapper>
      <ToggleButtonGroup
        value={activeSection[1]}
        exclusive
      >
        {
          props.data.filter(data => data.display).map(data => (
            <ButtonWrapper
              key={`${data.name}`}
              value={`${data.id}`}
              onClick={() => window.location.assign(`/#${data.id}`)}
            >
              {data.name}
            </ButtonWrapper>
          ))
        }
      </ToggleButtonGroup>
    </NavBarWrapper>
  );
}

export default NavBar;