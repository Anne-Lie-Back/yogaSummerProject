import React from 'react';
import styled from '@emotion/styled'
import {ThemeProvider} from 'emotion-theming';
import { theme } from '../theme/theme'

const ContactContainer = styled('div')`
    width: 100%;
    background-color: ${theme.bgColors.secondary};
    color: ${theme.textColors.white};
    padding: 3rem;
    display: flex;
    justify-content: center;
`

const ContactFooter = () => {
    return(
        <ThemeProvider theme = {theme}>
            <ContactContainer>
                <p>A CONTACT AREA</p>
            </ContactContainer>
        </ThemeProvider>
    )
}

export default ContactFooter