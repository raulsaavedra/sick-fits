import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import { TProduct } from '../../lib/types/codegen';
import { styled } from '../stitches';
import { SContainer } from './Base/SLayout';
import { SHeadingPrimary, SHeadingSecondary, SText } from './Base/STypography';
import Product from './Product/Product';

export const ALL_PRODUCTS_QUERY = gql`
  query Products {
    products {
      id
      name
      description
      price
      photo {
        image {
          encoding
          publicUrl
          publicUrlTransformed
        }
      }
    }
  }
`;

const SProductList = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '60px',
  '@bpLg': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@bpSm': {
    gridTemplateColumns: '1fr',
  },
});

export default function Products() {
  const { loading, error, data } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading)
    return (
      <SContainer>
        <p>Loading...</p>
      </SContainer>
    );

  if (error)
    return (
      <SContainer>
        <p>Error: {error.message}</p>
      </SContainer>
    );
  return (
    <SContainer>
      <SProductList>
        {data.products.map((product: TProduct) => (
          <Product product={product} key={product.id} />
        ))}
      </SProductList>
    </SContainer>
  );
}
