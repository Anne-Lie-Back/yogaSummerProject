
import React from 'react'
import styled from '@emotion/styled'
import HomeContent from '../components/HomeContent'
import {keyframes} from '@emotion/core'

const HeroContainer = styled('div')`
        width: 100%;
        position: relative;
        display: flex;

        & img{
            width: 100%;
        }

        & h1 {
            position: absolute;
            top: 140px;
            width: 100%;
            text-align: center;

            padding: 2rem;
            font-family: poppins, sans-serif;
            font-weight: 300;
            font-size: 30px;
            color: #e6b2cc;
            text-shadow:0 0 7px #ffffff;
            letter-spacing: 3px;
        }

        & h1 span{
            color: #5c8ca1;
        }
`

function Home(){
    return (
        <>
            <HeroContainer>
                <img src={require('../assets/images/yogasummer.hero.jpg')} alt="Woman sitting in lotus position and looking out at the ocean"/>
                <h1> Feel the Flow of <span>Flower Yoga</span></h1>
            </HeroContainer>
            <HomeContent/>
        </>
    )
}

export default Home