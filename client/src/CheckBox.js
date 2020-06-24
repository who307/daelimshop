import React, { useState } from 'react'
import { Collapse, Checkbox } from 'antd';
import styled from "styled-components";

const { Panel } = Collapse;

function CheckBox(props) {

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {
        //누른 것의 Index를 구하고 
        const currentIndex = Checked.indexOf(value)
        //전체 Checked된 State에서  현재 누른 Checkbox가 이미 있다면 
        const newChecked = [...Checked]

        // State 넣어준다. 
        if (currentIndex === -1) {
            newChecked.push(value)
            // 빼주고 
        } else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked)
        props.handleFilters(newChecked)
    }

    const renderCheckboxLists = () => props.list && props.list.map((value, index) => (
        <React.Fragment key={index} >
            <Label1>
                <Checkbox onChange={() => handleToggle(value._id)}
                    checked={Checked.indexOf(value._id) === -1 ? false : true} />
                <span>{value.name}</span>
            </Label1>
        </React.Fragment>
    ))

    return (
        <div>
            <Collapse defaultActiveKey={['0']} >
                {renderCheckboxLists()}
            </Collapse>
        </div>
    )
}

const Label1 = styled.label `
    >span {
        width: 50px;
        padding 20px;
        margin-right: 50px;
        font-size: 24px;
        :hover {
            font-weight: bold;
        }
    }
    >span:nth-child(6) {
        margin-right: 0;
    }

    input {
        display: none;
    }
`

export default CheckBox
