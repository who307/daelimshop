import React from 'react';
import styled, { css } from 'styled-components';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: {
        title: "title(제목)ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
        price: "1,000(가격)",
        productState: "중고(상품상태)",
        trade: "교환불가",
        delivery: "택배 착불",
        area: "서울",
        img: "/image/bird-932704_640.jpg",
        info: " 직거래 합니다 상태좋음 "
    },sellerinfo : {
        id : "who307",
        name : "문건후",
        department : "모바일인터넷",
        schoolnum : "201540209"
      }
    }

}
  render() {
    return (
      <Container>
        <TopDiv>
          <ImgDiv>
            <img src={this.state.productDetail.img} alt="product1" />
          </ImgDiv>
          <TextDiv>
            <Title>{this.state.productDetail.title}</Title>
            <Price>{this.state.productDetail.price}<div>원</div></Price>
            <HR />
            <ProductState>
              <StateDiv>
                <StateName>상품상태 </StateName>
                <StateContent>{this.state.productDetail.productState}</StateContent>
              </StateDiv>
              <StateDiv>
                <StateName>교환여부 </StateName>
                <StateContent>{this.state.productDetail.trade}</StateContent>
              </StateDiv>
              <StateDiv>
                <StateName>배송비 </StateName>
                <StateContent space>{this.state.productDetail.delivery}</StateContent>
              </StateDiv>
              <StateDiv>
                <StateName>거래지역 </StateName>
                <StateContent>{this.state.productDetail.area}</StateContent>
              </StateDiv>
            </ProductState>
            <BtnDiv>
              <MessageBtn>쪽지 보내기</MessageBtn>
            </BtnDiv>
          </TextDiv>
        </TopDiv>


          <ProductDiv>
          <MyInfo>
            <Mydiv>
              판매자 정보
            </Mydiv>
            <LogoDiv>
            <Logo>
              D
            </Logo>
              <Sellerstate>
              <StateContent><div>{this.state.sellerinfo.id}</div></StateContent>
              </Sellerstate>
              </LogoDiv>
              <Sellerstate>
              <SellerContent>이름 : </SellerContent>
              <StateContent>{this.state.sellerinfo.name}</StateContent>
              </Sellerstate>
              <Sellerstate>
              <SellerContent>학과 : </SellerContent>  
              <StateContent>{this.state.sellerinfo.department}</StateContent>
              </Sellerstate>  
              <Sellerstate>
              <SellerContent>학번 : </SellerContent>
              <StateContent>{this.state.sellerinfo.schoolnum}</StateContent>
              </Sellerstate> 

          </MyInfo>

            <DetailAll>
            <DetailDiv>
              <H4>상품 정보</H4>
              <img src={this.state.productDetail.img} alt="product2" />
              <img src={this.state.productDetail.img} alt="product3" />
              <StateContent><div>{this.state.productDetail.info }</div></StateContent>
            </DetailDiv>
            </DetailAll>

          </ProductDiv>

      </Container>
    )
  }
}

const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
`
const TopDiv = styled.div`
  width: 1200px;
  height: 496px;
  background-color : white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  display: flex;
  
`

const ImgDiv = styled.div`
  width: 620px;
  height: 496px;
  margin: 0;
  >img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
`
const TextDiv = styled.div`
  width: calc(100% - 620px - 80px);
  padding: 40px;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  width: 100%;
`

const Price = styled.div`
  float: left;
  padding: 30px 0;
  font-size: 36px;
  font-weight: bold;
  display: flex;
  width: 100%;
  >div {
    font-size: 24px;
    line-height: 64px;
    margin-left: 8px;
  }
`

const HR = styled.hr`
  border-color: #D2D2D2;
`

const ProductState = styled.div`
  text-align: left;
  padding-top: 20px;
`

const StateDiv = styled.div`
  display: flex;
  padding-bottom: 20px;
`

const StateName = styled.div`
  color: #a6a6a6;
  margin-right: 12px;
`

const StateContent = styled.div`
  ${(props) => props.space &&
    css`
      margin-left: 16px;
    `
  }
    >div {
    font-size : 20px;
    text-align : left;
    margin-left : 30px;
    }
`

const BtnDiv = styled.div`
  padding: 20px;
`

const MessageBtn = styled.button`
  width: 240px;
  height: 60px;
  background: #0095C8;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`
const ProductDiv = styled.div` 
  
`
const DetailAll = styled.div` 
  width: 856px;
  height : 1300px;
  background-color : white;
  display: flex;
  margin-top : 40px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  
`
const H4 = styled.h4` 
    width : 321px;
    height : 40px;
    font-size : 20px;
    font-weight : bold;
    margin : 40px 0 0 40px;
    text-align : left;
`

const DetailDiv = styled.div` 
  >img {
      width : 783px;
      height : 472px;
      border-radius: 30px;
      padding :20px
    }
`
const MyInfo = styled.div` 
  width: 301px;
  height : 400px;
  background-color : white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  float : right;
  padding-bottom : 20px;
`
const Logo = styled.h5`
  width: 84px;
  height: 84px;
  color: white;
  font-size: 50px;
  line-height : 78px;
  background-color: #0095c8;
  border: 1px solid;
  border-radius: 60px;
  margin: 0 0 20px 0;
`;
const LogoDiv = styled.div ` 
  display : flex;
  margin-left: 20px;
`
const Mydiv = styled.div ` 
  font-size : 20px;
  font-weight : bold;
  padding : 20px;
  margin : 20px 0 10px 0;
  display: flex;
`

const Sellerstate = styled.div`
  display: flex;
  padding : 15px;
  margin-left : 15px;
  margin-top : 10px;
  font-weight : bold;
`

const SellerContent = styled.div`
  margin-right: 12px;
  font-weight : bold;
  `
export default Detail; 