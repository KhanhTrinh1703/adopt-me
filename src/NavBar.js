import React, { useState } from 'react';
import {Link} from '@reach/router';
import {css, keyframes} from '@emotion/core';
import colors from './colors';

const spin = keyframes`
    to {
        transform: rotate(360deg)
    }
`

const NavBar = () => {
    const [padding] = useState(15);
    return (
    <header
        css={css`
            // background-color: ${colors.secondary};
            // padding: ${padding}px;
        `}
    >
        <Link to="/">Adopt Me!</Link>
        {/* <span role="img" aria-label="logo"
            css={css`
                display: inline-block;
                animation: 10s ${spin} linear infinite;
                &:hover{
                    animation: 1s ${spin} linear infinite reverse;
                    text-decoration: underline;
                }
            `}
        >
            T</span> */}
    </header>
    )
}

export default NavBar;