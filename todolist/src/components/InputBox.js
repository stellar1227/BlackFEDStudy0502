import React, { Component, Fragment } from 'react';
import Icon from 'react-icons-kit';
import { checkmark } from 'react-icons-kit/ionicons';
import styled from 'styled-components';

const InputBox = styled.section `
    position:relative;
    padding:20px 150px 20px 20px;
`;

const Input = styled.input.attrs({
    type: 'text'
})`
    width:100%;
    height:40px;
    color:#333;
    display:block;
    margin-bottom:10px;
`;
const Button = styled.button.attrs({
    type:'button'
})`
    position:absolute;
    right:20px;
    top:20px;
    width:110px;
    height:110px;
    background:#53b3c3;
    color:#333;
    font-size:1.8rem;
    border:2px solid #333;
`;

const TextArea = styled.textarea`
    width:100%;
    height:60px;
`;
class InputBoxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <InputBox>

                <TextArea  placeholder="내용을 써보자"></TextArea>
                <Input placeholder="해시태그 써보자" />
                <Button>추가</Button>
            </InputBox>
        );
    }
};

export default InputBoxComponent;