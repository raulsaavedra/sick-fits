import React from 'react';
import UpdateProduct from '../../components/UpdateProduct';

type IQuery = {
  id: string;
};

export default function UpdatePage({ query }: { query: IQuery }) {
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
}
