import { createStitches } from '@stitches/react';

export const { styled, css, getCssText, keyframes, globalCss } = createStitches(
  {
    theme: {
      colors: {
        red: '#ff0000',
        black: '#2b2b2b',
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
      bpLg: '(max-width: 1280px)',
      bpMd: '(max-width: 1024px)',
      bpSm: '(max-width: 640px)',
      bpExSm: '(max-width: 425px)',
    },
    utils: {
      textBackground: (value: boolean) => {
        if (value === true) {
          return {
            color: 'white',
            background: '$red',
            width: 'fit-content',
            margin: '0 auto',
            padding: '2px 10px',
            textAlign: 'center',
            transform: 'skew(-5deg)',
          };
        }
        return {};
      },
      beforeBg: (value: string) => {
        if (value) {
          return {
            position: 'relative',
            '&::before': {
              background: value,
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            },
          };
        }
        return {};
      },
      beforeOpacity: (value: number) => {
        if (value) {
          return {
            '&::before': {
              opacity: value,
            },
          };
        }
        return {};
      },
    },
  }
);
