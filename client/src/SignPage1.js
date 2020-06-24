import React, { Component } from "react";
import styled from "styled-components";
import close from "./icon/clear-24px.svg";


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

const SignDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media all and (min-width: 1024px) {
    min-height: 900px;
  }
`;

const Backgroud = styled.div`
    width: 100%;  
    height: 100%;
    background: rgba(0, 0, 0, .3);
    position: fixed;
    top: 0;
    left: 0;
  `

const SignBorder = styled.div`
  width : 800px;
  height : 900px;
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

class SignPage1 extends React.Component {
  render() {
    const Paging = [];
    for (var i = 0; i < 2; i++) {
      if (i === 0) {
        Paging.push(<Oval key={i} />);
      } else {
        Paging.push(<Circle key={i} />);
      }
    }

    let check = false;
    const chk = document.getElementsByName("checking");
    const allCheckBtn = document.getElementsByName("allCheckBtn");
    const sign2 = this.props.sign2_Open;

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
        if (chk[0].checked && chk[1].checked) {
          check = true;
        } else {
          check = false;
        }
      }

      if (!check) {
        alert("모든 약관에 동의해 주세요.");
        return false;
      } else {
        this.props.sign2_Open();
      }
    };

    return (
      <Container>
        <SignDiv>
          <Backgroud onClick={this.props.sign1_Open} />
          <SignBorder>
            <Close onClick={this.props.sign1_Open}><img src="./icon/clear-24px.svg" alt="" /></Close>
            <PagingDiv>{Paging}</PagingDiv>
            <Subtitle>약관에 동의해 주세요</Subtitle>
            <Step>STEP 01</Step>
            <form>
              <AgreeDiv>
                <TermsFont>이용약관(필수)</TermsFont>
                <Textarea readOnly row="4">
                  제1조(목적)

                  본 회원약관은 DJJ(이하 '갑'라 한다)이 운영하는 인터넷관련 서비스(이하 '서비스'라 한다)를 이용함에 있어 관리자와 이용자(이하 '회원'라 한다)의 권리, 의무 및 책임사항을 규정함을 목적으로 한다.

                  제2조 (약관의 효력)

                  1.본 약관은 '갑'에 회원 가입 시 회원들에게 통지함으로써 효력을 발생합니다.

                  2.'갑'은 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.

                  3.약관의 변경사항 및 내용은 '갑'의 홈페이지에 게시하는 방법으로 공시합니다.


                  제3조 (약관 이외의 준칙)

                  이 약관에 명시되지 않은 사항이 전기 통신 기본법, 전기통신 사업법, 기타 관련 법령에 규정되어 있는 경우 그 규정에 따릅니다.


                  제4조 (이용계약의 체결)

                  회원 가입 시 회원 약관 밑에 있는 동의버튼을 누르면 약관에 동의하여 이 계약이 체결된 것으로 간주한다.


                  제5조 (용어의 정의)

                  이 약관에서 사용하는 용어의 정의는 다음과 같습니다.

                  1.회원: '갑'과 서비스 이용에 관한 계약을 체결한 자

                  2.아이디(ID): 회원 식별과 회원의 서비스 이용을 위하여 회원이 선정하고 '갑'이 승인하는 문자와 숫자의 조합

                  3.비밀번호: 회원이 통신상의 자신의 비밀을 보호하기 위해 선정한 문자와 숫자의 조합



                  제6조 (이용신청)

                  1.회원 가입은 온라인으로 가입신청 양식에 기록하여 '갑'에 제출함으로써 이용신청을 할 수 있습니다.

                  2.가입희망 회원은 반드시 자신의 본명 및 주민등록번호로 이용신청을 하여야 하며, 1개의 ID만 신청을 할 수 있습니다.



                  제7조 (회원가입의 승낙)

                  '갑'의 회원 가입 신청 양식에 가입 희망 회원이 인터넷으로 제6조와 같이 신청하면 '갑'은 바로 가입을 승인하여 서비스를 이용할 수 있다.


                  제8조(회원가입 신청거절 및 강제 탈퇴)

                  1. '갑'은 타인의 명의나 주민등록번호를 도용하여 회원가입신청을 할 경우 회원가입신청을 거절할 수 있다.
                  2. 회원가입신청이 승인이 된 후에도 허위사실의 기재가 발각되거나 '갑'의 명예를 회손시키거나 음란물이나 불건전한 내용을 게재할 경우 회원의 자격을 강제 탈퇴시킬 수 있다.


                  제9조 (서비스 제공의 중지)

                  '갑'은 다음 각 호의 1에 해당하는 경우 서비스의 제공을 중지할 수 있습니다

                  1.설비의 보수 등을 위하여 부득이한 경우

                  2.전기통신사업법에 규정된 기간통신사업자가 전기통신서비스를 중지하는 경우

                  3.기타 '갑'이 서비스를 제공할 수 없는 사유가 발생한 경우.


                  제10조 ('갑'의 의무)

                  1. '갑'은  계속적, 안정적으로 서비스를 제공할 수 있도록 최선의 노력을 다하여야 합니다.


                  2.'갑'은 항상 회원의 신용정보를 포함한 개인신상정보의 보안에 대하여 관리에 만전을 기함으로서 회원의 정보보안에 최선을 다하여야 합니다.


                  제11조 (개인정보보호)

                  1.'갑'은 이용자의 정보수집시 서비스의 제공에 필요한 최소한의 정보를 수집합니다.

                  2.제공된 개인정보는 당해 이용자의 동의없이 목적외의 이용이나  제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 '갑'이 집니다. 다만, 다음의 경우에는 예외로 합니다.
                  ①통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우
                  ②전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가 있는 경우
                  ③범죄에 대한 수사상의 목적이 있거나 정보통신윤리 위원회의 요청이 있는 경우
                  ④기타 관계법령에서 정한 절차에 따른 요청이 있는 경우


                  3.회원은 언제든지 '갑'이 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 '갑'은 이에 대해 지체없이 처리합니다.



                  제12조 (회원의 의무)

                  1.회원은 관계법령, 이 약관의 규정, 이용안내 및 주의사항 등 '갑'이 통지하는 사항을 준수하여야 하며, 기타 '갑'의 업무에 방해되는 행위를 하여서는 안됩니다.

                  2.회원은 '갑'의 사전 승낙 없이 서비스를 이용하여 어떠한 영리 행위도 할 수 없습니다.

                  3.회원은 서비스를 이용하여 얻은 정보를 '갑'의 사전 승낙 없이 복사, 복제, 변경, 번역, 출판,방송 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없습니다.

                  4.회원은 이용신청서의 기재내용 중 변경된 내용이 있는 경우 서비스를 통하여 그 내용을 '갑'에게 통지하여야 합니다.

                  5.회원은 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 안됩니다.
                  ①다른 회원의 아이디(ID)를 부정 사용하는 행위
                  ②범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위
                  ③선량한 풍속, 기타 사회질서를 해하는 행위
                  ④타인의 명예를 훼손하거나 모욕하는 행위
                  ⑤타인의 지적재산권 등의 권리를 침해하는 행위
                  ⑥해킹행위 또는 컴퓨터바이러스의 유포행위
                  ⑦타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로 전송 또는 타 사이트를 링크하는 행위
                  ⑧서비스의 안전적인 운영에 지장을 주거나 줄 우려가 있는 일체의 행위
                  ⑨기타 관계법령에 위배되는 행위
                  ⑩게시판 등 커뮤니티를 통한 상업적 광고홍보 또는 상거래 행위


                  제13조 (게시물 또는 내용물의 삭제)

                  '갑'은 서비스의 게시물 또는 내용물이 제12조의 규정에 위반되거나 '갑' 소정의 게시기간을 초과하는 경우 사전 통지나 동의 없이 이를 삭제할 수 있습니다.


                  제14조 (게시물에 대한 권리·의무)

                  게시물에 대한 저작권을 포함한 모든 권리 및 책임은 이를 게시한 회원에게 있습니다.


                  제15조 (양도금지)

                  회원이 서비스의 이용권한, 기타 이용계약상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.


                  제16조 (계약해지 및 이용제한)

                  1.회원이 이용계약을 해지하고자 하는 때에는 본인이 서비스 또는 전자 우편을 통하여 해지하고자 하는 날의 1일전까지 (단, 해지일이 법정 공휴일인 경우 공휴일 개시 2일전까지)이를 '갑'에게 신청하여야 합니다.

                  2.'갑'은 해지 및 탈퇴를 한 회원이 다시 이용신청을 하는 경우 일정기간 그 승낙을 제한할 수 있습니다.




                  제17조 (면책·배상)

                  1.'갑'은 회원이 서비스에 게재한 정보, 자료, 사실의 정확성, 신뢰성 등 그 내용에 관하여는 어떠한 책임을 부담하지 아니하고,  회원은 자기의 책임아래 서비스를 이용하며, 서비스를 이용하여 게시 또는 전송한 자료 등에 관하여 손해가 발생하거나 자료의 취사 선택, 기타서비스 이용과 관련하여 어떠한 불이익이 발생 하더라도 이에 대한 모든 책임은 회원에게 있습니다.

                  2.'갑'은 제12조의 규정에 위반하여 회원간 또는 회원과 제3자간에 서비스를 매개로 하여 물품거래 등과 관련하여 어떠한 책임도 부담하지 아니하고, 회원이 서비스의 이용과 관련하여 기대하는 이익에 관하여 책임을 부담하지 않습니다.

                  3.회원 아이디(ID)와 비밀번호의 관리 및 이용상의 부주의로 인하여 발생 되는 손해 또는 제3자에 의한 부정사용 등에 대한 책임은 모두 회원에게 있습니다.

                  4.회원이 제12조, 기타 이 약관의 규정을 위반함으로 인하여 '갑'이 회원 또는 제3자에 대하여 책임을 부담하게 되고, 이로써 '갑'에게 손해가 발생하게 되는 경우, 이 약관을 위반한 회원은 '갑'에게  발생하는 모든 손해를 배상하여야 하며, 동 손해로부터 '갑'을 면책시켜야 합니다.




                  제18조 (분쟁의 해결)

                  1.'갑'과 회원은 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 하여야 합니다.

                  2.1항의 규정에도 불구하고 분쟁으로 인하여 소송이 제기될 경우 소송은 '갑'의 소재지를 관할하는 법원의 관할로 합니다.


                  부  칙

                  제 1 조 (시행일) 이 약관은 2020년 6월 17일부터 시행한다.
              </Textarea>

                <Label>
                  <CheckAgree name="checking" />
                약관에 동의 합니다.
              </Label>
              </AgreeDiv>
              <AgreeDiv>
                <TermsFont>개인정보 처리 방침(필수)</TermsFont>
                <Textarea readOnly row="4">
                  대중장('https://DJJ.com'이하 '대중장')은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.

                  대중장('대중장') 은(는) 회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.

                  ○ 본 방침은부터 2020년 6월 17일부터 시행됩니다.


                  1. 개인정보의 처리 목적 대중장('https://DJJ.com'이하 '대중장')은(는) 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.

                  가. 홈페이지 회원가입 및 관리

                  회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 만14세 미만 아동 개인정보 수집 시 법정대리인 동의 여부 확인, 각종 고지·통지, 고충처리, 분쟁 조정을 위한 기록 보존 등을 목적으로 개인정보를 처리합니다.


                  나. 민원사무 처리

                  민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지 등을 목적으로 개인정보를 처리합니다.


                  다. 재화 또는 서비스 제공

                  서비스 제공 등을 목적으로 개인정보를 처리합니다.


                  라. 개인영상정보

                  범죄의 예방 및 수사 등을 목적으로 개인정보를 처리합니다.




                  2. 개인정보 파일 현황

                  1. 개인정보 파일명 : DJJ
                  - 개인정보 항목 : 비밀번호, 로그인ID, 학번 학과
                  - 수집방법 : 홈페이지
                  - 보유근거 : 근거
                  - 보유기간 : 1년
                  - 관련법령 : 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년




                  3. 개인정보의 처리 및 보유 기간

                  ① 대중장('대중장')은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의 받은 개인정보 보유,이용기간 내에서 개인정보를 처리,보유합니다.

                  ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.

                  1.홈페이지 회원가입 및 관리
                  홈페이지 회원가입 및 관리와 관련한 개인정보는 수집.이용에 관한 동의일로부터 1년까지 위 이용목적을 위하여 보유.이용됩니다.
                  -보유근거 : 근거
                  -관련법령 : 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년
                  -예외사유 :



                  4. 개인정보의 제3자 제공에 관한 사항

                  ① 대중장('https://DJJ.com'이하 '대중장')은(는) 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.

                  ② 대중장('https://DJJ.com')은(는) 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.


                  1.
                  - 개인정보를 제공받는 자 : DJJ
                  - 제공받는 자의 개인정보 이용목적 : 비밀번호, 로그인ID, 접속 IP 정보, 학과
                  - 제공받는 자의 보유.이용기간:



                  5. 개인정보처리 위탁

                  ① 대중장('대중장')은(는) 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.

                  1.
                  - 위탁받는 자 (수탁자) :
                  - 위탁하는 업무의 내용 :
                  - 위탁기간 :



                  ② 대중장('https://DJJ.com'이하 '대중장')은(는) 위탁계약 체결시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.

                  ③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.
                  6. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.

                  ① 정보주체는 대중장에 대해 언제든지 개인정보 열람,정정,삭제,처리정지 요구 등의 권리를 행사할 수 있습니다.
                  ② 제1항에 따른 권리 행사는대중장에 대해 개인정보 보호법 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 대중장은(는) 이에 대해 지체 없이 조치하겠습니다.
                  ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
                  ④ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제5항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
                  ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
                  ⑥ 대중장은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.



                  7. 처리하는 개인정보의 항목 작성

                  ① 대중장('https://DJJ.com'이하 '대중장')은(는) 다음의 개인정보 항목을 처리하고 있습니다.

                  1(홈페이지 회원가입 및 관리)
                  - 필수항목 : 비밀번호, 로그인ID, 학과
                  - 선택항목 :




                  8. 개인정보의 파기 DJJ('대중장')은(는) 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.

                  -파기절차
                  이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.

                  -파기기한
                  이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.

                  -파기방법
                  전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.



                  9. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항

                  ① 대중장 은 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠기(cookie)’를 사용합니다. ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다. 가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다. 나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구 인터넷 옵션 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다. 다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.


                  10. 개인정보 보호책임자 작성


                  ① 대중장(‘https://DJJ.com’이하 ‘대중장) 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.

                  ▶ 개인정보 보호책임자
                  성명 :문건후
                  직책 :홈페이지관리
                  직급 :관리
                  연락처 :01040544118, who307@naver.com,
                  ※ 개인정보 보호 담당부서로 연결됩니다.

                  ▶ 개인정보 보호 담당부서
                  부서명 :대중장
                  담당자 :문건후
                  연락처 :01040544118, ,
                  ② 정보주체께서는 대중장(‘https://DJJ.com’이하 ‘대중장) 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 대중장(‘https://DJJ.com’이하 ‘대중장) 은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.



                  11. 개인정보 처리방침 변경

                  ①이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.



                  12. 개인정보의 안전성 확보 조치 DJJ('대중장')은(는) 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.

                  1. 정기적인 자체 감사 실시
                  개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.
                </Textarea>
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
      </Container>
    );
  }
}

export default SignPage1;