import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const RightChildContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  box-sizing: border-box;
  height: auto;
  width: auto;
  gap: 2rem;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 3rem;
  width: 7rem;
  margin-left: 20px;
  gap: 4px;
  padding: 6px;
  border-radius: 4px;
  margin: 2px;
  box-sizing: border-box;
  &:hover {
    background-color: #fafafa;

    border: 1px solid black;
  }
`;

const Dropdown = styled.div`
  position: relative;
  height: 9rem;
  width: 100%;
  background-color: #1c7171;
`;

const LoginText = styled.p`
  text-align: center;
  font-weight: 400;
  color: black;
  text-transform: capitalize;
  font-size: 1rem;
`;

const CartConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;
`;

const CartText = styled.p`
  text-align: center;
  font-weight: 400;
  color: black;
  text-transform: capitalize;
  font-size: 1rem;
`;

const BecomeSellerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;
`;
const BecomeSellerText = styled.p`
  text-align: center;
  font-weight: 400;
  color: black;
  text-transform: capitalize;
  font-size: 1rem;
`;

const RightNav = () => {
  return (
    <RightChildContainer>
      <LoginContainer>
        <AccountCircleOutlinedIcon />
        <LoginText>shaon</LoginText>
        <KeyboardArrowDownRoundedIcon />
        {/* <KeyboardArrowUpRoundedIcon/> */}

        <Dropdown />
      </LoginContainer>

      <CartConatiner>
        <ShoppingCartOutlinedIcon />
        <CartText>Cart</CartText>
      </CartConatiner>

      <BecomeSellerContainer>
        <StorefrontIcon />
        <BecomeSellerText>Become a Seller</BecomeSellerText>
      </BecomeSellerContainer>

      <MoreVertIcon />
    </RightChildContainer>
  );
};

export default RightNav;
