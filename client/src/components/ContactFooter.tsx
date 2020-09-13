import React from 'react';
import styled from '@emotion/styled'
import {ThemeProvider} from 'emotion-theming';
import { theme } from '../theme/theme'

const ContactContainer = styled('div')`
    width: 100%;
    background-color: ${theme.bgColors.secondary};
    color: ${theme.textColors.white};
    display: flex;
    justify-content: center;

    & .contactWrapper {
        width: 100%;
        max-width: 71.25rem;
        padding: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    & p {
        color: ${theme.textColors.white};
        font-size: 0.8rem;
    }

    & span {
        font-weight: 600;
    }

    & .contactRow1 {
        width: 19.7rem;
    }

    & .contactRow2 {
        width: 19.7rem;
    }
`

const ContactFooter = () => {
    return(
        <ThemeProvider theme = {theme}>
            <ContactContainer>
                <div className = "contactWrapper">
                    <p className = "contactRow1">      
                        <span>Besök vår studio</span>
                        <br/>
                        Blomgatan 1
                        <br/>
                        123 45 Flomma
                        <br/>
                        <br/>
                        <span> Studions öppettider </span>
                        <br/>
                        sön - torsdag 17-21
                        <br/>
                        lördag 9-11
                    </p>
                    <p className = "contactRow2" >
                        <span> Telefontider 8-15 </span>
                        <br/>
                        070 123 1234
                        <br/>
                        <br/>
                        <br/>
                        Du kan altid nå oss via mail:
                        <br/>
                        <span> kontakt@floweryoga.se </span>
                        <br/>
                        Vi svarar så fort vi kan
                    </p>
                    <div className ="map"></div>
                </div>
            </ContactContainer>
        </ThemeProvider>
    )
}

export default ContactFooter