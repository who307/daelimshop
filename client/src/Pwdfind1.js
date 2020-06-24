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
  height: 700px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  background-color : white;
  z-index: 550;

  @media all and (max-width: 1023px) {
    border-radius: 0;
    box-shadow: none;
    height: 100vh;
  }
`;
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

const StudentNum = styled.input.attrs({ type: "text" })`
  width: 430px;
  height: 30px;
  padding: 10px;
  margin-top: 15px;
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

const Close = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  width: 30px;
  float: left;
  >img {
    width: 30px;
    height: 30px;
    margin : 20px;
    cursor: pointer;
  }
`


class Pwdfind1 extends Component {

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
    const Paging = [];
    var i = 0;

    for (i; i < 2; i++) {
      if (i === 0) {
        Paging.push(<Oval key={i} />);
      } else {
        Paging.push(<Circle key={i} />);
      }
    }
    
    const nextClick = () => {
      const userid = document.getElementById("userid");
      const schoolNum = document.getElementById("schoolNum");
      const name = document.getElementById("name");
      const {history} = this.props;

      if(!userid.value){
        alert("아이디를 입력해주세요");
        userid.focus();
      } else if(!schoolNum.value) {
        alert("학번을 입력해주세요.");
        schoolNum.focus();
      } else if(!name.value) {
        alert("이름을 입력해주세요.");
        name.focus();
      }else {
        this.props.pwdFind2();
      }
    }

    return (
      <Container>
        <Backgroud onClick={ this.props.pwdFind1 } />
        <PasswordfindDiv>
          <FindBorder>
          <Close onClick={this.props.pwdFind1} ><img src="./icon/clear-24px.svg" alt=""/></Close>
          <PagingDiv>{Paging}</PagingDiv>
          <Title>비밀번호 찾기</Title>
          <Step>STEP 01</Step>
            <H6>아이디와 학번 이름을 입력해주세요.</H6>
            <Input type ="text" placeholder="아이디" id="userid" />
            <StudentNum placeholder="학번" id="schoolNum" value={this.state.value} onChange={this.onChange.bind(this)} />
            <Input type ="text" placeholder="이름" id="name" />
            <Findbtn onClick={nextClick}>다음</Findbtn>
          </FindBorder>
        </PasswordfindDiv>
      </Container>
    );
  }
}

export default Pwdfind1;

