import React from 'react';
import Link from 'next/link';
import { styled } from '../stitches';

const SNav = styled('nav', {
  display: 'flex',
  fontWeight: 'bold',
  flexWrap: 'wrap',
  gap: '30px',
  '@bpMd': {
    marginBottom: '25px',
    justifyContent: 'center',
    justifyItems: 'center',
  },
  a: {
    fontFamily: 'radnika_next',
    fontSize: '$xl',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    position: 'relative',
    gap: '30px',
    '&::before': {
      content: '',
      display: 'inline-block',
      background: '#cccccc75',
      transform: 'skew(-20deg)',
      width: '2px',
      height: '100%',
    },
  },
});
export default function Nav() {
  return (
    <SNav>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </SNav>
  );
}
