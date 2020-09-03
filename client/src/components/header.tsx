import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <Link to = '/'>
            <h1 style = {{background: 'lightgreen', color: 'blue'}}>Miss L8 Yoga</h1>
        </Link>
    )
}

export default Header