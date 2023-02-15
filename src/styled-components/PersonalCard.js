import React from 'react'
import '../components/personalCard.css'
import IMG1 from '../assets/One.jpg';
import { Col, Container, Row } from 'react-bootstrap';

const Portfolio = () => {

    return (
        <Container >
            <Row className='justify-content-center'>
                <Col className='card' sm={2} md={4}>
                        <div className='img-box'>
                            <img src={IMG1} alt='img1' />
                        </div>
                        <div className='content'>
                            <div className='details'>
                                <h2>Reem Ossama<br /><span>Junior FullStack Developer</span></h2>
                                <div className='data'>
                                    <h3>342<br /><span>Posts</span></h3>
                                    <h3>120K<br /><span>Followers</span></h3>
                                    <h3>285<br /><span>Following</span></h3>
                                </div>
                                <div className='actionBtn'>
                                    <button>Follow</button>
                                    <button>Message</button>
                                </div>
                            </div>
                        </div>
                    </Col>
            </Row>
        </Container>
    )
}

export default Portfolio
