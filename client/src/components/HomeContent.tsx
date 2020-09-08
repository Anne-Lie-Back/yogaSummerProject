import React from 'react';
import styled from '@emotion/styled'

const GridContainer = styled("div")`
    display: grid;
    grid-template-columns: 100px 40px 40px;
    grid-template-rows: 50px 50px 50px;
    grid-template-areas:
    "sideImage story story"
    "courseIcon moreInfo moreInfo"
    "course1 course2 course3"
    ;

    & .sideImage{
        grid-area: 'sideImage';
        background-color: 'blue';
    }

    & .story{
        grid-area: 'story';
    }

    & .courseIcon{
        grid-area: 'courseIcon';
    }

    & .moreInfo{
        grid-area: 'moreInfo';
    }

    & .course1{
        grid-area: 'course1';
    }

    & .course2{
        grid-area: 'course2';
    }

    & .course3{
        grid-area: 'course3';
    }
    
`
function HomeContent() {
    return(
        <>
          <GridContainer>
                <div className = "sideImage">hej</div>
                <div className = "story">på</div>
                <div className = "courseIcon">dig</div>
                <div className = "moreInfo">din</div>
                <div className = "course1">kotte</div>
                <div className = "course2">bajs</div>
                <div className= "course3">korv</div>
            </GridContainer>  
        </>
    )
}

export default HomeContent;