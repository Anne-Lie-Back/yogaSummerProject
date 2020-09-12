import React from 'react';
import styled from '@emotion/styled'

const ContactContainer = styled('div')`
    width: 100%;
    background-color: #5c8ca1;
    color: #ffffff;
    padding: 3rem;
    display: flex;
    justify-content: center;
`

const ContactFooter = () => {
    return(
        <ContactContainer>
            <p>A CONTACT AREA</p>
        </ContactContainer>
    )
}

export default ContactFooter