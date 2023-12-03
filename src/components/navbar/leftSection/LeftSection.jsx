import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";


const LogoContainer = styled.div`
  width: 30%;
  margin-right: 36px;
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

const ListItems = styled.li`
  list-style: none;
  color: #757575;
`;
const ListInsideConatiner = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: medium;
  font-weight: 400;
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

const LeftNav = () => {return (<LeftChildContainer>
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
              <SearchIcon style={{ height: "20px" }} />{" "}
              <p style={{ paddingBottom: "4px" }}>apple</p>{" "}
            </ListInsideConatiner>{" "}
          </li>

          <li>
            {" "}
            <ListInsideConatiner>
              <SearchIcon style={{ height: "20px" }} />{" "}
              <p style={{ paddingBottom: "4px" }}>Nokia</p>{" "}
            </ListInsideConatiner>{" "}
          </li>

          <li>
            {" "}
            <ListInsideConatiner>
              <SearchIcon style={{ height: "20px" }} />{" "}
              <p style={{ paddingBottom: "4px" }}>Mac</p>{" "}
            </ListInsideConatiner>{" "}
          </li>
        </ListItems>
      </AutoSuggestion>
    </SearchBarContainer>
  </LeftChildContainer>)
};


export default LeftNav