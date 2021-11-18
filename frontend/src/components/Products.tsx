import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import { TProduct } from '../../lib/types/codegen';
import { styled } from '../stitches';
import { SHeadingPrimary, SHeadingSecondary, SText } from './Base/Typography';
import Product from './Product';

const ALL_PRODUCTS_QUERY = gql`
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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <SProductList>
        {data.products.map((product: TProduct) => (
          <Product product={product} key={product.id} />
        ))}
      </SProductList>
    </div>
  );
}