import React from 'react'
import styled from '@emotion/styled'
import {ThemeProvider} from 'emotion-theming'
import {theme} from '../../theme/theme'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 5rem;
    justify-content: space-evenly;
    align-items: center;

    & .storyHeader{
        display: flex;
        flex-direction: column;
        color: ${theme.textColors.secondary}
    }

    & .storyHeader img{
        width: 100%;
        margin-left: -4rem;
    }

    & span{
        font-weight: 600;
    }
`

const Story = () => {
    return(
        <ThemeProvider theme = {theme}>
            <Container>
                <div className = "storyHeader">
                    <h2 className = "blueText">Känn lugnet</h2>
                    <img src={require('../../assets/images/yellow.square.jpg')} data-aos="fade-up" alt=""/>
                </div>
                <p><span> Lorem ipsum dolor sit amet </span>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>
                <p >
                    <span>Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                </p>
            </Container>
        </ThemeProvider>
    )
}

export default Story