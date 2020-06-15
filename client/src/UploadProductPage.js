import React, { useState } from 'react'
import FileUpload from './FileUpload';
import styled from "styled-components";
import Axios from 'axios';

const Continents = [
    { key: 1, value: "의류" },
    { key: 2, value: "생활용품" },
    { key: 3, value: "디지털" },
    { key: 4, value: "뷰티" },
    { key: 5, value: "도서" },
    { key: 6, value: "기타" },

]

const ProductStates = [
    { key: 1, value: "중고" },
    { key: 2, value: "새상품" },

]

const Trades = [
    { key: 1, value: "교환불가" },
    { key: 2, value: "교환가능" }

]

const Deliveryway = [
    { key: 1, value: "직거래" },
    { key: 2, value: "택배착불" },
    { key: 3, value: "택배선불" }

]

function UploadProductPage(props) {

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Continent, setContinent] = useState(1)
    const [Images, setImages] = useState([])
    //
    const [ProductState, setProductState] = useState(1) // 상품상태
    const [Trade, setTrade] = useState(1)     // 교환
    const [Delivery, setDelivery] = useState(1)    //배송
    const [Area, setArea] = useState("")     //지역
    //

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }

    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }

    const continentChangeHandler = (event) => {
        setContinent(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const productstateChangeHandler = (event) => {
        setProductState(event.currentTarget.value)
    }

    const tradeChangeHandler = (event) => {
        setTrade(event.currentTarget.value)
    }

    const deliveryChangeHandler = (event) => {
        setDelivery(event.currentTarget.value)
    }

    const areaChangeHandler = (event) => {
        setArea(event.currentTarget.value)
    }

    

    const submitHandler = (event) => {
        event.preventDefault();
        


        if (!Title || !Description || !Price || !Continent || !Images || !ProductState || !Trade || !Delivery || !Area) {
            return alert(" 모든 정보를 입력해주세요.")
        }


        //서버에 채운 값들을 request로 보낸다.

        const body = {
            //로그인 된 사람의 ID 
            writer: window.localStorage.getItem('userId'),
            title: Title,
            description: Description,
            price: Price,
            images: Images,
            continents: Continent,
            productState: ProductState,
            trade : Trade,
            delivery : Delivery,
            area : Area
        }
        console.log("writer : " + body.writer)

        Axios.post('/api/product', body)
            .then(response => {
                if (response.data.success) {
                    alert('상품 업로드에 성공 했습니다.')
                    props.history.push('/')
                } else {
                    alert('상품 업로드에 실패 했습니다.')
                }
            })
    }


    return (


        <Div>
            <Upload1>
                기본정보
                <H5>* 필수항목</H5>
            </Upload1>

            <form onSubmit={submitHandler}>

                <ImgTitle><h5>*</h5>이미지 등록</ImgTitle>
                
                    <FileUpload refreshFunction={updateImages} />
                
                <br />
                <Container>
                    <Select>
                        <Label><h5>*</h5>카테고리</Label>

                        <select onChange={continentChangeHandler} value={Continent}>
                            {Continents.map(item => (
                                <option key={item.key} value={item.key}> {item.value}</option>
                            ))}
                        </select>
                    </Select>
                    <br />
                    
                    <Select>
                        <Label><h5>*</h5>상품 상태</Label>

                        <select onChange={productstateChangeHandler} value={ProductState}>
                            {ProductStates.map(item => (
                                <option key={item.key} value={item.key}> {item.value}</option>
                            ))}
                        </select>
                    </Select>
                    <br />             
                    <Select>
                        <Label><h5>*</h5>교환 여부</Label>

                        <select onChange={tradeChangeHandler} value={Trade}>
                            {Trades.map(item => (
                                <option key={item.key} value={item.key}> {item.value}</option>
                            ))}
                        </select>
                    </Select>
                    <br />        
                    <Select>
                        <Label><h5>*</h5>배송</Label>

                        <select onChange={deliveryChangeHandler} value={Delivery}>
                            {Deliveryway.map(item => (
                                <option key={item.key} value={item.key}> {item.value}</option>
                            ))}
                        </select>
                    </Select>
                    <br />

                    <Maintitle>
                    <Label><h5>*</h5>거래 지역</Label>
                    <Input onChange={areaChangeHandler} value={Area} />
                    </Maintitle>
                    <br />

                    <Maintitle>
                    <Label><h5>*</h5>제목</Label>
                    <Input onChange={titleChangeHandler} value={Title} />
                    </Maintitle>
                    <br />

                    <Contents> 
                    <Label><h5>*</h5>상품 설명</Label>
                    <Textarea onChange={descriptionChangeHandler} value={Description} />
                    </Contents>   
                    <br />
                    <br />
                    <Won>
                    <Label><h5>*</h5>가격(원)</Label>
                    <Input type="number" onChange={priceChangeHandler} value={Price} />
                    </Won>
                    <br />
                    <br />

                    <br />
                    <Button type="submit">
                        등록하기
                </Button>
                </Container>
            </form>
        </Div>

    )
}
const Div = styled.div`
    width : 1200px;
    margin : auto;
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

`

const Upload1 = styled.div`
    width : 1200px;
    height: 100px;
    font-size: 26px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-bottom: 2px solid rgb(30, 29, 41);
    margin-bottom : 40px;
    
`
const H5 = styled.h5`
    color :#0095c8;
    font-size : 18px;
    margin-left : 30px;
    
`

const ImgTitle = styled(H5.withComponent("h5"))`
    float : left;
    color : black;
    font-size : 20px;
    margin : 0;
    margin-bottom : 20px;
  >h5 {
      margin : 0 5px 0 0;
      color :#0095c8;
      float : left;
  }
`;
const Select = styled.div`
    width : 1200px;
    height: 140px;
    font-size: 26px;
    margin-top : 20px;
    border-bottom: 2px solid #c2c2c2;
    padding-bottom : 10px;
    &:hover
        :focus {
            border : 1px solid #0095c8;

        }
    >select {
        width : 250px;
        height : 60px;
        font-size : 18px;
        border-radius : 10px;
        padding-left : 10px;
    
    }
`
const Maintitle = styled.div`
    width : 1200px;
    height: 140px;
    font-size: 26px;
    margin-top : 20px;
    border-bottom: 2px solid #c2c2c2;
    padding-bottom : 20px;

`


const Won = styled.div`
    width : 1200px;
    height: 140px;
    font-size: 26px;
    margin-top : 20px;
    border-top: 2px solid #c2c2c2;
    padding-top : 40px;

`
const Label = styled.div`

    color : black;
    font-size : 20px;
    margin-bottom : 20px;
    font-weight : bold;
    >h5 {
      color :#0095c8;
      margin : 0 5px 0 0;
      float : left;
  }
`

const Container = styled.div`
    width : 1200px;
    text-align : left;

`
const Contents = styled.div` 
    margin-top : 25px;
`
const Textarea = styled.textarea`
    width : 1158px;
    height : 300px;
    font-size : 20px;
    resize :none;
    padding : 20px;
    border-radius : 10px;
    &:focus,
  :hover {
    border: 1px solid #0095c8;
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  }
`
const Input = styled.input`
    width : 300px;
    height : 40px;
    font-size : 20px;
    border-radius : 10px;
    border: 1px solid black;
    padding :10px;
    -webkit-appearance: none;
    &:focus,
  :hover {
    border: 1px solid #0095c8;
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  }
 `

const Button = styled.button`
  width: 150px;
  height : 40px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 32px;
  border-radius : 10px;
  background-color: #0095c8;
  color : white;
  float : right;
  &:focus,
  :hover {
    border : 1px solid white;
  }
  @media all and (max-width: 425px) {
    width: 270px;
    height: 35px;
  }
`;


export default UploadProductPage;