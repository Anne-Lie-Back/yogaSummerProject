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
                            background-color: ${theme.bgColors.primary};
                            font-family: ${theme.textFont.primary};
                        }
                        p{
                            font-weight: 300;
                            font-size: 16px;
                            letter-spacing: 2px;
                            line-height: 1.8rem;
                        }
                        a{
                            text-decoration: none;
                        }
                    `}
                />
                {children}
            </ThemeProvider>
        </div>
        
    )
}

export default Layout
