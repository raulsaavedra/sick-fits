import React from 'react';
import SingleProduct from '../../components/SingleProduct';

interface IQuery {
  id: string;
}

export default function ProductPage({ query }: { query: IQuery }) {
  return (
    <div>
      <SingleProduct id={query.id} />
    </div>
  );
}
