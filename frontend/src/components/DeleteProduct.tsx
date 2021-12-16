import { ApolloCache, Cache } from '@apollo/client';
import React from 'react';
import { useDeleteProductMutation } from '../../types/generated-queries';
import { SButtonBorder } from './Base/SButton';
import { SText } from './Base/STypography';

function update(cache: ApolloCache<any>, payload: any) {
  cache.evict(cache.identify(payload.data.deleteProduct) as Cache.EvictOptions);
}
export default function DeleteProduct({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const [deleteProduct, { loading, error }] = useDeleteProductMutation({
    variables: { id },
    update,
  });
  return (
    <SButtonBorder
      as="button"
      onClick={() => {
        if (window.confirm('Are you sure you want to delete this product?')) {
          try {
            deleteProduct();
          } catch (error) {
            console.error(error);
          }
        }
      }}
    >
      <SText>{loading ? 'Deleting...' : children}</SText>
    </SButtonBorder>
  );
}
