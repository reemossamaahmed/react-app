import React from 'react'

import styled from 'styled-components';

const ButonStyle = styled.a`
    border:1px solid #fff;
    padding: 15px 20px;
    background-color:transparent;
    color:#fff;
    cursor:pointer;
    font-size:22px;
    text-decoration:none;
    &:hover{
        background-color:rgba(0,0,0,0.6);
        color:#ccc;
        border:1px solid rgba(0,0,0,0.6);
    }
    
    @media only screen and (max-width: 995px)  {
        font-size:18px;
        padding:5px 20px;
        margin-left:50px;
        margin-top:10px;
    }
`;

const Button = (props) => {
    return (
        <ButonStyle {...props}>
            {props.children}
        </ButonStyle>
    )
}

export default Button
