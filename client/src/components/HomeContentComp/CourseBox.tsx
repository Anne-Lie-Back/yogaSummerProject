import React from 'react'
import styled from '@emotion/styled'
import {ThemeProvider} from 'emotion-theming'

import {theme} from '../../theme/theme'

import Button from '../Button'

interface Props{
    title: string;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding: 2rem 1rem;

    & h4{
        color: ${theme.textColors.white};
        text-shadow:0 0 4px #000000;
        font-weight: 700;
        font-size: 45px;
    }
`

const CourseBox = (props:Props) => {

    const handleOnClick = () => {
        console.log('clicked!')
    }

    return(
        <ThemeProvider theme = {theme}>
            <Container>
                <h4>{props.title}</h4>
                <Button buttonType = "primary" title = "Läs mer" onClick = {handleOnClick}/>
            </Container>
        </ThemeProvider>
    )
}

export default CourseBox;