import React, { Component } from "react";
import styled from "styled-components";
import search from "./icon/search-24px.svg";
import menu from "./icon/notes-24px.svg";
import { Link } from "react-router-dom";

const TopDiv = styled.div`
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  margin: 0;
  background: #fff;
  @media all and (max-width: 1023px) {
    display: none;
  }
`;

const Top = styled.div`
  padding-top: 20px;
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;

const LeftDiv = styled.div`
  width: 150px;
`;

const BtnDiv = styled.div`
  width: 182px;
`;

const Button = styled.button`
  border: none;
  background: none;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin-left: 28px;
`;

const MainNav = styled.div`
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  z-index: 50;
  padding-top: 20px;
  background: #fff;
  background: #ffffff;
  z-index: 50;
`;

const NavDiv = styled.nav`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  z-index: 50;
`;

const Logo = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: #0095c8;
  text-align: center;
  margin: 0;
  line-height: 45px;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  float: left;
`;


const Title = styled(Button.withComponent("button"))`
  font-size: 24px;
  color: #0095c8;
  font-weight: bold;
  float: left;
  line-height: 45px;
  margin-left: 15px;
`;

const MenuContent = styled(Button.withComponent("button"))`
  font-size: 18px;
  font-weight: bold;
  color: #b1b1b1;
  float: left;
  line-height: 45px;
  margin-left: 32px;

  &:hover {
    color: #000;
  }
`;

const SearchDiv = styled.div`
  background: url(${search}) no-repeat 95% 50%;
  width: 220px;
  height: 34.5px;
  border-bottom: ${props => props.search === true && "1px solid #0095c8"};

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display: none;
  }
`;

const Search = styled.input.attrs({ type: "search" })`
  padding: 10px;
  outline: none;
  margin-right: 30px;
  width: 160px;
  border: none;

  animation-name: searchAni;
  animation-duration: .5s;

  @keyframes searchAni {
    0% {
      width: 0;
    }

    100% {
      width: 160px;
    }
  }
`

const CategoryDiv = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eeeeee;
  background: #fff;
  z-index: 50;
`;

const Category = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 30px;
  padding: 10px 20px;
  background: #fff;

  &:hover {
    background-color: #0095C8;
    color: #fff;
  }
`;

const CategoryBtn = styled.div`
  width: 24px;
  height: 24px;
  width: 1200px;
  text-align: left;
  position: relative;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

const ClickDiv = styled.div`
  width: 136px;
  background: url(${menu}) no-repeat 0.5% 50%;
  b {
    margin-left: 40px;
    cursor: default;
  }
`;

// const CategoryTitle = styled.div`
//   height: 40px;
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   -webkit-box-pack: justify;
//   justify-content: space-between;
//   font-weight: 700;
//   padding: 5px 30px;
//   border-bottom: 1px solid rgb(238, 238, 238);
//   cursor: default;
// `;

const CategoryList = styled.div`
  position: absolute;
  width: 240px;
  top: calc(100% + 20px);
  left: 0;
  height: 380px;
  border: 1px solid #eeeeee;
  border-top: none;
  padding-bottom: 20px;
  z-index: 20;
  animation-name: categoryAni;
  animation-duration: .3s;

  @keyframes categoryAni {
    0% {
      opacity: 0;
      z-index: -30;
    }

    100% {
      opacity: 1;
      z-index: 20;
    }
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      searchOpen: false
    };
  }

  menu() {
    this.setState({ menuOpen: true });
    if (this.state.menuOpen === true) {
      this.setState({ menuOpen: false });
    }
  }

  search() {
    this.setState({ searchOpen: true });
  }

  render() {
    const topMenu = this.props.topMenu.map((topM) => {
      return <Button key={topM.id}>{topM.list}</Button>;
    });

    const menuList = this.props.menuContent.map((menu) => {
      return <MenuContent key={menu.id}>{menu.list}</MenuContent>;
    });

    const categoryContents = this.props.category.map((ctry) => {
      return <Category key={ctry.id}>{ctry.list}</Category>;
    });

    const menuOpen = this.state.menuOpen;

    const searchOpen = this.state.searchOpen;
    const {history} = this.props;

    let lgin = ""
    let login
    let log = this.props.login
    if(log) {
      lgin = "로그아웃";
      login = <Button>{lgin}</Button>;
    } else {
      lgin = "로그인";
      login =  <Button onClick={this.props.loginOpen}>{lgin}</Button>;
    }

    let logState 

    if(lgin ==="로그아웃") {
      logState = <Button>마이페이지</Button>;
    } else if (lgin === "로그인") {
      logState = <Button><Link to="/signpage1">회원가입</Link></Button>;
    }
    return (
      <header>
        <TopDiv>
          <Top>
            <LeftDiv />
            <BtnDiv>               
              {logState}
              {login}
            </BtnDiv>
          </Top>
        </TopDiv>
        <MainNav>
          <NavDiv>
            <div>
              <Link to="/">
                <Logo>D</Logo>
                <Title>대중장</Title>
              </Link>
              {menuList}
            </div>
            <SearchDiv onClick={this.search.bind(this)} search={this.state.searchOpen} >
              {searchOpen === true &&(
                <Search autocomplete="off" placeholder="검색어를 입력해 주세요" />
              )}
            </SearchDiv>
          </NavDiv>
        </MainNav>
        <CategoryDiv>
          <CategoryBtn>
            <ClickDiv onClick={this.menu.bind(this)}>
              <b>전체카테고리</b>
              {menuOpen === true && (
                <CategoryList>
                  {categoryContents}
                </CategoryList>
              )}
            </ClickDiv>
          </CategoryBtn>
        </CategoryDiv>
      </header>
    );
  }
}

export default Header;
