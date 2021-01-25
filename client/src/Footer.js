import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Logo>D</Logo>
      <H3>중고장터</H3>
      <FooterLink>
        <Footerlist1>이용약관</Footerlist1>
        <Footerlist2>사이트맵</Footerlist2>
        <Footerlist3>개인정보처리방침</Footerlist3>
      </FooterLink>
      <Company>
        경기도 안양시 동안구 임곡로 29  (우편번호:12345
        ) ㅣ TEL. 010)4054-4118 ㅣ FAX. 02)1234-5678 who307@naver.com ㅣ
        정보관리책임 : 문건후ㅣ 사업자등록번호 : 000-00-000000 ㅣ 업체명
        :중고장터 대표이사 문건후
      </Company>
      <Copyright>
        Copyright ⓒ 2020.MoonGunWho. All right reserved
        </Copyright>
      <Question>
        고객센터 02-852-9632 ㅣ 제휴문의 who307@naver.com
      </Question>

    </Container>
  );
};

const Container = styled.div`
  width: 1200px;
  height : 200px;
  margin: 0 auto;
  padding: 30px 0;
  line-height: 50px;
`;
const Logo = styled.h5`
  width: 45px;
  height: 45px;
  color: white;
  line-height : 45px;
  font-size: 30px;
  background-color: #0095c8;
  border: 1px solid;
  border-radius: 10px;
  float: left;
  margin: 20px 0 0 20px;
`;
const H3 = styled.h3`
  width: 150px;
  color: #0095c8;
  font-size: 28px;
  margin: 20px 0 0 0px;
  line-height: 50px;
  float: left;
`;
const FooterLink = styled.div`
  width: 900px;
  font-size: 16px;
  font-weight: bold;
  line-height: 90px;
  text-align: left;
  float: left;
`;
const Footerlist1 = styled.h5`
  width: 120px;
  margin: 0 30px 0 0;
  float: left;
`;
const Footerlist2 = styled.h5`
  width: 120px;
  margin: 0 30px 0 0;
  float: left;
`;
const Footerlist3 = styled.h5`
  width: 120px;
  margin: 0 30px 0 0;
  float: left;
`;
const Company = styled.div`
  width: 800px;
  height: 44px;
  font-size: 14px;
  text-align: left;
  margin-left: 20px;
`;
const Question = styled.div`
  width: 400px;
  height: 44px;
  font-size: 14px;
  text-align: left;
  margin: 10px 0 0 20px;
  float: left;
`;
const Copyright = styled.div`
  font-size: 14px;
  text-align: right;
  margin-top: 40px;
`;

export default Footer;