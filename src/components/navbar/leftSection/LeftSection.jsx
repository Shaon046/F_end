import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const LeftChildContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  box-sizing: border-box;
`;
const LogoContainer = styled.div`
  width: 30%;
  margin-right: 36px;

  @media only screen and (max-width: 768px) {
    width: 20%;
    margin-right: 26px;
  }
`;

const Logo = styled.div`
  background-image: url(https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg);

  height: 40px;
  width: 160px;

  @media only screen and (max-width: 768px) {
    max-width: 118px;
  }
`;

const SearchSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 3rem;
`;

const SearchBarContainer = styled.div`
  position: relative;
  height: 3rem;
  width: 490px;
  background-color: #f0f5ff;
  border-radius: 4px;

  @media only screen and (max-width: 768px) {
    width: 250px;
    height: 3rem;
    font-size: 12px;

    @media only screen and (min-width: 768px) {
      font-size: 15px;
    }
  }
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

const ListItems = styled.li`
  list-style: none;
  color: #757575;
`;
const ListInsideConatiner = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  font-weight: 400;
  padding-bottom: 4px;
  gap: 4px;

  &:hover {
    background-color: #f0f5ff;
  }
`;

const SearchBarLogo = styled.div`
  display: flex;
  align-self: center;
  margin-left: 8px;
  padding: 8px 4px 4px 4px;
  @media only screen and (max-width: 768px) {
    margin-left: 4px;
    padding: 4px 2px 2px 2px;
  }
`;

const SearchBar = styled.input.attrs({
  placeholder: "Search for Products, Brands and More",
})`
  background-color: #f0f5ff;
  width: 100%;
  border: none;
  cursor: text;

  font-style: normal;

  border-radius: 4px;
  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }
`;

const LeftNav = () => {
  return (
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
            <li>
              {" "}
              <ListInsideConatiner>
                <SearchIcon style={{ height: "20px" }} /> apple
              </ListInsideConatiner>{" "}
            </li>

            <li>
              {" "}
              <ListInsideConatiner>
                <SearchIcon style={{ height: "20px" }} /> Nokia
              </ListInsideConatiner>{" "}
            </li>

            <li>
              {" "}
              <ListInsideConatiner>
                <SearchIcon style={{ height: "20px" }} /> Mac
              </ListInsideConatiner>{" "}
            </li>
          </ListItems>
        </AutoSuggestion>
      </SearchBarContainer>
    </LeftChildContainer>
  );
};

export default LeftNav;
