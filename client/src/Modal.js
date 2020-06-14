import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";
import Fade from '@material-ui/core/Fade';



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Fade in={open}>
          <div className={classes.paper}>
              <Div>
                <Img src="./일러스트/people-welcoming-concept-with-foliage-background/2769504.jpg" alt="Welcome DaelimSecondHandShop" width="600px" height="400px"></Img>
                <H4>대중장에 오신것을</H4>
                <H1>환영합니다!</H1>
                <H5>서비스의 원활한 이용을 위해 로그인을 진행해 주시기 바랍니다.</H5>
                <form>
                  <Input type="text" placeholder="아이디" id="userid" /><br></br>
                  <Input type="password" placeholder="비밀번호" id="password" />
                  <Loginbtn>로그인</Loginbtn>
                </form>

                <Memberservice>
                  <Link to="#"><Memberfind>아이디 찾기</Memberfind></Link>
                  <B>|</B>
                  <Link to="#"><Passwordfind>비밀번호 찾기</Passwordfind></Link>
                  <B>|</B>
                  <Link to="SignPage1"><Join>회원가입</Join></Link>
                </Memberservice>

              </Div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;

    @media all and (min-width: 1024px) {
      min-height: 900px;
    }
`
const Div = styled.div`
    width : 800px;
    height : 900px;
    margin :  0 auto;
    background-color : white;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    border-radius: 50px;

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
    padding-left : 5px;
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
    width : 455px;
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

const Memberservice = styled.a`
    font-size : 16px;
    font-weight :Bold;
    @media all and (max-width: 425px) {
        font-size : 11px;
        
      }  

`
const Memberfind = styled.a`
    color : lightgrey;
    &:hover {
        color : #0095C8;
      }
`
const Passwordfind = styled.a`
    color : lightgrey;
    &:hover {
        color : #0095C8;
      }
`
const Join = styled.a`
    color : lightgrey;
    &:hover {
        color : #0095C8;
      }
`

const B = styled.b`
    color : lightgrey;
    margin : 0 30px 0 30px;
`
