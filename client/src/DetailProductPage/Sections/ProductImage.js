import React, { useState, useEffect } from 'react'
import ImageGallery from 'react-image-gallery';
import styled from "styled-components";


function ProductImage(props) {

    const [Images, setImages] = useState([])

    useEffect(() => {

        if (props.detail.images && props.detail.images.length > 0) {
            let images = []

            props.detail.images.map(item => {
                images.push({
                    original: `http://localhost:5000/${item}`,
                   
                })
            })
            setImages(images)
        }

    }, [props.detail])

    return (
        <Container>

        <Size>
            <ImageGallery items={Images} />
        </Size>

        </Container>
    )
}
const Container = styled.div`

width : 1200px;
height : 800px;

`
const Size = styled.div `
    float : left;
    margin-left : 100px;
    padding : 10px;

    img {
        width: 500px;
        height : 400px;
    }
`

export default ProductImage
