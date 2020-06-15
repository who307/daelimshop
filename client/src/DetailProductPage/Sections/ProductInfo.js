import React from 'react'
import { Button, Descriptions } from 'antd';
import { useDispatch } from 'react-redux';
function ProductInfo(props) {
    const dispatch = useDispatch();



    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price">{props.detail.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
                <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
                <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            


        </div>
    )
}

export default ProductInfo
