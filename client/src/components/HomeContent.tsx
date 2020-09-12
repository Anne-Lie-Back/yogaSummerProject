import React from 'react';
import styled from '@emotion/styled'

const Wrapper = styled("div")`
    width: 100%;
    display: flex;
    justify-content: center;
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
        background-color: blue;
    }

    & .story{
        grid-area: story;
        background-color: purple;
    }

    & .courseIcon{
        grid-area: courseIcon;
        background-color: pink;
    }

    & .moreInfo{
        grid-area: moreInfo;
        background-color: yellow;
    }

    & .course1{
        grid-area: course1;
        background-color: green;
    }

    & .course2{
        grid-area: course2;
        background-color: lightcoral;
    }

    & .course3{
        grid-area: course3;
        background-color: lightgrey;
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