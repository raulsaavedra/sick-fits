import React from 'react';
import Link from 'next/link';
import Nav from './Nav';
import { styled } from '../stitches';

const SLogo = styled('h1', {
  width: 'fit-content',
  fontFamily: 'radnika_next',
  fontSize: '$5xl',
  marginLeft: '2rem',
  background: 'red',
  position: 'relative',
  zIndex: '2',
  transform: 'skew(-7deg)',
  a: {
    color: 'white',
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '0.5rem 1rem',
  },
});
const SHeader = styled('header', {
  padding: '1rem 2rem',
  maxWidth: '$extraLarge',
  margin: '0 auto',
});
const SBar = styled('div', {
  display: 'grid',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '10px solid black',
});
const SSubBar = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  borderBottom: '1px solid black',
  fontWeight: '700',
  color: '$black',
});

export default function Header() {
  return (
    <SHeader>
      <SBar>
        <SLogo>
          <Link href="/">Sick fits</Link>
        </SLogo>
      </SBar>
      <SSubBar>
        <p>Search</p>
      </SSubBar>
      <Nav />
    </SHeader>
  );
}
