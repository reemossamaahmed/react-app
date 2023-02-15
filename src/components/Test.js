import React from 'react';
// import styled from 'styled-components'
import IMG from '../assets/One.jpg'
import './test.css';
const Test = () => {
    return (
        <div className='container3'>
            <div className='box'>
                <div className='content3'>
                    <img src={IMG} alt='img' />
                    <h2>Somenone Famous<br/><span>Full Stack Developer</span></h2>
                    <a href='#' target='self'>Hire me</a>
                </div>
            </div>
        </div>
    )
}

export default Test
