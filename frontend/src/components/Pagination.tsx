import { styled } from '@stitches/react';
import Head from 'next/head';
import Link from 'next/link';
import { perPage } from '../../config';
import { useProductsCountQuery } from '../../types/generated-queries';
import { SContainer } from './Base/SLayout';
import DisplayError from './Error';

const SPageNavWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '60px',
});
const SPageNav = styled('div', {
  display: 'flex',
  border: '2px solid $lightGray',
  alignItems: 'center',
  borderRadius: '15px',
});
const SPageNavItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '20px 20px',
  '&, a': {
    fontSize: '20px',
    fontWeight: '700',
    color: '$black',
  },
  '[aria-disabled="true"]': {
    opacity: '0.6',
    pointerEvents: 'none',
  },
  '&:not(:last-child)': {
    borderRight: '2px solid $lightGray',
  },
});
export default function Pagination({ page }: { page: number }) {
  const { data, loading, error } = useProductsCountQuery();
  if (loading) return <SContainer>Loading...</SContainer>;
  if (error)
    return (
      <SContainer>
        Error: <DisplayError error={error} />
      </SContainer>
    );
  const pageCount =
    data && data.productsCount ? Math.ceil(data.productsCount / perPage) : 0;
  return (
    <div>
      <Head>
        <title>
          Sick Fits - Page {page} of {pageCount}
        </title>
      </Head>
      <SContainer>
        <SPageNavWrapper>
          <SPageNav>
            <SPageNavItem>
              <Link href={`/products/${page - 1}`}>
                <a aria-disabled={page <= 1}>← Prev</a>
              </Link>
            </SPageNavItem>
            <SPageNavItem>
              Page {page} of {pageCount}
            </SPageNavItem>
            <SPageNavItem>{data?.productsCount} Items Total</SPageNavItem>
            <SPageNavItem>
              <Link href={`/products/${page + 1}`}>
                <a aria-disabled={page >= pageCount}>Next →</a>
              </Link>
            </SPageNavItem>
          </SPageNav>
        </SPageNavWrapper>
      </SContainer>
    </div>
  );
}
