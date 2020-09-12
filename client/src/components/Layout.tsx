import React from 'react'

import {Global, css, jsx} from '@emotion/core'
import {ThemeProvider} from 'emotion-theming';
import { theme } from '../theme/theme'

const Layout = ({children}:any) => {

    return(
        <div>
            <ThemeProvider theme = {theme}>
                <Global 
                    styles = {css`
                        * {
                            box-sizing: border-box;
                            margin: 0;
                            padding: 0;
                        }
                        body {
                            background-color: orange;
                            font-family: ${theme.textFont.primary};
                        }
                    `}
                />
                {children}
            </ThemeProvider>
        </div>
        
    )
}

export default Layout
