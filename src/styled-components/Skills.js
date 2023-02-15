import React from 'react';
import styled from 'styled-components';
import IMG1 from '../assets/meter1.svg';
import IMG2 from '../assets/meter2.svg';
import IMG3 from '../assets/meter3.svg';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

const Container = styled.div`
    width:100%;
    height:60vh;
    background:linear-gradient(#422747,#121212,#322550);
    position:relative;
`;
const SkillContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:rgba(0,0,0,0.8);
    width:80%;
    margin:100px auto;
    height:auto;
    border-radius:50px;
    padding:20px 0;
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    top:-30%;
    @media only screen and (max-width: 375px)  {
        width:90%;
        margin:100px auto;
        min-height:auto;
    }
`
const SkillTitle = styled.h1`
    color:#fff;
    font-size:60px;
    letter-spacing:2px;
    font-weight:bold;
    margin 20px 0;
    @media only screen and (max-width: 375px)  {
        font-size:30px;
        letter-spacing:1px;
        margin: 10px 0;
    }
`
const SkillDesc = styled.h3`
    color:#aaa;
    font-size:25px;
    letter-spacing:4px;
    margin-bottom :30px;
    @media only screen and (max-width: 375px)  {
        font-size:15px;
        letter-spacing:2px;
        margin-bottom: 20px;
    }
`

const ContainerPercent = styled.div`
    width:75%;
    display:flex;
    align-items: center;
    @media only screen and (max-width: 375px)  {
        width:100%;
    }
`
const ChildPercent = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        flex:1;
        
`

const Skills = (props) => {
    return (
        <Container>
            <SkillContainer id={props.id}>
                <SkillTitle>Skills</SkillTitle>
                <SkillDesc>You Can See Skills Here</SkillDesc>
                <ContainerPercent>
                    <Carousel breakPoints={breakPoints}>
                        <ChildPercent>
                            <img src={IMG1} alt='' />
                            <h5 style={{ color: '#fff', margin: '20px 0' }}>FrontEnd Developer</h5>
                        </ChildPercent>
                        <ChildPercent>
                            <img src={IMG2} alt='' />
                            <h5 style={{ color: '#fff', margin: '20px 0' }}>BackEnd Developer</h5>
                        </ChildPercent>
                        <ChildPercent>
                            <img src={IMG3} alt='' />
                            <h5 style={{ color: '#fff', margin: '20px 0' }}>FullStack Developer</h5>
                        </ChildPercent>
                        <ChildPercent>
                            <img src={IMG1} alt='' />
                            <h5 style={{ color: '#fff', margin: '20px 0' }}>FrontEnd Developer</h5>
                        </ChildPercent>
                        <ChildPercent>
                            <img src={IMG2} alt='' />
                            <h5 style={{ color: '#fff', margin: '20px 0' }}>BackEnd Developer</h5>
                        </ChildPercent>
                        <ChildPercent>
                            <img src={IMG3} alt='' />
                            <h5 style={{ color: '#fff', margin: '20px 0' }}>FullStack Developer</h5>
                        </ChildPercent>
                    </Carousel>
                </ContainerPercent>
            </SkillContainer>
        </Container>
    )
}

export default Skills;
