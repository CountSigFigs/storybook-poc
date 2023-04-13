/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import skipifyLogo from './assets/skipify-logo.png';

const buttonBaseStyles = css`
  font-family: 'Poppins';
  font-weight: 800;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  line-height: 19px;
  font-size: 19px;
  height: 53.93px;
  min-width: 293.63px;
  &:disabled {
    cursor: auto;
  }
  &:focus {
    outline: none !important;
    box-shadow: 0 0 4px rgba(1, 234, 211, 0.9);
  }
  &:hover {
    background-color: #444444;
  }
  &:disabled {
    background-color: #F3F3F3;
    color: #C4C4C4;
  }
`;

const buttonLightStyles = css`
  color: #FFF;
  background-color: #000000;
`;

const buttonDarkStyles = css`
  color: #000000;
  background-color: #FFF;
`;

const logoStyles = css`
  height: 18.98px;
  width: 19.24px;
  margin-right: 8px;
  position: relative;
  top: 2px;
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
      <img src={skipifyLogo} css={logoStyles} alt='skipify' />
      Buy Now
    </button>
  );
};
