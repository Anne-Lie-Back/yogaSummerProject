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

    & i{
        color: ${theme.textColors.secondary};
        font-size: 2.5rem;
    }

    & i:hover{
        color: ${theme.textColors.onHover};
        cursor: pointer;
        transition: color 0.3s ease-in-out;
    }

    & p{
        font-size: 0.8rem;
    }

    & .iconWrapper{
        width: 350px;
        display:flex;
        justify-content: space-between;
    }

    & .copyrightWrapper{
        display:flex;
        width: 210px;
        justify-content: space-between;
        align-items: center;
    }

`

const Footer = () => {
    return(
        <ThemeProvider theme = {theme}>
            <FooterContainer>
                <div className = "iconWrapper">
                    <i className="far fa-envelope"></i>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
                </div>
                <div className = "copyrightWrapper">
                    <img src = {require('../assets/images/icon.white.png')} alt=""/>
                    <p className = "secondaryText">©2020 Flower Yoga</p>
                </div>
            </FooterContainer>
        </ThemeProvider>
    )
}

export default Footer