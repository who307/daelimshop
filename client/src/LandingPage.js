import React, { Component, useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import axios from "axios";
import { Icon, Col, Card, Row, Carousel } from 'antd';
import Meta from 'antd/lib/card/Meta';
import ImageSlider from './ImageSlider';
import Checkbox from './CheckBox';
import { continents, price } from './Datas';
import styled from 'styled-components';


function LandingPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState(0)
    const [Filters, setFilters] = useState({
        continents: [],
        price: []
    })

    useEffect(() => {

        let body = {
            skip: Skip,
            limit: Limit
        }

        getProducts(body)

    }, [])

    const getProducts = (body) => {
        axios.post('/api/product/products', body)
            .then(response => {
                if (response.data.success) {
                    if (body.loadMore) {
                        setProducts([...Products, ...response.data.productInfo])
                    } else {
                        setProducts(response.data.productInfo)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert(" 상품들을 가져오는데 실패 했습니다.")
                }
            })
    }

    const renderCards = Products.map((product, index) => {

        return <Col lg={6} md={8} xs={24} key={index}>
            <Cards>
                {<a href={`/product/${product._id}`} >
                    <Img>
                        <ImageSlider images={product.images} />
                    </Img>
                </a>}
                <ProductAccount>
                    <ProductTitle>
                        {product.title}
                    </ProductTitle>
                    <Price>{product.price}원</Price>
                </ProductAccount>
                {/* <Meta
                    title={product.title}
                    description={`${product.price}원`}
                /> */}
            </Cards>
        </Col>
    })

    const showFilteredResults = (filters) => {

        let body = {
            skip: 0,
            limit: Limit,
            filters: filters
        }

        getProducts(body)
        setSkip(0)
    }

    const handlePrice = (value) => {
        const data = price;
        let array = [];

        for (let key in data) {
            if (data[key]._id === parseInt(value, 10)) {
                array = data[key].array;
            }
        }
        return array;
    }

    const handleFilters = (filters, category) => {

        const newFilters = { ...Filters }

        newFilters[category] = filters

        console.log('filters', filters)

        if (category === "price") {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues
        }
        showFilteredResults(newFilters)
        setFilters(newFilters)
    }

    return (
        <Container>
            <CategoryTitle>카테고리별 상품</CategoryTitle>
            <CategoryTab>
                <CategoryList>
                    <Checkbox list={continents} handleFilters={filters => handleFilters(filters, "continents")} />
                </CategoryList>
            </CategoryTab>
            {/* 
            {/* Search */}

            {/* <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto' }}>
                <SearchFeature
                    refreshFunction={updateSearchTerm}
                />
            </div>  */}

            {/* Cards */}

            <Card>
                <CardDiv>
                    <SecDiv>
                        {renderCards}
                    </SecDiv>
                </CardDiv>
            </Card>


            <br />


        </Container>
    )
}
const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
  height :500px;
  
  
  > div {
    width: 100%;
  }
`;

const CardDiv = styled.div `
width: 1200px;
margin: 0 auto;
`
const SecDiv = styled.div `
  display: flex;
  flex-wrap: wrap;

`

const CategoryTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  float: left;
  width: 100%;
  padding-bottom: 20px;
  display: flex;
`;

const CategoryTab = styled.div`
  width: 100%;
  display: flex;
`;

const CategoryList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

const Cards = styled.div`
    width: 225px;
    height: 290px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin-bottom: 20px;
    margin-right: 18.5px;
`
const Img = styled.div`
    width: 225px;
    height: 190px;

    div {
        height: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
`

const ProductAccount = styled.div`
  padding: 20px 15px;
`;

const ProductTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 15px;
`;
const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 24px;
  font-weight: bold;
`;




export default LandingPage