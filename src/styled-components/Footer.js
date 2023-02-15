import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import styled from 'styled-components';
import { FiInstagram } from 'react-icons/fi';


const DivIcon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,255,255,0.1);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border:1px solid #ccc;
    margin: 0 5px;
    cursor:pointer;
    &:hover{
        background-color:rgba(0,0,0,0.5);
    }
    
    @media only screen and (max-width: 995px)  {
        font-size:18px;
        width: 40px;
        height: 40px;
    }
`;

const FooterContainer = styled.div`
    background:linear-gradient(#422747,#121212,#322550);
    width:100%;
    height:32rem;
    padding:10px 30px;
    display:flex;
    justify-content:space-between;
    @media only screen and (max-width: 769px)  {
        flex-direction:column;
        justify-content:center;
    }
`;

const Left = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:end;
    @media only screen and (max-width: 769px)  {
        flex-direction:row;
        justify-content:center;
    }
`;

const Right = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:end;
    align-items:center;
    gap:40px;
`;

const Icons = styled.div`
    display:flex;
`;

const Logo = styled.h1`
    color:#fff;
    font-size:60px;
    letter-spacing:2px;
    font-weight:bold;
    cursor:pointer;
    padding-bottom:5px;
`;

const CopyRight = styled.p`
    color:#ccc;
    letter-spacing:1.5px;

`;
const Footer = () => {
    return (
        <FooterContainer>
            <Left>
                <Logo>
                    LOGO
                </Logo>
            </Left>
            <Right>
                <Icons>
                    <DivIcon target='blank' href='https://www.linkedin.com/in/reem-ossama-bb0ba1235/'><FaLinkedinIn className='icon' /></DivIcon>
                    <DivIcon target='blank' href='https://www.facebook.com/reem.ossama.7370?mibextid=LQQJ4d'><GrFacebookOption className='icon' /></DivIcon>
                    <DivIcon target='blank' href='https://instagram.com/reemossama80?igshid=NDk5N2NlZjQ='><FiInstagram className='icon' /></DivIcon>
                </Icons>
                <CopyRight>Copyright 2023. All Rights Reserved.</CopyRight>
            </Right>        
        </FooterContainer>
    )
}

export default Footer;
