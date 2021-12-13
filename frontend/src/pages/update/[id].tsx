import React from 'react';
import UpdateProduct from '../../components/UpdateProduct';

interface IQuery {
  id: string;
}

export default function UpdatePage({ query }: { query: IQuery }) {
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
}
