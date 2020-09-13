import React from 'react';
import styled from '@emotion/styled';
import {ThemeProvider} from 'emotion-theming';
import {theme} from '../../theme/theme';

import Button from '../Button'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 2rem 1rem;
    display: flex;
    text-align:center;
`

const CourseBoxSpecial = () => {
    const handleOnClick = () => {
        console.log('Special Box clicked!')
    }

    return(
        <ThemeProvider theme = {theme}>
            <Container>
                <p>
                Vi har även rullande 
                <br/>
                schema i vår yogastudio
                </p>
                <Button buttonType = "primary" title = {'Schema'} onClick = {handleOnClick}/>
            </Container>
        </ThemeProvider>
    )
}

export default CourseBoxSpecial