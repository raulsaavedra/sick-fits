import React from 'react';
import Link from 'next/link';
import Nav from './Nav';
import { styled } from '../stitches';

const SHeader = styled('header', {
  padding: '0rem 2rem',
  maxWidth: '$extraLarge',
  margin: '0 auto',
  lineHeight: '2',
});
const SBar = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  '@bpMd': {
    flexDirection: 'column',
  },
  borderBottom: '10px solid black',
});
const SSubBar = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  borderBottom: '1px solid black',
  fontWeight: '700',
  color: '$black',
});
const SLogo = styled('h1', {
  width: 'fit-content',
  fontFamily: 'radnika_next',
  fontSize: '$5xl',
  marginLeft: '2rem',
  background: 'red',
  position: 'relative',
  zIndex: '2',
  transform: 'skew(-7deg)',
  '@bpMd': {
    margin: '0 auto',
    marginTop: '30px',
    fontSize: '$4xl',
    marginBottom: '40px',
  },
  a: {
    color: 'white',
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '0.5rem 1rem',
  },
});
export default function Header() {
  return (
    <SHeader>
      <SBar>
        <SLogo>
          <Link href="/">Sick fits</Link>
        </SLogo>
        <Nav />
      </SBar>
      <SSubBar>
        <p>Search</p>
      </SSubBar>
    </SHeader>
  );
}
