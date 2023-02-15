import {React,useRef} from 'react';
import styled from 'styled-components';
import ImgBg from '../assets/Nepal.jpg';
import IMG from '../assets/undraw_feeling_proud_qne1.svg'
import Subscriber from './Subscriber';
const ContactContainer = styled.div`
    width:100%;
    height:100vh;
    background:url(${ImgBg});
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    display:flex;
    position:relative;
    @media only screen and (max-width: 800px)  {
        height:auto;
    }
`;

const ContactWrapper = styled.div`
    width:90%;
    display:flex;
    margin:0 auto;
    @media only screen and (max-width: 800px)  {
        flex-direction:column;
        justify-content:center;
    }
`

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Image = styled.img`
    width:55%;
`;

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Title = styled.h1`
    color:#ccc;
    font-size:50px;
    letter-spacing:2px;
    padding:20px;
    margin-top:60px;
    @media only screen and (max-width: 800px)  {
        padding:10px;
        margin-top:10px;
    }
`

const Form = styled.div`
    width:95%;
    height:auto;
    border-radius: 10px;
    background-color:transparent;
    display:flex;
    flex-direction:column;
    gap:12px;
    padding-bottom:15px;
`;

const InputContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
`;

const Input = styled.input`
    width:48%;
    border:1px solid #ccc;
    background-color: rgba(255,255,255,0.2);
    height:85px;
    border-radius: 20px;
    color:#fff;
    outline:none;
    padding: 0 20px;
    font-size:22px;
    &::placeholder{
        color:#ccc;
        padding: 0 20px;
        font-size:25px;
    }

    @media only screen and (max-width: 375px)  {
        &::placeholder{
        padding: 0 10px;
        font-size:18px;
    }
    }
`;

const TextArea = styled.textarea`
    width:98%;
    border:1px solid #ccc;
    background-color: rgba(255,255,255,0.2);
    height:15rem;
    border-radius: 20px;
    outline:none;
    color:#fff;
    padding: 20px 20px;
    font-size:22px;
    &::placeholder{
        color:#ccc;
        padding: 20px 20px;
        font-size:25px;
    }

    @media only screen and (max-width: 375px)  {
        &::placeholder{
        padding: 0 10px;
        font-size:18px;
    }
    }
`;

const Button = styled.button`
    border:none;
    outline:none;
    width:10rem;
    padding:18px 20px;
    border-radius: 10px;
    margin-left:15px;
    margin-top:15px;
    &:hover{
        background-color:rgba(0,0,0,0.6);
        color:#ccc;
    }
`
const Contact = (props) => {

    const inputOne = useRef(null);
    const inputFocusOne = ()=>{
        inputOne.current.style = `background-color:#000;color:#fff`;
    }
    const inputBlurOne = ()=>{
        inputOne.current.style = `background-color: rgba(255,255,255,0.2);color:#000`;
    }
    const inputTwo = useRef(null);
    const inputFocusTwo = ()=>{
        inputTwo.current.style = `background-color:#000;color:#fff`;
    }
    const inputBlurTwo = ()=>{
        inputTwo.current.style = `background-color: rgba(255,255,255,0.2);color:#000`;
    }
    const inputThree = useRef(null);
    const inputFocusThree = ()=>{
        inputThree.current.style = `background-color:#000;color:#fff`;
    }
    const inputBlurThree = ()=>{
        inputThree.current.style = `background-color: rgba(255,255,255,0.2);color:#000`;
    }
    const inputFour = useRef(null);
    const inputFocusFour = ()=>{
        inputFour.current.style = `background-color:#000;color:#fff`;
    }
    const inputBlurFour = ()=>{
        inputFour.current.style = `background-color: rgba(255,255,255,0.2);color:#000`;
    }
    const inputFive = useRef(null);
    const inputFocusFive = ()=>{
        inputFive.current.style = `background-color:#000;color:#fff`;
    }
    const inputBlurFive = ()=>{
        inputFive.current.style = `background-color: rgba(255,255,255,0.2);color:#000`;
    }
    return (
        <ContactContainer id={props.id}>
            <ContactWrapper>
                <Left>
                    <Image src={IMG} className='animate__animated animate__tada  animate__delay-2s animate__infinite' alt='ContactImage' />
                </Left>
                <Right>
                    <Form>
                        <Title>Get In Touch</Title>
                        <InputContainer>
                            <Input ref={inputOne} onFocus={inputFocusOne} onBlur={inputBlurOne} placeholder='First Name' />
                            <Input ref={inputTwo} onFocus={inputFocusTwo} onBlur={inputBlurTwo} placeholder='Last Name' />
                        </InputContainer>
                        <InputContainer>
                            <Input ref={inputThree} onFocus={inputFocusThree} onBlur={inputBlurThree} placeholder='Email Address' type='email' />
                            <Input ref={inputFour} onFocus={inputFocusFour} onBlur={inputBlurFour} placeholder='Phone No.' type='phone' />
                        </InputContainer>
                        <InputContainer>
                            <TextArea ref={inputFive} onFocus={inputFocusFive} onBlur={inputBlurFive} placeholder='Message' />
                        </InputContainer>
                        <Button>Send</Button>
                    </Form>
                </Right>
            </ContactWrapper>
            <Subscriber />
        </ContactContainer>
    )
}

export default Contact
