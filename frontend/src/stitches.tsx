import { createStitches } from '@stitches/react';

export const { styled, css, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      red: '#ff0000',
      black: '#393939',
      gray: '#3a3a3a',
      lightGray: '#e1e1e1',
      offWhite: '#ededed',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    sizes: {
      extraSmall: '425px',
      small: '640px',
      medium: '1020px',
      large: '1200px',
      extraLarge: '1440px',
    },
    shadows: {
      normal: '0 12px 24px 0 rgba(0,0,0,0.09)',
    },
  },
  media: {
    bpMd: '(max-width: 1024px)',
    bpSm: '(max-width: 640px)',
    bpExSm: '(max-width: 425px)',
  },
});
