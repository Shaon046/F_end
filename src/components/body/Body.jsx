import React from "react";
import styled from "styled-components";
import ProductNavigator from "./productNavigator/ProductNavigator";
import Crousel from "./crousel/Crousel";
import BestBuy from "./bestBuy/BestBuy";

const BodyContainer = styled.div`
  height: fit-content;
  width: 100%;
  background-color: #f1f2f4;
  padding: 5px 0 5px 0;
`;

const Body = () => {
  return (
    <BodyContainer>
      <ProductNavigator />
      <Crousel />

      <BestBuy />
    </BodyContainer>
  );
};

export default Body;
