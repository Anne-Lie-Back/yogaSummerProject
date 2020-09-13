import React from 'react';
import styled from '@emotion/styled';
import {ThemeProvider} from 'emotion-theming';

import {theme} from '../../theme/theme';

const InfoBox = styled.div`
    width:100%;
    background-color: #ffffff90;
    height: 100%;
    padding: 2.5rem 2rem;

    & h3{
        color: ${theme.textColors.secondary};
        padding: 0 0 1.2rem 2rem;
    }

    & span{
        font-weight: 600;
    }
`

const InfoHome = () => {
    return(
        <ThemeProvider theme = {theme}>
            <InfoBox>
                    <h3>Var finner du energi?</h3>
                    <p><span>Vi erbjuder yogalektioner i många olika miljöer</span>, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore aliqua. Quis ipsum suspendisse ultrices gravida. Risus viverra maecenas accumsan lacus vel facilisis. </p>
            </InfoBox>
        </ThemeProvider>
    )
}

export default InfoHome;