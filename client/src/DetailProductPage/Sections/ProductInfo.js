import React from 'react'
import { Button, Descriptions } from 'antd';
import { useDispatch } from 'react-redux';
function ProductInfo(props) {
    const dispatch = useDispatch();



    return (
        <div>
            <Descriptions title="상품정보">
                <Descriptions.Item label="가격 :">{props.detail.price}</Descriptions.Item>
                <br />
                <Descriptions.Item label="이미지 :">{props.detail.image}</Descriptions.Item>
                {/* <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item> */}
                {/* <Descriptions.Item label="조회수">{props.detail.views}</Descriptions.Item> */}
                <Descriptions.Item label="상품설명 : ">{props.detail.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            


        </div>
    )
}

export default ProductInfo
