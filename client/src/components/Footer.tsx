import React from 'react';
import styled from '@emotion/styled'

const FooterContainer = styled('div')`
    height: 115px;
    width: 100%;
    max-width: 1236px;
    display: flex;
    background-color: #ffffff;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    margin: 0 auto;
`

const Footer = () => {
    return(
        <FooterContainer>
            <p>A FOOTER</p>
        </FooterContainer>
    )
}

export default Footer