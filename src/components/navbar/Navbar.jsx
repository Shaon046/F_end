import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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

const LeftChildContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 4px;
  box-sizing: border-box;
`;



const Logo = styled.div`
  background-image: url(https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg);

  height: 40px;
  width: 160px;
  overflow: hidden;
`;

const SearchSection = styled.div`
  width: 70%;
  display: flex;
`;

const SearchBarContainer = styled.div`
  position: relative;
  height: 3rem;
  width: 100%;
  background-color: #f0f5ff;
  border-radius: 4px;
`;

const AutoSuggestion = styled.div`
  position: relative;
  left: 0;
  top: 0;
  display: inline-block;
  width: 100%;
  overflow: hidden;
border-radius: 0 0 4px 4px;
  background-color: #ffffff;
  box-shadow: 1px 1px 8px #f1f2f4;
`;

const ListItems=styled.li`

list-style: none;


`
const ListInsideConatiner=styled.div`
  display: flex;
  align-items: center;
 text-align: center;
 font-size: large;
  gap:4px;

  &:hover{
  background-color:  #f0f5ff;
}

`


const SearchBarLogo = styled.div`
  display: flex;
  align-self: center;
  margin-left: 8px;
  padding: 8px 4px 4px 4px;
`;

const SearchBar = styled.input.attrs({
  placeholder: "Search for Products, Brands and More",
})`
  background-color: #f0f5ff;
  height: 40px;
  width: 100%;
  border: none;
  cursor: text;

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 10;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;



////right side

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

const LogoContainer = styled.div`
  width: 30%;
  margin-right: 36px;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

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

const Navbar = () => {
  return (
    <Container>
      <LeftChildContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <SearchBarContainer>
          <SearchSection>
            <SearchBarLogo>
              <SearchIcon />
            </SearchBarLogo>

            <SearchBar />
          </SearchSection>
          <AutoSuggestion>
            {/* we have to write list here */}
            <ListItems>

            <li> <ListInsideConatiner><SearchIcon style={{height:"20px"}}/> <p style={{paddingBottom:"4px"}}>apple</p> </ListInsideConatiner>  </li>
           
            <li> <ListInsideConatiner><SearchIcon style={{height:"20px"}}/> <p style={{paddingBottom:"4px"}}>Nokia</p> </ListInsideConatiner>  </li>
           
            <li> <ListInsideConatiner><SearchIcon style={{height:"20px"}}/> <p style={{paddingBottom:"4px"}}>Mac</p> </ListInsideConatiner>  </li>
           
            </ListItems>
           
          </AutoSuggestion>
        </SearchBarContainer>

      </LeftChildContainer>


      <RightChildContainer>

        <LoginContainer>
          <AccountCircleOutlinedIcon />
          <LoginText>shaon</LoginText>
          <KeyboardArrowDownRoundedIcon />
          {/* <KeyboardArrowUpRoundedIcon/> */}
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
    </Container>
  );
};

export default Navbar;
