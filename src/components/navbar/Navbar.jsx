import React from "react";
import styled from "styled-components";

import LeftNav from "./leftSection/LeftSection";
import RightNav from "./rightSection/RightNav";
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
  return (
    <Container>
      <LeftNav />
      <RightNav />
    </Container>
  );
};

export default Navbar;
