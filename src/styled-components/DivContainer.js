import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    position:relative;
`

const DivContainer = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default DivContainer;
