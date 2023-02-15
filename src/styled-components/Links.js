import React from 'react'
import styled from 'styled-components';

const Link = styled.a`
    text-decoration: none;
    color: #fff;
    font-size:25px;
    letter-spacing:1px;
    margin: 0 20px;
    &:hover{
        text-decoration:underline;
        color:#ccc;
    }

    @media only screen and (max-width: 995px)  {
        font-size:18px;
        margin: 10px 10px;
    }
`;

const Links = (props) => {
    return (
        <Link {...props}>
            {props.children}
        </Link>
    )
}

export default Links
