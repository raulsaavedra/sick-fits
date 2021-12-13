import React, { ReactNode } from 'react';
import Header from './Header';

import { globalCss, styled } from '../stitches';

const SGlobal = globalCss({
  '@font-face': [
    {
      fontFamily: 'radnika_next',
      src: `url('/static/radnikanext-medium-webfont.woff2')`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
  ],

  html: {
    boxSizing: 'border-box',
  },
  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },
  body: {
    fontFamily:
      '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    padding: 0,
    margin: 0,
    lineHeight: 1,
    fontSize: '1.5rem',
  },
  a: {
    textDecoration: 'none',
    color: '$black',
  },
  'a:hover': {
    textDecoration: 'underline',
  },
  button: {
    fontFamily: 'radnika_next',
  },
});
const SInner = styled('div', {
  padding: '3rem 0rem',
});
export default function Page({ children }: { children: ReactNode }) {
  SGlobal();
  return (
    <div>
      <Header />
      <SInner>{children}</SInner>
    </div>
  );
}
