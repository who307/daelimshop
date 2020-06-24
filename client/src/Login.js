import React, { useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { loginUser } from './_actions/user_action';
import { withRouter } from 'react-router-dom';

import { Link } from 'react-router-dom';
import styled from 'styled-components';


function LoginPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")


  // const [loginOpen, setloginOpen] = useState("")


  // const onloginOpen = (event) => {
  //     setloginOpen(event.currentTarget.value)
  // }


  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  // const loginOK = (event) => {
  //     if(sessionStorage.getItem('logintoken')){
  //       props.loginOK({ loginOK = true });
  //     }
  //   }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password
    }
    dispatch(loginUser(body))
      .then(response => {
        if (response.payload.loginSuccess) {
          console.log('로그인성공')
          sessionStorage.setItem('logintoken', true);
          window.localStorage.setItem('userId', response.payload.userId);
          window.location.href = "/"
        } else {
          alert('ID 또는 비밀번호가 올바르지 않습니다.')
        }
      })
  }

  const newLoing = (event) => {
    props.sign1_Open();
  }

  return (

    <Container>


      <Backgroud onClick={props.loginOpen} />

      <Div>
        <Close onClick={props.loginOpen} ><img src="./icon/clear-24px.svg" alt="" /></Close>

        <Img src="../일러스트/people-welcoming-concept-with-foliage-background/2769504.jpg" alt="Welcome DaelimSecondHandShop" width="600px" height="400px"></Img>
        <H4>대중장에 오신것을</H4>
        <H1>환영합니다!</H1>
        <H5>서비스의 원활한 이용을 위해 로그인을 진행해 주시기 바랍니다.</H5>
        <form onSubmit={onSubmitHandler}>
          <Input type="text" placeholder="아이디" id="userid" value={Email} onChange={onEmailHandler} /><br></br>
          <Input type="password" placeholder="비밀번호" id="password" value={Password} onChange={onPasswordHandler} />
          <Loginbtn type="submit">로그인</Loginbtn>
        </form>

        <Memberservice>
          <Memberfind onClick={props.idFind} >아이디 찾기</Memberfind>
          <B>|</B>
          <Passwordfind onClick={props.pwdFind1} >비밀번호 찾기</Passwordfind>
          <B>|</B>
          <Join onClick={newLoing} >회원가입</Join>
        </Memberservice>

      </Div>
    </Container>
  )
}
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

const Backgroud = styled.div`
    width: 100%;  
    height: 100%;
    background: rgba(0, 0, 0, .3);
    position: fixed;
    top: 0;
    left: 0;
  `
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

const Div = styled.div`
    width : 800px;
    height : 900px;
    margin :  0 auto;
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
`
const Img = styled.img`
  @media all and (max-width: 500px) {
    width: 380px;
    height:250px;
  }
`
const H4 = styled.h4`
    font-weight :lighter;
    font-size : 30px;
    margin :15px 0;
    color :#0095C8;
    @media all and (max-width: 425px) {
        font-size : 18px;
        text-align :center;
      }
`
const H1 = styled.h1`
    font-weight :Bolder;
    font-size : 64px;
    margin : 0;
    color :#0095C8;
    @media all and (max-width: 425px) {
        font-size : 30px;
      }
`

const H5 = styled.h5`
    font-size : 16px;
    margin-top : 15px;
    @media all and (max-width: 425px) {
        font-size : 13px;
      }
         
`
const Input = styled.input`
    width : 450px;
    height : 50px;
    font-size : 16px;
    margin-bottom : 10px;
    padding: 5px 10px;
    border : 1px solid lightgrey;
    border-radius: 13px;
    outline:none;
    @media all and (max-width: 425px) {
        width: 300px;
        height: 50px;
        font-size : 12px;
      }  
`

const Loginbtn = styled.button`
    width : 472px;
    height : 60px;
    font-size : 20px;
    font-weight :Bold;
    color : white;
    background-color : #0095C8;
    border-style : none;
    margin-bottom : 15px;
    @media all and (max-width: 425px) {
        width: 307px;
        height: 50px;
        font-size : 14px;
      }  
  outline: none;
  cursor: pointer;
`

const Memberservice = styled.div`
    font-size : 16px;
    font-weight :Bold;
    display: flex;
    justify-content: center;
    @media all and (max-width: 425px) {
        font-size : 11px;
        
      }  

`
const Memberfind = styled.div`
  cursor: pointer;
    color : lightgrey;
    &:hover {
        color : #0095C8;
      }
`
const Passwordfind = styled.div`
cursor: pointer;
    color : lightgrey;
    &:hover {
        color : #0095C8;
      }
`
const Join = styled.div`
cursor: pointer;
    color : lightgrey;
    &:hover {
        color : #0095C8;
      }
`

const B = styled.b`
    color : lightgrey;
    margin : 0 30px 0 30px;
`

export default withRouter(LoginPage)
