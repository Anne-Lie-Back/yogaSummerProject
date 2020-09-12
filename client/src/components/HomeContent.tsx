import React from 'react';
import styled from '@emotion/styled';

import sideImageDesktop from '../assets/images/sideImage.desktop.jpg'
import moreInfoImage from '../assets/images/flowerBox.jpg'
import course1Image from '../assets/images/sea.jpg'
import course3Image from '../assets/images/forest.jpg'

const Wrapper = styled("div")`
    width: 100%;
    height: 80rem;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
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
        background-color: #ffffff;
    }

    & .courseIcon{
        grid-area: courseIcon;
        background-color: #ffffff;
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
        background-color: #ffffff;
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
        <Wrapper>
          <GridContainer>
                <div className = "sideImage">hej</div>
                <div className = "story">på</div>
                <div className = "courseIcon">dig</div>
                <div className = "moreInfo">din</div>
                <div className = "course1">kotte</div>
                <div className = "course2">bajs</div>
                <div className= "course3">korv</div>
            </GridContainer>  
        </Wrapper>
    )
}

export default HomeContent;