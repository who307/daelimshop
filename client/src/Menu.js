import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Menu = (match) => {
  return (
    <Container>
      <Menubar>
        <P>메뉴</P>
        <Hr></Hr>
        <Ul>
        <Li>
            <Link to="/notices">
              <Notices>공지사항</Notices>
            </Link>
          </Li>
          <Li>
            <Link to="/qna">
              <Qna>Q&A</Qna>
            </Link>
          </Li>
        </Ul>
      </Menubar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  text-align: left;
  width: 321px;
  float : left;
`;
const Menubar = styled.div`
  width: 321px;
  height: 272px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;
const P = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-left: 30px;
`;
const Hr = styled.hr`
  margin: 0 20px;
`;

const Li = styled.li`
  font-size: 22px;
  font-weight: bold;
  list-style: none;
  margin: 0 30px 30px;
`;
const Ul = styled.ul`
  margin-top: 25px;
  padding: 0;
`;

const Qna = styled.a`
  color: #b1b1b1;
  &:hover {
    color: #0095c8;
  }
  &:visited {
    color: #0095c8;
  }
`;
const Notices = styled.a`
  color: #b1b1b1;
  &:hover {
    color: #0095c8;
  }
  &:visited {
    color: #0095c8;
  }
`;

export default Menu;
