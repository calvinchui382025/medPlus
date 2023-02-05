import { SvgIcon } from '@mui/material';
import React from 'react';
//======================================================

//======================================================

export const MedPlusLogoColor = '#015594';
//======================================================
export const MedPlusLogo = (props: any) => {
  return (
    <SvgIcon>
      {/* {...props} */}
      <g transform="translate(0.000000,22.000000) scale(0.15,-0.13000)"
        fill={MedPlusLogoColor} stroke="none">
        <path d="M35 135 c-16 -15 -25 -36 -25 -55 0 -42 14 -38 35 11 l19 41 17 -23
        c12 -17 18 -19 22 -8 5 11 9 10 21 -5 13 -16 16 -17 16 -4 0 24 -39 68 -61 68
        -11 0 -31 -11 -44 -25z"/>
        <path d="M42 63 c-27 -41 -22 -53 22 -53 44 0 70 28 57 61 -8 21 -10 22 -16 7
        -9 -22 -25 -24 -25 -4 0 28 -15 23 -38 -11z"/>
      </g>
    </SvgIcon>
  )
};