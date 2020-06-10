import React, { useState,Component } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from './_actions/user_action';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

import styled from "styled-components";


function RegisterPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")


    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body = {
            email: Email,
            password: Password,
            name: Name
        }
        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push("/")
                } else {
                    alert("Failed to sign up")
                }
            })
    }

    const Paging = [];
    var i = 0;

    for (i; i < 3; i++) {
      if (i === 2) {
        Paging.push(<Oval key={i} />);
      } else {
        Paging.push(<Circle key={i} />);
      }
    }



    return (

            <form onSubmit={onSubmitHandler}>
                <SignDiv>
                    <SignBorder>
                        <PagingDiv>{Paging}</PagingDiv>
                        <Subtitle>회원가입을 진행해주세요.</Subtitle>
                        <Step>STEP 03</Step>
                        <P>*는 필수 정보이므로 꼭 입력해주셔야 합니다.</P>
                        <InputDiv>
                            <NameInput type="text" value={Name} onChange={onNameHandler} placeholder="*성명" />
                            <IdInput type="email" value={Email} onChange={onEmailHandler} placeholder="*아이디" />
                            <SubmitBtn>아이디 중복 체크</SubmitBtn>
                            <PwdInput type="password" value={Password} onChange={onPasswordHandler} placeholder="*비밀번호" />
                            <PwdInput  type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} placeholder="*비밀번호 확인" />
                            <EmailInput placeholder="*대림대학교 이메일" />
                            <EmailDiv>@email.daelim </EmailDiv>
                            <SubmitBtn>이메일 인증 요청</SubmitBtn>
                            <PhoneCer>인증 요청</PhoneCer>
                        </InputDiv>
                        <NextBtn type="submit">가입 완료</NextBtn>
                    </SignBorder>
                </SignDiv>

            </form>
    )
}


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

export default withRouter(RegisterPage)
