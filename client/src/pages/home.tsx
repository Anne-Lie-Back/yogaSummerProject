
import React from 'react'
import styled from '@emotion/styled'
import HomeContent from '../components/HomeContent'

const HeaderContainer = styled('div')`
        width: 100%;
        position: relative;

        & img{
            width: 100%;
        }

        & h2 {
            position: absolute;
            font-size: 25px;
            top: 140px;
            width: 100%;
            text-align: center;
            padding: 2rem;
        }
`

function Home(){
    return (
        <>
            <HeaderContainer>
                <img src={require('../assets/images/yogasummer.hero.jpg')} alt="Woman sitting in lotus position and looking out at the ocean"/>
                <h2> Feel the Flow of Flower Yoga</h2>
            </HeaderContainer>
            <HomeContent/>
        </>
    )
}

export default Home