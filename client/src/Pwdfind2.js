import React, { Component } from "react";
import styled from "styled-components";

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

const PasswordfindDiv= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media all and (min-width: 1024px) {
    min-height: 900px;
  }
`;

const FindBorder = styled.div`
  width: 600px;
  height: 600px;
  background: #fff;
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
  margin-top: 65px;
  margin-bottom: 30px;

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
  margin: 0 14px;

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
  @media all and (max-width: 425px) {
    width: 7px;
    height: 6px;
  }
`;
const Title = styled.p`
  font-size: 30px;
  color: #0095c8;
  margin: 15px 0 0 0;

  @media all and (max-width: 425px) {
    font-size: 18px;
  }
`
const Step = styled(Title.withComponent("p"))`
  font-size: 64px;
  font-weight: bold;

  @media all and (max-width: 450px) {
    font-size: 38px;
  }
`;

const H6 = styled.p`
  font-size: 20px;
  font-weight: bold;
  color : #B1B1B1;

  @media all and (max-width: 450px) {
    font-size: 10px;
  }
`
const Input = styled.input`
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

const EmailDiv = styled.div `
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
const SubmitBtn = styled.button `
  width: 132px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background: #C2C2C2;
  color: #fff;
  margin-top: 15px;
  font-size: 14px;
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
const Codebtn = styled.button `
  width: 132px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background: #C2C2C2;
  color: #fff;
  margin-top: 15px;
  margin-left : 143px;
  font-size: 14px;

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

const Certify = styled.input.attrs({ type: "text" }) `
  width: 410px;
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
`

const Findbtn = styled.button`
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
  }
`;


class Pwdfind2 extends Component {

  render() {
    const Paging = [];
    for (var i = 0; i < 2; i++) {
      if (i === 1) {
        Paging.push(<Oval key={i} />);
      } else {
        Paging.push(<Circle key={i} />);
      }
    }
    
    const nextClick = () => {
      const email = document.getElementById("email");
      const code = document.getElementById("code");
      const {history} = this.props;

      if(!email.value){
        alert("이메일을 입력해주세요.");
        email.focus();
      }else if(!code.value){
        alert("인증번호를 입력해주세요.");
        code.focus();
      }else {
        history.push("/#");
      }
    }

    return (
      <Container>
      <Backgroud onClick={ this.props.pwdFind2 } />
      <PasswordfindDiv>
        <FindBorder>
        <Close onClick={this.props.pwdFind2} ><img src="./icon/clear-24px.svg" alt=""/></Close>
        <PagingDiv>{Paging}</PagingDiv>
        <Title>비밀번호 찾기</Title>
        <Step>STEP 02</Step>
          <H6>이메일을 인증해주세요.</H6>
          <Input type ="text" placeholder="대림대학교 이메일" id ="email" /> 
          <EmailDiv>@email.daelim </EmailDiv>
          <SubmitBtn>이메일 인증 요청</SubmitBtn>
          <Certify placeholder="인증번호" id ="code" />
          <Findbtn onClick={nextClick}>찾기</Findbtn>
        </FindBorder>
      </PasswordfindDiv>
      </Container>
    );
  }
}

export default Pwdfind2;

