/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import skipifyLogo from './assets/Button-text-light.svg';
import darkModeSkipifyLogo from './assets/Button-text-dark.svg';

const buttonBaseStyles = css`
  border: 2px;
  border-radius: 60px;
  cursor: pointer;
  height: 52px;
  width: 209px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:disabled {
    cursor: auto;
    border: none;

    img {
      filter: invert(56%) sepia(28%) saturate(0%) hue-rotate(136deg) brightness(123%) contrast(114%);
    }
  }
  &:focus {
    outline: none !important;
    box-shadow: 0 0 4px rgba(1, 234, 211, 0.9);
  }
`;

const buttonLightStyles = css`
  background-color: #000000;
  &:hover {
    background-color: #444444;
    border: 2px solid #000000;
  }
  &:disabled {
    background-color: #F3F3F3;
    border: none;
  }
`;

const buttonDarkStyles = css`
  background-color: #FFF;
  &:hover {
    background-color: #F3F3F3;
  }
  &:disabled {
    background-color: #FEFEFE;
    border: 1px solid #F3F3F3;
  }
`;

const logoStyles = css`
  height: 19px;
  margin-top: 4px;
`;

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'light' | 'dark'
}
/**
 * Skipify Pay Button
 */
export const Button = ({
  variant = 'light',
  ...props
}: ButtonProps) => {
  const mode = variant === 'light' ? buttonLightStyles : buttonDarkStyles;

  return (
    <button
      type="button"
      css={[buttonBaseStyles, mode]}
      {...props}
    >
      <img 
        src={variant === 'dark' ? darkModeSkipifyLogo : skipifyLogo} 
        alt='Pay now'
        css={logoStyles}
      />
    </button>
  );
};
