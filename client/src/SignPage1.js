import React, { Component } from "react";
import styled from "styled-components";
import underArrow from "./icon/expand_more-24px.svg";


const SignDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media all and (min-width: 1024px) {
    min-height: 900px;
  }
`;

const SignBorder = styled.div`
  width: 800px;
  height: 900px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 50px;

  @media all and (max-width: 1023px) {
    border-radius: 0;
    box-shadow: none;
    height: 100vh;
  }
`;

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

  @media all and (max-width: 450px) {
    font-size: 38px;
  }
`;

const StudentNum = styled.input.attrs({ type: "text" })`
  width: 430px;
  height: 30px;
  padding: 10px;
  margin-top: 100px;
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

const AdmissionYear = styled.select`
  width: 452px;
  height: 52px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #c2c2c2;
  margin-top: 15px;
  appearance: none;
  background: url(${underArrow}) no-repeat 95% 50%;
  &:focus,
  :hover {
    border-radius: 10px;
    border: 1px solid #0095c8;
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  }

  @media all and (max-width: 425px) {
    width: 270px;
    height: 35px;
    padding: 8px;
  }
`;

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
  }
`;


class SignPage1 extends Component {

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

    for (i; i < 3; i++) {
      if (i === 0) {
        Paging.push(<Oval key={i} />);
      } else {
        Paging.push(<Circle key={i} />);
      }
    }

    const year = [];
    var e = 2006;

    for (e; e <= 2020; e++) {
      year.unshift(
        <option key={e - 2005} value={e}>
          {e}
        </option>
      );
    }

    const nextClick = () => {
      const schoolNum = document.getElementById("schoolNum");
      const admissionYear = document.getElementById("admissionYear");
      const {history} = this.props;

      if(!schoolNum.value) {
        alert("학번을 입력해주세요.");
        schoolNum.focus();
      } else if(!admissionYear.value) {
        alert("입학년도를 선택해주세요.");
        admissionYear.focus();
      } else {
        history.push("/signPage2");
      }
    }

    return (
      <SignDiv>
        <SignBorder>
          <PagingDiv>{Paging}</PagingDiv>
          <Subtitle>회원가입을 진행해주세요.</Subtitle>
          <Step>STEP 01</Step>
          <StudentNum placeholder="학번" id="schoolNum" value={this.state.value} onChange={this.onChange.bind(this)} />
          <AdmissionYear size="1" id="admissionYear">
            <option value="" selected disabled hidden>
              입학년도
            </option>
            {year}
          </AdmissionYear>
          <NextBtn onClick={nextClick}>다음</NextBtn>
        </SignBorder>
      </SignDiv>
    );
  }
}

export default SignPage1;

