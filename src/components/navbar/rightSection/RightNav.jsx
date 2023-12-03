import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
const RightChildContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4px;
  box-sizing: border-box;
  height: auto;
  width: 40%;
`;

const LoginContainer = styled.div`
  align-items: center;
  height: 3rem;
  width: 8rem;
  margin-left: 20px;
  gap: 3px;
  padding: 3px;
  border-radius: 4px;
  margin: 2px;
  box-sizing: border-box;
`;

const Login = styled.div`
  position: relative;
  display: flex;
  height: 2.5rem;
  width: 100%;
  padding: 4px;
  align-items: center;
  justify-content: space-between;
  border: 1px;
  border: hidden;
  box-sizing: border-box;
  &:hover {
    background-color: #fafafa;
    border-radius: 4px 4px 0 0;
    animation-delay: 250ms;
    border: 1px solid #c7cddb;
  }
`;

const Dropdown = styled.div`
  position: relative;
  top: 0px;
 
  width: 9rem;
  border-radius: 0 0 4px 4px;
  background-color: #ffffff;
  box-shadow: 1px 1px 8px #f1f2f4;
`;

const ListContainer = styled.li`
  list-style: none;
  padding-top: 8px;
  color: #757575;
`;

const ListInsideConatiner = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: medium;
  font-weight: 400;
  gap: 4px;
  padding: 2px;
  &:hover {
    background-color: #f0f5ff;
  }
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
`;

const CartItem = styled.div`
  display: inline-block;
  position: relative;
  top: -5px;
  right: 14px;
  height: 1rem;
  width: 1rem;
  background-color: red;
  border-radius: 100%;
  color: white;
  font-size: 10px;
  text-align: center;
`;

const CartText = styled.p`
  position: relative;
  right: 12px;
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

const MoreContainer = styled.div`
  height: 1.2rem;
  width: 0.5rem;
  padding: 4px;
`;

const More = styled.div`
  position: relative;
  top: 22px;
  right: 156px;
 
  width: 12rem;
  border-radius: 0 0 4px 4px;
  background-color: #ffffff;
  box-shadow: 1px 1px 8px #f1f2f4;
`;

const MoreList = styled.li`
  list-style: none;
 
  color: #757575;
`;
const MoreInsideConatiner = styled.div`
  display: flex;
  padding-bottom: 9px;
  align-items: center;
  text-align: center;
  font-size: small;
  font-weight: 400;
  gap: 4px;
  
  &:hover {
    background-color: #f0f5ff;
  }
`;

const RightNav = () => {
  return (
    <RightChildContainer>
      <LoginContainer>
        <Login>
          <AccountCircleOutlinedIcon style={{ height: "1rem" }} />
          <LoginText>shaon</LoginText>
          <KeyboardArrowDownRoundedIcon style={{ height: "1rem" }} />
          {/* <KeyboardArrowUpRoundedIcon/> */}
        </Login>

        <Dropdown>
          <ListContainer style={{paddingTop:"0"}}>
            <ListInsideConatiner >
              <AccountCircleOutlinedIcon style={{ height: "20px" }} /> Your
              Account
            </ListInsideConatiner>

            <ListInsideConatiner>
              <LocalShippingIcon style={{ height: "20px" }} /> Order
            </ListInsideConatiner>

            <ListInsideConatiner>
              <ExitToAppOutlinedIcon style={{ height: "20px" }} /> Logout
            </ListInsideConatiner>
          </ListContainer>
        </Dropdown>
      </LoginContainer>

      <CartConatiner>
        <ShoppingCartOutlinedIcon />
        <CartItem>1</CartItem>
        <CartText>Cart</CartText>
      </CartConatiner>

      <BecomeSellerContainer>
        <StorefrontIcon />
        <BecomeSellerText>Become a Seller</BecomeSellerText>
      </BecomeSellerContainer>

      <MoreContainer>
        <MoreVertIcon />
        <More >

<MoreList>
  <MoreInsideConatiner>
    <NotificationsNoneIcon/> Notification
  </MoreInsideConatiner>
  <MoreInsideConatiner>
<SupportAgentIcon/>24x7 customer Care
  </MoreInsideConatiner>

  <MoreInsideConatiner>
    <VerticalAlignBottomIcon/>Download
  </MoreInsideConatiner>
 
</MoreList>

        </More>
        
      </MoreContainer>
    </RightChildContainer>
  );
};

export default RightNav;
