import React from 'react';
import styled from 'styled-components';

const SubscriberContainer = styled.div`
    width:90%;
    height:300px;
    background-color:#fff;
    position:absolute;
    left:50%;
    bottom:-190px;
    transform:translateX(-50%);
    border-radius:40px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding: 0 20px;;
    @media only screen and (max-width: 800px)  {
        bottom:-320px; 
        padding:0 20px;
    }

    @media only screen and (max-width: 700px)  {
        flex-direction:column;
        height:200px;
        padding:10px;
    }

    @media only screen and (max-width: 375px)  {
        margin-bottom:100px;
    }
`;

const Left = styled.div``;
const Description = styled.p`
    font-size:25px;
    letter-spacing:2px;
    @media only screen and (max-width: 375px)  {
        font-size:15px;
        text-align:center
    }
`;
const Right = styled.div`
    
`;

const FormContainer = styled.div`
    border:2px solid rgba(0,0,0,0.4);
    border-radius:10px;
    width:25rem;
    padding:15px;
    display:flex;
    align-items:center;
    position:relative;
    @media only screen and (max-width: 375px)  {
        width:15rem;
    }
`;
const Input = styled.input`
    border:none;
    outline:none;
    font-size:20px;
    @media only screen and (max-width: 375px)  {
        font-size:15px;
    }
`;
const Button = styled.button`
    border:none;
    outline:none;
    padding:15px 25px;
    border-radius:10px;
    background:linear-gradient(#422747,#121212,#322550);
    color:#fff;
    position:absolute;
    right:5px;
    @media only screen and (max-width: 375px)  {
        padding:10px 15px;
    }
`;

const Subscriber = () => {
    return (
        <SubscriberContainer>
            <Left>
                <Description>Subscribe to our Newsletter & Never miss latest updates</Description>
            </Left>
            <Right>
                <FormContainer>
                    <Input placeholder='Email Address'/>
                    <Button>Submit</Button>
                </FormContainer>
            </Right>
        </SubscriberContainer>
    )
}

export default Subscriber
