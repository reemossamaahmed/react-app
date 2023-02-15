import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/constract.jpg';
import IMG2 from '../../assets/printer.jpg';
import IMG3 from '../../assets/lab.jpg';

import { Col, Container, Row } from 'react-bootstrap';

const Portfolio = () => {

    const projects = [
        {
            title: "Penetronegypt Website",
            description: "Design & Development",
            imgUrl: IMG1,
        },
        {
            title: "HJM Website & MS",
            description: "Design & Development",
            imgUrl: IMG2,
        },
        {
            title: "Analysis laboratories & MS",
            description: "Design & Development",
            imgUrl: IMG3,
        },
    ];


    return (
        <Container>
            <Row className='justify-content-center my-5'>
                {projects.map((project, index) => {
                    return (<Col className='card my-5'key={index} sm={2} md={4}>
                        <div className='img-box'>
                            <img src={project.imgUrl} alt='img1' />
                        </div>
                        <div className='content'>
                            <div className='details'>
                                <h2>{project.title}<br /><span>Junior FullStack Developer</span></h2>
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
                    </Col>)
                })}
            </Row>
        </Container>
    )
}

export default Portfolio
