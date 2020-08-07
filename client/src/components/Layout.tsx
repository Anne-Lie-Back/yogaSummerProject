import React from 'react'

import {Global, css, jsx} from '@emotion/core'
//import {useTheme} from 'emotion-theming'

const Layout = ({children}:any) => {

    return(
        <div>
            <Global 
                styles = {css`
                    * {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }
                    body {
                        background-color: orange
                    }
                `}
            />
            {children}
        </div>
    )
}

export default Layout
