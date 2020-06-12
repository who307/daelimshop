import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Menu from "./Menu";
import Footer from "./Footer";
import Notices from "./Notices";
import QnA from "./QnA";
import Login from "./Login";
import SignPage1 from "./SignPage1";
import SignPage2 from "./SignPage2"
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import Main from "./Main";
import Product from "./Product"
import logout from "./logout"
import UploadProductPage from "./UploadProductPage"
import Detail from "./Detail"

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');

  body { 
    background-color: #ffffff;
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;
  }
  
  div {
    margin: 0;
  }

  h1 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  header {
    background: #ffffff;
    z-index: 50;
    position: fixed;
    left:0;
    right:0;
    z-index: 300;
    top: 0;
  }

  footer {
    width: 100%;
    background: #fff;
    padding-bottom: 20px;
    border-top : 1px solid #eeeeee;
    margin-top: 50px;
  }
`;

const PcScreen = styled.div`
  @media all and (max-width: 1023px) {
    display: none;
  }
`;

const MobileScreen = styled.div`
  @media all and (min-width: 1024px) {
    display: none;
  }
`;

const Contents = styled.div`
  width: 100%;
  margin-top: 230px;
  margin-bottom: 100px;
  height: auto;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuContent: [
        { id: 1, list: "판매", link: "" },
        { id: 2, list: "쪽지", link: "" },
      ],

      topMenu: [
        { id: 1, list: "마이페이지", link: "" },
        { id: 2, list: "로그아웃", link: "" },
      ],
      category: [
        { id: 0, list: "전체" },
        { id: 1, list: "의류" },
        { id: 2, list: "생활용품" },
        { id: 3, list: "디지털" },
        { id: 4, list: "뷰티" },
        { id: 5, list: "도서" },
        { id: 6, list: "기타" },
      ],

      info: {
        name: "류창천",
        schoolNum: "201640115",
        department: "모바일인터넷과",
        yaer: "3",
      },

      login: false,

      product: [
        { key: 0, name: "디지털 상품", price: "10000", img: "/image/bird-932704_640.jpg", src: "", tab: "디지털" },
        { key: 1, name: "의류 상품", price: "10000", img: "/image/bird-932704_640.jpg", src: "", tab: "의류" },
        { key: 2, name: "가구 상품", price: "10000", img: "/image/bird-932704_640.jpg", src: "", tab: "가구/인테리어" },
        { key: 3, name: "뷰티 상품", price: "10000", img: "/image/bird-932704_640.jpg", src: "", tab: "뷰티" },
        { key: 4, name: "도서 상품", price: "10000", img: "/image/bird-932704_640.jpg", src: "", tab: "도서" },
        { key: 5, name: "기타 상품", price: "10000", img: "/image/bird-932704_640.jpg", src: "", tab: "기타" },
        { key: 6, name: "기타 상품", price: "10000", img: "/image/bird-932704_640.jpg", src: "", tab: "기타" },
        { key: 7, name: "기타 상품", price: "10000", img: "/image/bird-932704_640.jpg", src: "", tab: "기타" },
        { key: 8, name: "기타 상품", price: "10000", img: "/image/bird-932704_640.jpg", src: "", tab: "기타" },
        { key: 9, name: "기타 상품", price: "10000", img: "/image/bird-932704_640.jpg", src: "", tab: "기타" },
      ]
    };
  }

  render() {
    const loginState = this.state.login;
    let screen;
   
    return (
      <Router>
        <GlobalStyle />
         <Route
            path='/'
            render={() =>
              <Header
                category={this.state.category}
                topMenu={this.state.topMenu}
                menuContent={this.state.menuContent}
                login={this.state.login}
            />
            } />
        <Contents>
          <Route
            exact path='/'
            render={() =>
              <Main category={this.state.category} product={this.state.product} />
            } />
            <Route path="/Detail" component={Detail} /> 
        </Contents>

        <Route path="/UploadProductPage" component={UploadProductPage} />
        <Route path="/login" component={Login} />

        <Route path="/logout" component={logout} />
        <Route path="/signpage1" component={SignPage1} />
        <Route path="/signpage2" component={SignPage2} />

        <footer>
          <Route path="/" component={ Footer } />
        </footer>
      </Router>
    );
  }
}

export default App;
