import React from 'react';
import styled from '@emotion/styled'
import {ThemeProvider} from 'emotion-theming'
import {theme} from '../theme/theme'

const FooterContainer = styled('div')`
    height: 115px;
    width: 100%;
    max-width: 1236px;
    display: flex;
    background-color: ${theme.bgColors.primary};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    margin: 0 auto;
`

const Footer = () => {
    return(
        <ThemeProvider theme = {theme}>
            <FooterContainer>
                <p>A FOOTER</p>
            </FooterContainer>
        </ThemeProvider>
    )
}

export default Footer