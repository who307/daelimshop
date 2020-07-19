import React, { useState } from "react";
import "./accordion.css";
import styled from "styled-components";
import Menu from "./Menu";

function QnA() {
  const [faqs, setfaqs] = useState([
    {
      question: "배송일정은 어떻게 되나요?",
      answer:
        "청춘의 낙원을 앞이 대한 그들은 길을 아름다우냐? 작고 오아이스도 그들의 있을 그들의 트고, 사막이다. 있는 같으며, 따뜻한 그리하였는가? 얼마나 들어 황금시대를 것은 우리의 별과 보라. 가슴에 대고, 얼음이 가치를 군영과 얼마나 그리하였는가? 역사를 광야에서 같은 있으며, 품으며, 얼마나 이성은 얼마나 말이 속잎나고, 있을 동산에는 충분히 끓는다.",
      open: false,
    },
    {
      question: "거래는 어떻게 진행하나요?",
      answer:
        "청춘의 낙원을 앞이 대한 그들은 길을 아름다우냐? 작고 오아이스도 그들의 있을 그들의 트고, 사막이다. 있는 같으며, 따뜻한 그리하였는가? 얼마나 들어 황금시대를 것은 우리의 별과 보라. 가슴에 대고, 얼음이 가치를 군영과 얼마나 그리하였는가? 역사를 광야에서 같은 있으며, 품으며, 얼마나 이성은 얼마나 말이 속잎나고, 있을 동산에는 충분히 끓는다.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    
    <Container>
      <Menu>
      </Menu>
      <div className="faqs">
        <Qna>
          <H6>Q&A</H6>
        </Qna>

        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </Container>
  );
}

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div>
    
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        <Q>Q</Q> {faq.question}
      </div>

      <div className="faq-answer">
        <A>A</A>
        {faq.answer}
      </div>
    </div>
    </div>
    
  );
}
const Container = styled.div`
  width : 1200px;
  margin : auto;
`;

const Qna = styled.div`
  border-bottom: solid 1px #e7e7e7;
  margin-bottom: 20px;
  z-index: 0;
`;
const H6 = styled.h6`
  margin: 20px 0 20px 40px;
  font-size: 28px;
`;

const Q = styled.h6`
    width : 20px;
    font-weight :bold;
    font-size : 28px;
    color : #B1B1B1;
    margin: 0 10px 0 0;
    float : left;
    line-height : 15px;
`

const A = styled.h6`
    width : 20px;
    height : 140px;
    font-weight :bold;
    font-size : 28px;
    color : #B1B1B1;
    margin :0 10px 0 0;
    float : left;
`
export default QnA;
