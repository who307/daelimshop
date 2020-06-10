import React, { Component } from "react";
import styled from "styled-components";

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
  width: 1200px;
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
  margin-bottom: 35px;

  @media all and (max-width: 425px) {
    margin-top: 35px;
    margin-bottom: 20px;
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
  margin-bottom: 40px;

  @media all and (max-width: 450px) {
    font-size: 38px;
    margin-bottom: 24px;
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
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 32px;

  @media all and (max-width: 425px) {
    width: 270px;
    height: 40px;
  }
`;

const AgreeDiv = styled.div`
  margin-bottom: 24px;
`;

const TermsFont = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  width: 87%;
  margin: 0 auto;
  @media all and (max-width: 425px) {
    font-size: 18px;
  }
`;

const Textarea = styled.textarea`
  width: 85%;
  height: 93px;
  border-color: #0095c8;
  margin-top: 20px;
  resize: none;
  scrollbar-color: #0095c8;
  padding: 10px;
  font-size: 12px;
`;

const Label = styled.label`
  width: 87%;
  display: flex;
  margin: 0 auto;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: bold;

  @media all and (max-width: 425px) {
    font-size: 14px;
  }
`;

const CheckAgree = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
`;

const AllagreeLabel = styled(Label.withComponent("label"))`
  font-size: 20px;

  @media all and (max-width: 425px) {
    font-size: 18px;
  }
`;

const AllAgree = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
`;

class SignPage2 extends Component {
  render() {
    const Paging = [];
    for (var i = 0; i < 3; i++) {
      if (i === 1) {
        Paging.push(<Oval key={i} />);
      } else {
        Paging.push(<Circle key={i} />);
      }
    }

    let check = false;
    const chk = document.getElementsByName("checking");
    const allCheckBtn = document.getElementsByName("allCheckBtn");

    const CheckAll = () => {
      if (!allCheckBtn.checked) {
        allCheckBtn.checked = true;
        for (var i = 0; i < chk.length; i++) {
          chk[i].checked = true;
        }
      } else {
        allCheckBtn.checked = false;
        for (var i = 0; i < chk.length; i++) {
          chk[i].checked = false;
        }
      }
    };

    const nextButton = () => {
      const { history } = this.props;

      for (var i = 0; i < chk.length; i++) {
        if (chk[0].checked && chk[1].checked){
          check = true;
        } else {
          check = false;
        }
      }

      if (check) {
        history.push("/signPage3");
      } else {
        alert("모든 약관에 동의해 주세요.");
        return false;
      }
    };

    return (
      <SignDiv>
        <SignBorder>
          <PagingDiv>{Paging}</PagingDiv>
          <Subtitle>약관에 동의해 주세요</Subtitle>
          <Step>STEP 02</Step>
          <form>
            <AgreeDiv>
              <TermsFont>이용약관(필수)</TermsFont>
              <Textarea readOnly row="4">
                dddddddd
              </Textarea>

              <Label>
                <CheckAgree name="checking" />
                약관에 동의 합니다.
              </Label>
            </AgreeDiv>
            <AgreeDiv>
              <TermsFont>개인정보 처리 방침(필수)</TermsFont>
              <Textarea readOnly row="4"></Textarea>
              <Label>
                <CheckAgree name="checking" />
                약관에 동의 합니다.
              </Label>
            </AgreeDiv>
            <AllagreeLabel>
              <AllAgree onClick={CheckAll} />
              모두 동의 합니다.
            </AllagreeLabel>
          </form>
          <NextBtn name="allCheckBtn" onClick={nextButton}>
            다음
          </NextBtn>
        </SignBorder>
      </SignDiv>
    );
  }
}

export default SignPage2;
