import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import { Link} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import LandingPage from "./LandingPage";



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: {
        tab1: "의류", 
        tab2: "생활용품",
        tab3: "가구/인테리어",
        tab4: "디지털",
        tab5: "뷰티",
        tab6: "자동차/공구",
        tab7: "도서",
        tab8: "기타",
      },
      tabState: "전체",

    };

    
  }
  changeTab0() {
    this.setState({ tabState: "전체", });
  }
  changeTab1() {
    this.setState({ tabState: "의류",  });
  }
  changeTab2() {
    this.setState({ tabState: "생활용품" });
  }
  changeTab3() {
    this.setState({ tabState: "디지털" });
  }
  changeTab4() {
    this.setState({ tabState: "뷰티" });
  }
  changeTab5() {
    this.setState({ tabState: "도서" });
  }
  changeTab6() {
    this.setState({ tabState: "기타" });
  }
  changeTab7() {
    this.setState({ tabState: "도서" });
  }
  changeTab8() {
    this.setState({ tabState: "기타" });
  }

  render() {
 
    //
   

    //
    const tabState = this.state.tabState;
    var allTab = new Array();

    allTab[0] = this.changeTab0.bind(this);
    allTab[1] = this.changeTab1.bind(this);
    allTab[2] = this.changeTab2.bind(this);
    allTab[3] = this.changeTab3.bind(this);
    allTab[4] = this.changeTab4.bind(this);
    allTab[5] = this.changeTab5.bind(this);
    allTab[6] = this.changeTab6.bind(this);
    allTab[7] = this.changeTab7.bind(this);
    allTab[8] = this.changeTab8.bind(this);

    const CategoryL = this.props.category.map((ctry) => {
      if (tabState === ctry.list) {
        return (
          <Category onClick={allTab[ctry.id]} black key={ctry.id}>
          {ctry.list}
          </Category>
          
        );
      } else {
        return (
          <Category onClick={allTab[ctry.id]} key={ctry.id}>
            {ctry.list}
          </Category>
        );
      }
    });
    const products = this.props.product.map((pro) => {
      if(tabState === "전체") {
        return (
          <ProductInfo key={pro.key}>
            <a href="/detail">
              <ProductImgDiv>
                <img src={pro.img} alt="d" />
              </ProductImgDiv>
              <ProductAccount>
                <ProductTitle>{pro.name}</ProductTitle>
                <Price>{pro.price}</Price>
              </ProductAccount>
            </a>
          </ProductInfo>
        );
      } else if(tabState === pro.tab) {
        return (
          <ProductInfo key={pro.key}>
            <a href="">
              <ProductImgDiv>
                <img src={pro.img} alt="d" />
              </ProductImgDiv>
              <ProductAccount>
                <ProductTitle>{pro.name}</ProductTitle>
                <Price>{pro.price}</Price>
              </ProductAccount>
            </a>
          </ProductInfo>
        );
      }
    });
    return (
      <Container>
        <div>
          <CategoryTitle>카테고리별 상품</CategoryTitle>
          <CategoryTab>
            <CategoryList>{CategoryL}</CategoryList>
          </CategoryTab>
          <ProductDiv>
            <Title>{this.state.tabState}</Title>
            <ProductList>{products}</ProductList> 
          </ProductDiv>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 0 auto;
  width: 1200px;

  > div {
    width: 100%;
  }
`;

const CategoryTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  float: left;
  width: 100%;
  padding-bottom: 20px;
  display: flex;
`;

const CategoryTab = styled.div`
  width: 100%;
  display: flex;
`;

const CategoryList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Category = styled.div`
  width: 151px;
  height: 46px;
  line-height: 46px;
  font-size: 18px;
  cursor: pointer;
  :hover {
    font-weight: bold;
  }

  ${(props) =>
    props.black &&
    css`
      background: #000;
      color: #fff;
      border-radius: 30px;
      font-weight: bold;
    `}
`;
const ProductDiv = styled.div`
  padding: 35px 0;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const ProductList = styled.div`
  padding: 30px 0;
  display: flex;
  width: 1200px;
  flex-wrap: wrap;
  height: auto;
  >div {
    margin-right: 18.5px;
  }
  >div:nth-child(5n) {
    margin-right: 0;
  }
  

  @media all and (max-width: 1100px) {
      width: 100%;
  }
`;

const ProductInfo = styled.div`
  width: 225px;
  height: 290px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-bottom: 20px;
`;

const ProductImgDiv = styled.div`
  width: 225px;
  height: 190px;

  > img {
    width: 100%;
    height: 190px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

const ProductAccount = styled.div`
  padding: 20px 15px;
`;

const ProductTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 15px;
`;
const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 24px;
  font-weight: bold;
`;

export default Main;
