import React from 'react';
import {Link} from 'react-router-dom'
import styled from '@emotion/styled';
import {ThemeProvider} from 'emotion-theming'

import {theme} from '../theme/theme'

import Story from './HomeContentComp/Story'

import sideImageDesktop from '../assets/images/sideImage.desktop.jpg'
import moreInfoImage from '../assets/images/flowerBox.jpg'
import course1Image from '../assets/images/sea.jpg'
import course3Image from '../assets/images/forest.jpg'

const Wrapper = styled("div")`
    width: 100%;
    height: 80rem;
    display: flex;
    justify-content: center;
    background-color: ${theme.bgColors.primary};
`
const GridContainer = styled("div")`
    display: grid;
    width: 100%;
    max-width: 71.25rem;
    height: 42.5rem;
    grid-template-columns: 33%;
    grid-template-rows: 600px 50% 50%;
    grid-template-areas:
    "sideImage story story"
    "courseIcon moreInfo moreInfo"
    "course1 course2 course3";

    & .sideImage{
        grid-area: sideImage;
        background-image: url(${sideImageDesktop});
        background-size: cover;
        background-position: center;
    }

    & .story{
        grid-area: story;
        background-color: ${theme.bgColors.primary};
    }

    & .courseIcon{
        grid-area: courseIcon;
        background-color: ${theme.bgColors.primary};
        color: ${theme.textColors.primary};
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
    }

    & .courseIcon img{
        margin-bottom: 1rem;
    }

    & .courseIcon a{
        color: ${theme.textColors.primary};
    }

    & .courseIcon:hover{
        color: ${theme.textColors.onHover};
        transition: color 0.3s ease-in-out;
        cursor: pointer;
    }

    & .moreInfo{
        grid-area: moreInfo;
        background-image: url(${moreInfoImage});
        background-size: cover;
        background-position: center;

    }

    & .course1{
        grid-area: course1;
        background-image: url(${course1Image});
        background-size: cover;
        background-position: center;
    }

    & .course2{
        grid-area: course2;
        background-color: ${theme.bgColors.primary};
    }

    & .course3{
        grid-area: course3;
        background-image: url(${course3Image});
        background-size: cover;
        background-position: center;
    }
    
`
function HomeContent() {
    return(
        <ThemeProvider theme = {theme}>
            <Wrapper>
                <GridContainer>
                    <div className = "sideImage"></div>
                    <div className = "story">
                        <Story/>
                    </div>     
                        <Link to ="/courses" className = "courseIcon">     
                            <img src = {require('../assets/images/icon.color.png')} alt=" FlowerYoga Logotype"/>
                            <h3>Boka lektion</h3>  
                        </Link>
                    <div className = "moreInfo">din</div>
                    <div className = "course1">kotte</div>
                    <div className = "course2">bajs</div>
                    <div className= "course3">korv</div>
                </GridContainer>  
            </Wrapper>
        </ThemeProvider>
    )
}

export default HomeContent;