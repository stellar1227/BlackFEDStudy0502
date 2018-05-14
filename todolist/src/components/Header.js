import React, { Fragment } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Header = styled.header`
  padding:0 20px;
  height:205px;
  margin-bottom:20px;
`;
const AppTitle = styled.div`
   transform:rotate(-3deg);
   position:relative;
   margin-bottom:50px;
    h1{
        display:inline-block;
        font-size:2.8rem;
        border-bottom:2px solid #333;
        margin-bottom:5px;
    }
    p{
        position:relative;
        font-size:1.5rem;
        span{
            position:absolute;
            right:30px;
            top:30px;
            font-size:2rem;
            color:#53b3c3;
            &:before{
                content:'"';
                color:#de706e;
            }
            &:after{
                content:'"';
                color:#e3d154;
            }  
          
        }
    }
    &:before{
        content:":)";
        position:absolute;
        right:0px;
        top:40px;
        width:40px;
        height:40px;
        color:#fff;
        font-size:1.8rem;
        background:#53b3c3;
        border-radius:50%;
        text-align:center;
        transform:rotate(90deg);
    }
    &:after{
        content:":D";
        position:absolute;
        right:45px;
        top:15px;
        width:40px;
        height:40px;
        color:#fff;
        font-size:1.8rem;
        background:#fb9795;
        border-radius:50%;
        text-align:center;
        transform:rotate(90deg);
    }
`;


const Date = styled.time`
  font-size:2rem;
  color:#f59732;
  float:left;
`;

const Task = styled.span`
    font-size: 1.5rem;
    float:right;
    span{
        color:#fb9795;
        font-size:inherit;
        font-weight:700;
    }
`

const HeaderComponent = (props) => {
    return (
        <Header>
            <AppTitle>
                <h1>To-Do List!</h1>
                <p>
                    If I can complete this list today, I am
                    <span>
                        Awesome!
                    </span>
                </p>
            </AppTitle>
            <Date title="today">{moment().format('YYYY MMMM DD')}</Date>
            <Task>오늘 할일 <span>{3}</span>개 남았당!</Task>
        </Header>
    );
};

export default HeaderComponent;