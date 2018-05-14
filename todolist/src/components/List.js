import React, { Component, Fragment } from 'react';
import Icon from 'react-icons-kit';
import { checkmark } from 'react-icons-kit/ionicons';
import styled from 'styled-components';
import icoDone from '../styles/images/ico_status_done.png';
import icoReady from '../styles/images/ico_status_ready2.png';

const List = styled.article`
 
`;
const ListTitle = styled.h2`
    margin:0 0 20px 20px;
    padding:0 10px;
    font-size:1.8rem;
    line-height:1;
    display:inline-block;
    background:#faa199;
    border-radius:20% 30% 10% 15%;
`;

const ListItem = styled.li`
    padding:0 20px;
    margin-bottom:20px;
    display:flex;
`;

const NoItem = styled.li`
    text-align:center;
    font-size:2rem;
    color:#53b3c3
`;
const TaskInfo = styled.div`
    flex:1;
    margin-right:20px;
    border-bottom:2px dashed #333;
    padding:0 10px 10px;
    .contents{
        font-size:1.3rem;
    }
    .hash{
        color:#888;
    }
    text-decoration: ${props => props.isDone ? 'line-through' : 'none' }
`;
const Status = styled.button.attrs({
    type : "button"
})`
    width:50px;
    height:50px;
    line-height:50px;
    text-align:center;
    background: url(${props => props.isDone ? icoDone : icoReady }) no-repeat 0 0;
    color:${props => props.isDone ? '#fff' : '#333' };
    transform:rotate(0deg);
    &:hover{
        transform:rotate(360deg);
        transition : transform .5s;
    }
`;




class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <List>
                <ListTitle>I need to :</ListTitle>
                <ul>
                    <ListItem>
                        <TaskInfo>
                            <p class="contents">
                                영국문학의 이해 7강 학습
                            </p>
                            <p class="hash">#공부, #언어, #영어, #자기계발</p>
                        </TaskInfo>
                        <Status>대기</Status>
                    </ListItem>
                    <ListItem >
                        <TaskInfo  isDone={true}>
                            <p class="contents">
                                스트레칭 15분
                            </p>
                            <p class="hash">#운동, #매일매일, #다이어트, #자기계발</p>
                        </TaskInfo>
                        <Status  isDone={true}>
                            완료
                        </Status>
                    </ListItem>
                    <NoItem>할 일이 없당!</NoItem>
                </ul>
            </List>
        );
    }
};

export default ListComponent;