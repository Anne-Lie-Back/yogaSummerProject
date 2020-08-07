import React from 'react'
import { Link, useHistory, useLocation} from 'react-router-dom'


function Menu(){
    const history = useHistory()
    const menuItems = [
        {
            label: 'Om oss',
            route: '/about',
            onClick: () => history.push('/about')
        },
        {
            label: 'Kurser',
            route: '/courses',
            onClick: () => history.push('/courses')
        },
        {
            label: 'FAQ',
            route: '/faq',
            onClick: () => history.push('/faq')
        },
        {
            label: 'Kontakt',
            route: '/contact',
            onClick: () => history.push('/contact')
        },
    ]
    return (
        <div style = {{display: 'flex', flexDirection: 'row', background: 'blue', justifyContent:'space-around'}}>
            {menuItems.map((item, index) => 
                <Link to = {item.route} key = {`${item.label}'${index}`}>
                    <p style = {{color: 'white'}}>{item.label}</p>
                </Link>
            )}
        </div>
    )
}

export default Menu