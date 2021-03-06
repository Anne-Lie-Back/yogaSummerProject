import React from 'react'
import {Link} from 'react-router-dom'
import styled from '@emotion/styled'


import {css, jsx} from '@emotion/core'

const HeaderContainer = styled("div")`
    height: 4.37rem;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;

    & img {
        height: 3rem;
        margin: 1rem 4rem;
    };
`;



const Header = () =>{

    return(
        <HeaderContainer>
            <Link to = '/'>
                <img src={require('../assets/images/logotype.text.white.png')} />
            </Link>
        </HeaderContainer>
    )
}

export default Header