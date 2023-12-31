import React from "react";
import styled from "styled-components";

import LeftNav from "./leftSection/LeftSection";
import RightNav from "./rightSection/RightNav";
import { useLocation } from "react-router-dom";


const Container = styled.div`
  height: 4rem;
  width: 100%;

  padding: 5px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  justify-content: space-between;
  padding: 12px 28px;
  box-sizing: border-box;
`;

const Navbar = () => {

const location=useLocation()

  return (
    <header>
      <Container >
        <LeftNav />
        <RightNav />
      </Container>
    </header>
  );
};

export default Navbar;
