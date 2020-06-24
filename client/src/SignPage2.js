import React, { useState, Component } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from './_actions/user_action';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import styled from "styled-components";



const Departments = [
  { key: 1, value: "기계" },
  { key: 2, value: "메카트로닉스" },
  { key: 3, value: "소방안전설비" },
  { key: 4, value: "자동차" },
  { key: 5, value: "산업경영" },
  { key: 6, value: "토목환경" },
  { key: 7, value: "건축" },
  { key: 8, value: "실내디자인" },
  { key: 9, value: "전기" },
  { key: 10, value: "디지털전자" },
  { key: 11, value: "전자통신" },
  { key: 12, value: "방송음향영상" },
  { key: 13, value: "컴퓨터소프트웨어" },
  { key: 14, value: "모바일인터넷" },
  { key: 15, value: "자동화시스템" },
  { key: 16, value: "의공융합" },
  { key: 17, value: "경영" },
  { key: 18, value: "사회복지" },
  { key: 19, value: "세무회계" },
  { key: 20, value: "항공서비스" },
  { key: 21, value: "호텔관광" },
  { key: 22, value: "비서사무행정" },
  { key: 23, value: "도서관정보" },
  { key: 24, value: "유아교육" },
  { key: 25, value: "스포츠지도" },
  { key: 26, value: "호텔조리전공" },
  { key: 27, value: "베이커리카페전공" },
  { key: 28, value: "언어재활" }
]


function RegisterPage(props) {
  
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("")
  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  const [SchoolNum, setSchoolNum] = useState("")
  const [Department, setDepartment] = useState("1")


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

  const onSchoolNumHandler = (event) => {
    setSchoolNum(event.currentTarget.value)
  }

  const onDepartmentHandler = (event) => {
    setDepartment(event.currentTarget.value)
  }


  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
        return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }
    // if(Email == unique) {
    //   return alert('중복되는 아이디가 있습니다..')
    // }

    let body = {
        email: Email,
        password: Password,
        name: Name
    }
    dispatch(registerUser(body))
        .then(response => {
            if (response.payload.success) {
                props.history.push("/")
                console.log("가입이 완료되었습니다.")
            } else {
                alert("Failed to sign up ")
            }
        })

    const alert1 = (event) => {
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }
}
  // const onSubmitHandler = (event) => {
  //   event.preventDefault();

  //   if (Password !== ConfirmPassword) {
  //     return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
  //   }

  //   let body = {
  //     email: Email,
  //     password: Password,
  //     name: Name
  //   }

  // }

  const alert = () => {
    window.location.reload();
    }

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
                  

    <form onSubmit={onSubmitHandler}>
      <SignDiv>
      <Backgroud onClick={props.sign2_Open} />
      <SignBorder>
       <Close onClick={props.sign2_Open}><img src="./icon/clear-24px.svg" alt=""/></Close>
          <PagingDiv>{Paging}</PagingDiv>
          <Subtitle>회원가입을 진행해주세요.</Subtitle>
          <Step>STEP 02</Step>
          <P>*는 필수 정보이므로 꼭 입력해주셔야 합니다.</P>
          <InputDiv>
            <NameInput type="text" value={Name} onChange={onNameHandler} placeholder="*성명" />
            <IdInput type="email" value={Email} onChange={onEmailHandler} placeholder="*아이디" />
            
            <Btn>아이디 중복 체크</Btn>

            <PwdInput type="password" value={Password} onChange={onPasswordHandler} placeholder="*비밀번호" />
            <PwdInput type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} placeholder="*비밀번호 확인" />
            {/* <EmailInput placeholder="*이메일" /> */}
            {/* <SubmitBtn>이메일 인증 요청</SubmitBtn>
            <PhoneCer>인증 요청</PhoneCer> */}
            <Select>
              <select onChange={onDepartmentHandler} value={Department}>
                {Departments.map(item => (
                  <option key={item.key} value={item.key}> {item.value}</option>
                ))}
              </select>
              <Label>학과</Label>
            </Select>      
            <SchoolNumInput value={SchoolNum} onChange={onSchoolNumHandler} placeholder="*학번" />
          
          </InputDiv>
          <NextBtn type="submit" onClick={alert}>가입 완료</NextBtn>
        </SignBorder>
      </SignDiv>

    </form>
    </Container>
  )
}

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
  height : 800px;
  background-color : white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  z-index: 550;
  padding : 20px;
  
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
  margin-bottom: 30px;
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
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
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

const Btn = styled.button`
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
const Label = styled.div`
    color: #c2c2c2;
    font-size : 18px;
    font-weight : bold;
    line-height : 50px;
    padding-right : 20px;

`
const SchoolNumInput = styled.input.attrs({ type: "number" })`
  width: 420px;
  height: 18px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #c2c2c2;
  float : left;

  &:focus,
  :hover {
    outline: none;
    border-color: #0095c8;
  }`
const Select = styled.div`
    width : 450px;
    height: 50px;
    font-size: 26px;
    padding : 15px 15px 15px 0;
    &:hover
        :focus {
            border : 1px solid #0095c8;

        }
    >select {
      width: 350px;
    height: 50px;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #c2c2c2;
    float :left;
    }
`

export default withRouter(RegisterPage)