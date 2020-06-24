import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
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

const MemberfindDiv= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media all and (min-width: 1024px) {
    min-height: 900px;
  }
`;

const Backgroud = styled.div`
    width: 100%;  
    height: 100%;
    background: rgba(0, 0, 0, .3);
    position: fixed;
    top: 0;
    left: 0;
  `

const FindBorder = styled.div`
 width : 550px;
  height : 520px;
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
  
  width: 30px;
  float: left;
  >img {
    width: 30px;
    height: 30px;
    margin : 20px;
    cursor: pointer;
  }
`

const Title = styled.p`
  font-size: 45px;
  font-weight : bold;
  color: #0095c8;
  margin: 60px 0 0 0;

  @media all and (max-width: 425px) {
    font-size: 18px;
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

const StudentNum = styled.input.attrs({ type: "text" })`
  width: 430px;
  height: 30px;
  padding: 10px;
  margin-top: 50px;
  border-radius: 10px;
  border: 1px solid #c2c2c2;
  &:focus,
  :hover {
    border-radius: 10px;
    border: 1px solid #0095c8;
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  }

  @media all and (max-width: 425px) {
    width: 252px;
    height: 17px;
    padding: 8px;
    margin-top: 70px;
  }
`;

const Input = styled.input`
  width: 430px;
  height: 30px;
  margin-top : 15px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #c2c2c2;
  &:focus,
  :hover {
    border-radius: 10px;
    border: 1px solid #0095c8;
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  }

  @media all and (max-width: 425px) {
    width: 252px;
    height: 17px;
    padding: 8px;
    margin-top: 70px;
  }
`;

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

const EmailInput = styled.input.attrs({ type: "text" })`
  width: 200px;
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
  width: 182px;
  font-size: 16px;
  display: inline-block;
  -ms-user-select: none; 
  -moz-user-select: -moz-none; 
  -webkit-user-select: none; 
  -khtml-user-select: none; 
  user-select:none;
  margin-left: 18px;
  margin-right: 18px;

  @media all and (max-width: 425px) {
    width: 86px;
    font-size: 12px;
    margin: 0;
    margin-top: 22px;
  }
`


class Memfind extends Component {

  constructor(){
    super();
    this.state = {value: ''};
 }
 
 onChange(e){
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
       this.setState({value: e.target.value})
    }
 }

  render() {

    
    const findClick = () => {
      const email = document.getElementById("email");
      const name = document.getElementById("name");
      const {history} = this.props;

      if(!email.value) {
        alert("이메일을 입력해주세요.");
        email.focus();
      } else if(!name.value) {
        alert("이름을 입력해주세요.");
        name.focus();
      } else {
        history.push("/#");
      }
    }

    return (
      <Container>
        <Backgroud onClick={ this.props.idFind } />
        <MemberfindDiv>
          <FindBorder>
          <Close onClick={this.props.idFind} ><img src="./icon/clear-24px.svg" alt=""/></Close>
            <Title>아이디 찾기</Title>
            <H6>학교 이메일과 이름을 입력해주세요.</H6>
            <EmailInput id="email" placeholder="*대림대학교 이메일" />
            <EmailDiv>@ email.daelim </EmailDiv>
            <Input type="text" placeholder="학번" id="schoolNum" value={this.state.value} onChange={this.onChange.bind(this)} />
            <Input type="text" placeholder="이름" id="name" />
            <Findbtn onClick={findClick}>찾기</Findbtn>
          </FindBorder>
        </MemberfindDiv>
      </Container>
    );
  }
}

export default Memfind;

