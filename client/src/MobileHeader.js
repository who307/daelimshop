import React from "react";
import styled from "styled-components";
import menu from "./icon/notes-24px.svg";
import search from "./icon/search-24px.svg";
import close from "./icon/clear-24px.svg";
import profile from "./icon/profile.png"
 
class MobileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      searchOpen: false,
      category: false,
      profileImage: "./icon/profile.png",
      search: false
    };
  }
 
  openClick() {
    this.setState({ menuOpen: true });
    console.log("true");
  }
 
  closeClick() {
    this.setState({ menuOpen: false });
    console.log("false");
  }
 
  categoryOpen() {
    if (!this.state.category) {
      this.setState({ category: true });
    } else {
      this.setState({ category: false });
    }
  }

  search() {
    this.setState({ search: true }); 
  }
 
  render() {
    const menuContents = this.props.menuContent.map((menu) => {
      return <MenuContent key={menu.id}>{menu.list}</MenuContent>;
    });
    const categoryContents = this.props.category.map((ctry) => {
      return <CategoryContents kye={ctry.id}>{ctry.list}</CategoryContents>;
    });

    const menuOpen = this.state.menuOpen;
    const category = this.state.category;
    const search = this.state.search;

    return (
      <header>
        <NavDiv>
          <Nav>
            <LeftSide search={ search }>
              <MenuBtn onClick={ this.openClick.bind(this) } />
              <Title>대중장</Title>
            </LeftSide>
            <RightSide search={ search }>
              <SearchDiv search={ search } onClick={ this.search.bind(this) }>
                {search && (
                  <Search autocomplete="off" placeholder="검색어를 입력해 주세요" />
                )}
              </SearchDiv>
            </RightSide>
          </Nav>
        </NavDiv>
        <OutsideMenu>
          { menuContents }
        </OutsideMenu>
        {menuOpen === true && (
          <div>
            <MenuBg onClick={ this.closeClick.bind(this) } />
            <OpenMenu>
              <MenuDiv>
                <CloseDiv>
                  <CloseBtn onClick={ this.closeClick.bind(this) } />
                </CloseDiv>
                <Profile>
                  <ProfileDiv>
                    <ProfileImage src={ profile } />
                    <NameDiv>
                      <Name>류창천</Name>
                      <Logout>로그아웃</Logout>
                    </NameDiv>
                  </ProfileDiv>
                </Profile>
                <InfoDiv>
                  <InfoTitle>개인정보</InfoTitle>
                  <Info>
                    <InfoContent>학번ㅣ {this.props.info.schoolNum}</InfoContent>
                    <InfoContent>학과ㅣ {this.props.info.department}</InfoContent>
                    <InfoContent>학년ㅣ {this.props.info.year}학년</InfoContent>
                  </Info>
                </InfoDiv>
                <Category>
                  <CategoryTitle>
                    <CategoryBtnDiv>
                      <AllCategoryButton onClick={ this.categoryOpen.bind(this) }>전체 카테고리</AllCategoryButton>
                    </CategoryBtnDiv>
                  </CategoryTitle>
                  {/* {category === true && ( */}
                      <CategoryList>
                        { categoryContents }
                      </CategoryList>
                    {/* )} */}
                </Category>
              </MenuDiv>
            </OpenMenu>
          </div>
        )}
      </header>
    );
  }
}
 
const NavDiv = styled.nav`
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  padding-top: 30px;
  
`
 
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`
 
const LeftSide = styled.div`
  display: ${props => (props.search ? "none" : "flex")};
  height: 30px;
  width: 200px;
`
 
const MenuBtn = styled.button`
  width: 24px;
  height: 27px;
  background: url(${menu}) no-repeat 100% 50%;
  border: none;
  outline: none;
`
 
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
 
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`
const RightSide = styled.div`
  height: 30px;
  width: ${props => (props.search ? "100%" : "200px")};
`
 
const SearchDiv = styled.div`
  width: ${props => (props.search ? "100%" : "22%")};
  height: 22px;
  background: url(${search}) no-repeat 100% 20%;
  float:  ${props => (props.search ? "left" : "right")};
  ${props => props.search && "border-bottom: 1px solid #0095c8"};
  padding-bottom: 10px;
`

const Search = styled.input.attrs({ type: "search" })`
  width: 95%;
  padding: 5px 20px;
  border: none;
  outline: none;
  margin-right: 50px;
`
 
const OutsideMenu = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 20px;
`
 
const MenuContent = styled.button`
  font-weight: bold;
  color: #b1b1b1;
  float: left;
  font-size: 16px;
  line-height: 45px;
  margin-right: 32px;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  padding: 0;
 
  &:hover {
    color: #000;
  }
`;
 
const MenuBg = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 40;
  background: rgba(0, 0, 0, 0.3);
`;
 
const OpenMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 50;
  width: 83%;
 
  animation-name: menuAni;
  animation-duration: .3s;
 
  @keyframes menuAni {
    0% {
     left: -2000px;
    }
    100% {
     left: 0px;
    }
  }
`;
 
const MenuDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
`
 
const CloseDiv = styled.div`
  padding-top: 20px;
  float: right;
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin: 0 auto;
`
 
const CloseBtn = styled.button`
  background: url(${close}) no-repeat 100% 50%;
  width: 24px;
  height: 24px;
  border: none;
  outline: none;
`
 
const Profile = styled.div`
  width: 100%;
  height: 84px;
  margin: 0 auto;
  padding-bottom: 30px;
  border-bottom: 1px solid #D2D2D2;
 
`
 
const ProfileDiv = styled.div`
  margin-left: 5%;
`
 
const ProfileImage = styled.img `
  width: 84px;
  height: 84px;
  object-fit: cover;
  border-radius: 50%;
  float: left;
`
 
const NameDiv = styled.div`
  float: left;
  margin-left: 20px;
  line-height: 10px;
`
 
const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`
 
const Logout = styled.button `
  font-size: 12px;
  border:none;
  background: none;
  outline: none;
  padding: 0;
`
 
const Category = styled.div`
  background: #fff;
  flex: 1;
  padding-top: 30px;
  transition-delay: 0.5s;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none; 
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }  
`;
 
const CategoryTitle = styled.div`
  width: 89%;
  margin: 0 auto;
  display: flex;
  background: #fff;  
`

const CategoryBtnDiv = styled.div`
  width: 100%;
`
 
const AllCategoryButton = styled.button `
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  cursor: pointer;
  font-size: 18px;;
  font-weight: bold;
  border: none;
  border-bottom: 1px solid #e7e7e7;
  outline: none;
  background: #fff;
`
 
const CategoryList = styled.div`
  width: 90%;
  height: 955px;
  background: #F9F9F9;
  margin: 0 auto;

  animation-name: allCategoryAni;
  animation-duration: .3s;
  
  @keyframes allCategoryAni {
    0% {
      height: 0;
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      height: 955px;
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
 
const CategoryContents = styled.button`
  width: 100%;
  margin: 0 auto;
  padding: 25px;
  text-align: left;
  cursor: pointer;
  font-size: 18px;;
  font-weight: bold;
  border: none;
  border-bottom: 1px solid #EEEEEE;
  outline: none;
  background: #F9F9F9;
  overflow: hidden;
  
 
  &:hover {
    background: #EEEEEE;
  }
`;

const InfoDiv = styled(Profile.withComponent("div"))`
  width: 90%;  
  padding-top: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  height: auto;
  padding-bottom: 0;
`

const InfoTitle = styled.div`
  width: 100%;
  padding-bottom: 20px;
`

const Info = styled.div`
`

const InfoContent = styled.div`
  font-weight: normal;
  font-size: 14px;
  margin-bottom: 20px;
`
 
export default MobileHeader;


