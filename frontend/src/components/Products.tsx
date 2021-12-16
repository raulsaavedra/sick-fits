import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { perPage } from '../../config';
import { useProductsQuery } from '../../types/generated-queries';
import { styled } from '../stitches';
import { SContainer } from './Base/SLayout';
import DisplayError from './Error';
import Product from './Product/Product';

const SProductList = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '60px',
  marginBottom: '60px',
  '@bpLg': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@bpSm': {
    gridTemplateColumns: '1fr',
  },
});

export default function Products({ page }: { page: number }) {
  const router = useRouter();
  const { loading, error, data } = useProductsQuery({
    variables: {
      skip: page * perPage - perPage,
      take: perPage,
    },
    onCompleted: ({ products }) => {
      if (page > 1 && products && products.length === 0) {
        router.push({
          pathname: router.pathname,
          query: { page: page - 1 },
        });
      }
    },
  });

  if (loading)
    return (
      <SContainer>
        <p>Loading...</p>
      </SContainer>
    );

  if (error)
    return (
      <SContainer>
        Error: <DisplayError error={error} />
      </SContainer>
    );

  return (
    <SContainer>
      <SProductList>
        {data?.products?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </SProductList>
    </SContainer>
  );
}
