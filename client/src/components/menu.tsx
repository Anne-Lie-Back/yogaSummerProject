import React from 'react'
import { Link, useHistory, useLocation} from 'react-router-dom'
import styled from '@emotion/styled'

const MenuWrapper = styled('div')`
    background-color: #5c8ca1;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
    color: white;
    height: 1.9rem;
    font-weight: 400;

    & a{
            text-decoration: none;
            color: #ffffff;
            transition: color 0.4s ease-in;
        };
    & a:hover{
        color: #e6b2cc;
    }
`;
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
        <MenuWrapper>
            {menuItems.map((item, index) => 
                <Link to = {item.route} key = {`${item.label}'${index}`}> 
                    <p>{item.label}</p>
                </Link>
            )}
        </MenuWrapper>
    )
}

export default Menu