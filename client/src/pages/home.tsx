import React from 'react'
import HomeContent from '../components/HomeContent'

function Home(){
    return (
        <>
            <div style = {{position: 'relative'}}>
                <img src={require('../assets/images/yogasummer.hero.jpg')} style = {{width: '100%'}} alt=""/>
                <h2 style= {{position:'absolute', top: '23%', left: '25%', fontSize: '3rem', color: '#e6b2cc', fontWeight: 300}}>Feel the Flow of Flower Yoga</h2>
            </div>
            <HomeContent/>
        </>
    )
}

export default Home