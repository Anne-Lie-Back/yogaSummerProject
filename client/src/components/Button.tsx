import React from 'react';
import styled from '@emotion/styled';
import {ThemeProvider} from 'emotion-theming';
import {theme} from '../theme/theme'

interface Props{
    title: string;
    buttonType: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}



const Button = (props:Props) => {

    const ButtonStyle = styled.button`
        background-color: ${props.buttonType === "secondary"? theme.bgColors.special : theme.bgColors.accent};
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 2px;
        border-radius: 15px;
        width: 160px;
        height: 44px;
        border: 0;
        z-index: 2;

        &:hover{
            background-color: ${props.buttonType === "secondary"? theme.bgColors.accent : theme.bgColors.special};
            transition: background-color 0.3s ease-in-out;
            cursor: pointer;
        }
    `
    return(
        <ThemeProvider theme = {theme}>
            <ButtonStyle onClick = {props.onClick}>{props.title}</ButtonStyle>
        </ThemeProvider>
    )
}

export default Button