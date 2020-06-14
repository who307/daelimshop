import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import close from "./icon/clear-24px.svg";


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {

    const loginOpen = this.props.loginOpen;

    const loginClick = () => {
      const userid = document.getElementById("userid");
      const password = document.getElementById("password");
      const { history } = this.props;

      if (!userid.value) {
        alert("아이디를 입력해주세요.");
        userid.focus();
      } else if (!password.value) {
        alert("비밀번호를 입력해주세요.");
        password.focus();
      } else {
        history.push("/#");
      }
    }
    return (

      <Container>
        <Backgroud onClick={this.props.loginOpen} />

        <Div>
          <Close onClick={this.props.loginOpen} ><img src="./icon/clear-24px.svg" alt="" /></Close>
          <Img src="./일러스트/people-welcoming-concept-with-foliage-background/2769504.jpg" alt="Welcome DaelimSecondHandShop" width="600px" height="400px"></Img>
          <H4>대중장에 오신것을</H4>
          <H1>환영합니다!</H1>
          <H5>서비스의 원활한 이용을 위해 로그인을 진행해 주시기 바랍니다.</H5>
          <form>
            <Input type="text" placeholder="아이디" id="userid" /><br></br>
            <Input type="password" placeholder="비밀번호" id="password" />
            <Loginbtn onClick={loginClick}>로그인</Loginbtn>
          </form>

          <Memberservice>
            <Memberfind onClick={this.props.idFind}>아이디 찾기</Memberfind>
            <B>|</B>
            <Passwordfind onClick={this.props.pwdFind1}>비밀번호 찾기</Passwordfind>
            <B>|</B>
            <Join onClick={this.props.sign1_Open}>회원가입</Join>
          </Memberservice>
        </Div>
      </Container>
    );
  }
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

export default Login;