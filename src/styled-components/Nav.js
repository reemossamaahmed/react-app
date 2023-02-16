import {Container, Nav, Navbar} from 'react-bootstrap';
import Links from './Links';
import Button from './Button';
import { FaLinkedinIn } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';
import '../components/navbar/navbar.css';
import styled from 'styled-components';
const Icons = styled.div`
    display: flex;
    gap: 5px;
    margin: 0 100px;
    @media only screen and (max-width: 995px)  {
        flex-direction:column;
        margin-top:20px;
    }
`
const DivIcon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,255,255,0.1);
    width: 50px;
    height: 50px;
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

function NavBar() {
    return (
        <Navbar expand="lg" className="fixed-top" style={{ padding:'25px',backgroundColor:'rgba(0,0,0,0.3)' }}>
            <Container fluid>
                <Navbar.Brand href="#" style={{ color:'#fff',letterSpacing:'2px',fontSize:'50px' }}>REEM</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" style={{ background:'#ccc' }} />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Links href='#home'>Home</Links>
                    <Links href='#skills'>Skills</Links>
                    <Links href='#projects'>Projects</Links>
                    <Icons>
                        <DivIcon target='blank' href='https://www.linkedin.com/in/reem-ossama-bb0ba1235/'><FaLinkedinIn className='icon' /></DivIcon>
                        <DivIcon target='blank' href='https://www.facebook.com/reem.ossama.7370?mibextid=LQQJ4d'><GrFacebookOption className='icon' /></DivIcon>
                        <DivIcon target='blank' href='https://instagram.com/reemossama80?igshid=NDk5N2NlZjQ='><FiInstagram className='icon' /></DivIcon>
                    </Icons>
                    <Button href='#contact'>Let's Connect</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;