import React from 'react';
import Pagination from '../../components/Pagination';
import Products from '../../components/Products';

type IQuery = {
  page: string;
};
export default function ProductsPage({ query }: { query: IQuery }) {
  const page = query.page ? parseInt(query.page) : 1;
  return (
    <div>
      <Pagination page={page} />
      <Products page={page} />
      <Pagination page={page} />
    </div>
  );
}
