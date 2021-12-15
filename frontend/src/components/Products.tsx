import React from 'react';
import { perPage } from '../../config';
import { useAllProductsQuery } from '../../types/generated-queries';
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
  const { loading, error, data } = useAllProductsQuery({
    variables: {
      skip: page * perPage - perPage,
      take: perPage,
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
