import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components';
import axios from 'axios';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { Row, Col } from 'antd';

function DetailProductPage(props) {

    const productId = props.match.params.productId

    const [Product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })
            .catch(err => alert(err))
    }, [])



    return (
        <Container >

            <div >
                <h1>{Product.title}</h1>
            </div>

            <br />
            
                        <Div>
                        <ProductImage detail={Product} />
                        <ProductInfo detail={Product} />
                        </Div>
            </Container>

    )
}
const Div = styled.div `
  margin : auto;
`
const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
  height : 500px;
`

export default DetailProductPage
