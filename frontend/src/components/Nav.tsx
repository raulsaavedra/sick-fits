import React from 'react';
import Link from 'next/link';
import { styled } from '../stitches';

const SNav = styled('nav', {
  display: 'flex',
  gap: '10px',
  fontWeight: 'bold',
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
