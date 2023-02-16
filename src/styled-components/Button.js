import React from 'react'

import styled from 'styled-components';

const ButonStyle = styled.a`
    border:1px solid #fff;
    padding: 10px 15px;
    background-color:transparent;
    color:#fff;
    cursor:pointer;
    font-size:19px;
    text-decoration:none;
    &:hover{
        background-color:rgba(255,255,255,0.6);
        color:rgba(0,0,0,0.9);
        border:1px solid rgba(255,255,255,0.6);
    }
    
    @media only screen and (max-width: 995px)  {
        font-size:18px;
        padding:5px 14px;
        margin-left:95px;
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
