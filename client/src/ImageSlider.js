import React from 'react'
import { Icon, Col, Card, Row, Carousel } from 'antd';

function ImageSlider(props) {
    return (
        <div>
            {props.images.map((image, index) => (
                <div key={index}>
                    <img src={`http://localhost:5000/${image}`} />
                </div>
            ))}
        </div>
    )
}

export default ImageSlider
