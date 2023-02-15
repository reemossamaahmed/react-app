import React from 'react';
import styled from 'styled-components';
import ImgBg from '../assets/banner-bg.png';
import Img from '../assets/header-img.svg';
import TypeWriterEffect from 'typewriter-effect';
import {BsArrowRightCircle} from 'react-icons/bs';
import Links from './Links';


import 'animate.css';


const BannerContainer = styled.div`
    width:100%;
    height:80vh;
    background:url(${ImgBg});
    background-repeat:no-repeat;
    background-size:cover; 
    background-position:center;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-left: 90px;
`
const IMG = styled.img`
    position:absolute;
    width:30%;
    right:50px;
`
const BUTTON = styled.button`
    color:#fff;
    background:linear-gradient(#422747,#121212,#322550);
    font-size:25px;
    letter-spacing:1px;
    font-weight:bold;
    padding:10px 15px;
    margin-top:90px;
    margin-bottom:90px;
    border:1px solid #ccc;
`

const Banner = (props) => {
    return (
        <BannerContainer id={props.id}>
            <IMG className='animate__animated animate__tada  animate__delay-2s animate__infinite' src={Img} alt='banner' />
            <div>
                <BUTTON>Welcome all in My Website</BUTTON>
                <h2 style={{ color: '#fff', fontSize: '50px', letterSpacing: '2px', fontWeight: 'bold' }}>Hi!,<br /> I'm Reem Ossama Ahmed Helmy, </h2>
                <div style={{ color: '#fff', fontSize: '50px', letterSpacing: '2px', fontWeight: 'bold' }}>
                    <TypeWriterEffect options={{
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        strings: [
                            'FrontEnd Developer.',
                            'BackEnd Developer.',
                            'FullStack Developer.'
                        ]
                    }}
                    />
                </div>
                <h3 style={{ color:'#aaa',letterSpacing:'2px',marginTop:'15px' }}>Hello Everyone, I have 2 years of Experience in Web Development</h3>
                <div style={{ fontSize:'20px',color:'#fff',letterSpacing:'2px',margin:'50px 0' }}>Let's Connect<Links href='#contact'><BsArrowRightCircle style={{ fontSize:'28px' }}/></Links></div> 
            </div>


        </BannerContainer>
    )
}

export default Banner;
