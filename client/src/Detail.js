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
        img: "/image/bird-932704_640.jpg"
      }
    }
  }
  render() {
    return (
      <Container>
        <TopDiv>
          <ImgDiv>
             <img src={this.state.productDetail.img} alt="product1"/>
          </ImgDiv>
          <TextDiv>
            <Title>{this.state.productDetail.title}</Title>
            <Price>{ this.state.productDetail.price }<div>원</div></Price>
            <HR />
            <ProductState>
              <StateDiv>
                <StateName>상품상태 </StateName>
                <StateContent>{ this.state.productDetail.productState }</StateContent>
              </StateDiv>
              <StateDiv>
                <StateName>교환여부 </StateName>
                <StateContent>{ this.state.productDetail.trade }</StateContent>
              </StateDiv>
              <StateDiv>
                <StateName>배송비 </StateName>
                <StateContent space>{ this.state.productDetail.delivery }</StateContent>
              </StateDiv>
              <StateDiv>
                <StateName>거래지역 </StateName>
                <StateContent>{ this.state.productDetail.area }</StateContent>
              </StateDiv>
            </ProductState>
            <BtnDiv>
            <MessageBtn>쪽지 보내기</MessageBtn>
          </BtnDiv>
          </TextDiv>
        </TopDiv>
      </Container>
    )
  }
}

const Container = styled.div `
  margin: 0 auto;
  width: 1200px;

`
const TopDiv = styled.div `
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

const HR = styled.hr `
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
`

const BtnDiv = styled.div`
  padding: 20px;
`

const MessageBtn = styled.button `
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

export default Detail;