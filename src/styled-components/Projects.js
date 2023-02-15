import React from 'react'
import styled from 'styled-components'
import { NavLink, Outlet } from 'react-router-dom';

const Container = styled.div`
    width:100%;
    min-height:25vh;
    ${'' /* background:linear-gradient(#422747,#121212,#322550); */}
    background-color: rgba(20,20,20,1);
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const Title = styled.h2`
    color:#ddd;
    font-size:30px;
    letter-spacing:2px;
    font-weight:bold;
    padding:30px 0;
    @media only screen and (max-width: 375px)  {
        font-size:20px;
        letter-spacing:1px;
        font-weight:normal;
        padding:20px 0;
    }
`;
const Description = styled.p`
    color:#ddd;
    font-size:28px;
    letter-spacing:2px;
    @media only screen and (max-width: 375px)  {
        font-size:20px;
        letter-spacing:1px;
    }
`;


const Nav = styled.nav`
    width:40%;
    display:flex;
    justify-content:space-around;
    border:1px solid #fff;
    border-radius:22px;
    a{
        display:inline-block;
        width:100%;
        border-radius:20px;
        text-decoration:none;
        padding:10px 0;
        color:#fff;
        text-align:center;
        
    }
    .active{
        background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
    }
    @media only screen and (max-width: 375px)  {
        width:20em;
        margin-bottom:60px;
    }
`;
const Projects = (props) => {
    return (
        
        <Container id={props.id}>
            <Title>Projects</Title>
            <Description>You can see My Projects Here</Description>
            <Nav>
                    <NavLink to='/projects/'>Projects</NavLink>
                    <NavLink to='/projects/front'>Personal Data</NavLink>
                    <NavLink to='/projects/back'>data</NavLink>
            </Nav>
            <Outlet/>
        </Container>
    )
}

export default Projects
