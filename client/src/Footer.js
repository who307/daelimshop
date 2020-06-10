import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Logo>D</Logo>
      <H3>대중장</H3>
      <FooterLink>
        <Footerlist1>이용약관</Footerlist1>
        <Footerlist2>사이트맵</Footerlist2>
        <Footerlist3>개인정보처리방침</Footerlist3>
      </FooterLink>
      <Company>
        서울특별시 마마구 마마마로 02 (마마동 15-7) 아아마빌라 2층 (우편번호:
        00000) ㅣ TEL. 02)1234-5678 ㅣ FAX. 02)1234-5678 iksij@ajsndjle.co.kr ㅣ
        정보관리책임 : 김이박최 ㅣ 사업자등록번호 : 000-00-000000 ㅣ 업체명
        :꿀디자인 대표이사 김이박최
      </Company>
      <Question>
        고객센터 02-852-9632 ㅣ 제휴문의 apdlfwnth@dusfkrgo.com
      </Question>
      <Copyright>Copyright ⓒ 2020.KimRyuMoon. All right reserved</Copyright>
    </Container>
  );
};

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
  line-height: 50px;
`;
const Logo = styled.h5`
  width: 45px;
  height: 45px;
  color: white;
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
  margin: 30px 0 0 20px;
  float: left;
`;
const Copyright = styled.div`
  font-size: 14px;
  text-align: right;
  margin-top: 30px;
`;

export default Footer;
