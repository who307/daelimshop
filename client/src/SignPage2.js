import React, { Component } from "react";
import styled from "styled-components";
import close from "./icon/clear-24px.svg";


const Container = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;  
  height: 100%;
  z-index: 500;
`

const Backgroud = styled.div`
    width: 100%;  
    height: 100%;
    background: rgba(0, 0, 0, .3);
    position: fixed;
    top: 0;
    left: 0;
  `

const SignDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media all and (min-width: 1024px) {
    min-height: 900px;
  }
`;

const SignBorder = styled.div`
  width : 800px;
  height : 900px;
  background-color : white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  z-index: 550;
  padding: 20px;

  @media all and (max-width: 1023px) {
    border-radius: 0;
    box-shadow: none;
    height: 100vh;
  }
`;

const Close = styled.div`
  cursor: pointer;
  margin-top: 10px;
  margin-left: 20px;
  width: 30px;
  float: left;
  >img {
    width: 30px;
    height: 30px;
  }
`

const PagingDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 54px;
  margin-bottom: 100px;

  @media all and (max-width: 425px) {
    margin-top: 35px;
    margin-bottom: 70px;
  }
`;

const Oval = styled.div`
  width: 40px;
  height: 9px;
  border-radius: 5px;
  background: #0095c8;

  @media all and (max-width: 425px) {
    width: 28px;
    height: 6px;
  }
`;
const Circle = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #0095c8;
  margin-left: 14px;
  margin-right: 14px;
  @media all and (max-width: 425px) {
    width: 7px;
    height: 6px;
  }
`;

const Subtitle = styled.p`
  font-size: 30px;
  color: #0095c8;
  margin: 0;

  @media all and (max-width: 425px) {
    font-size: 18px;
  }
`;

const Step = styled(Subtitle.withComponent("p"))`
  font-size: 64px;
  font-weight: bold;

  @media all and (max-width: 425px) {
    font-size: 38px;
  }
`;

const P = styled.p`
  font-size: 14px;
  margin-bottom: 36px;

  @media all and (max-width: 425px) {
    font-size: 14px;
  }
`

const InputDiv = styled.div`
  width: 450px;
  margin: 0 auto;
  margin-bottom: 20px;

  @media all and (max-width: 425px) {
    width: 270px;
  }
`;

const NameInput = styled.input.attrs({ type: "text" })`
  width: 418px;
  height: 21px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #c2c2c2;
  &:focus,
  :hover {
    outline: none;
    border-color: #0095c8;
  }

  @media all and (max-width: 425px) {
    width: 248px;
    height: 8px;
    font-size: 12px;
    padding: 10px;
    border-radius: 5px;
  }
`;

const IdInput = styled.input.attrs({ type: "text" })`
  width: 278px;
  height: 18px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #c2c2c2;
  margin-top: 15px;

  &:focus,
  :hover {
    outline: none;
    border-color: #0095c8;
  }

  @media all and (max-width: 425px) {
    width: 248px;
    height: 8px;
    font-size: 12px;
    padding: 10px;
    border-radius: 5px;
  }
`

const SubmitBtn = styled.button`
  width: 132px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background: #C2C2C2;
  float: right;
  color: #fff;
  margin-top: 15px;
  font-size: 14px;
  margin-left: 8px;
  cursor: pointer;

  @media all and (max-width: 425px) {
    width: 110px;
    height: 18px;
    font-size: 12px;
    margin-top: 5px;
    margin-left: 0;
    background: none;
    color: #000;
    float: left;
  }
`

const PwdInput = styled.input.attrs({ type: "password" })`
  width: 418px;
  height: 21px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #C2C2C2;
  margin-top: 15px;
  &:focus,
  :hover {
    outline: none;
    border-color: #0095c8;
  }

  @media all and (max-width: 425px) {
    width: 248px;
    height: 8px;
    font-size: 12px;
    padding: 10px;
    border-radius: 5px;
  }
`

const EmailInput = styled.input.attrs({ type: "text" })`
  width: 133px;
  height: 18px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #c2c2c2;
  margin-top: 15px;

  &:focus,
  :hover {
    outline: none;
    border-color: #0095c8;
  }

  @media all and (max-width: 425px) {
    width: 152px;
    height: 8px;
    font-size: 12px;
    padding: 10px;
    border-radius: 5px;
    float: left;
  }
`

const EmailDiv = styled.div`
  width: 102px;
  font-size: 14px;
  display: inline-block;
  -ms-user-select: none; 
  -moz-user-select: -moz-none; 
  -webkit-user-select: none; 
  -khtml-user-select: none; 
  user-select:none;
  margin-left: 21.5px;
  margin-right: 21.5px;

  @media all and (max-width: 425px) {
    width: 86px;
    font-size: 12px;
    margin: 0;
    margin-top: 22px;
  }
`

const PhoneCer = styled.button`
  width: 450px;
  height: 50px;
  margin-top: 15px;
  background-color: #c2c2c2;
  color: #fff;
  border: none;
  font-size: 20px;
  cursor: pointer;

  @media all and (max-width: 425px) {
    width: 270px;
    height: 35px;
  }
`

const NextBtn = styled.button`
  width: 450px;
  height: 50px;
  margin-top: 15px;
  background-color: #0095c8;
  color: #fff;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 32px;

  @media all and (max-width: 425px) {
    width: 270px;
    height: 35px;
    margin-top: 5px;
  }
`;

class SignPage2 extends Component {
  render() {
    const Paging = [];
    var i = 0;

    for (i; i < 2; i++) {
      if (i === 1) {
        Paging.push(<Oval key={i} />);
      } else {
        Paging.push(<Circle key={i} />);
      }
    }

    return (
      <Container>
        <Backgroud onClick={this.props.sign2_Open} />
        <SignDiv>
          <SignBorder>
          <Close onClick={this.props.sign2_Open} ><img src="./icon/clear-24px.svg" alt=""/></Close>
            <PagingDiv>{Paging}</PagingDiv>
            <Subtitle>회원가입을 진행해주세요.</Subtitle>
            <Step>STEP 02</Step>
            <P>*는 필수 정보이므로 꼭 입력해주셔야 합니다.</P>
            <InputDiv>
              <NameInput placeholder="*성명" />
              <IdInput placeholder="*아이디" />
              <SubmitBtn>아이디 중복 체크</SubmitBtn>
              <PwdInput placeholder="*비밀번호" />
              <PwdInput placeholder="*비밀번호 확인" />
              <EmailInput placeholder="*대림대학교 이메일" />
              <EmailDiv>@email.daelim </EmailDiv>
              <SubmitBtn>이메일 인증 요청</SubmitBtn>
              <PhoneCer>인증 요청</PhoneCer>
            </InputDiv>
            <NextBtn>가입 완료</NextBtn>
          </SignBorder>
        </SignDiv>
      </Container>
    );
  }
}

export default SignPage2;
