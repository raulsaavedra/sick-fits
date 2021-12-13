import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { TProduct } from '../../lib/types/codegen';
import { styled } from '../stitches';
import { SContainer } from './Base/SLayout';
import DisplayError from './Error';

export const SINGLE_PRODUCT_QUERY = gql`
  query SingleProduct($id: ID!) {
    product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

interface TSingleProductData {
  product: TProduct;
}
interface TSingleProductVars {
  id: string;
}
const SSingleProductGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '30px',
  alignItems: 'flex-start',
});
const SSingleProductImage = styled('img', {
  width: '100%',
  objectFit: 'cover',
});
export default function SingleProduct({ id }: { id: string }) {
  const { loading, error, data } = useQuery<
    TSingleProductData,
    TSingleProductVars
  >(SINGLE_PRODUCT_QUERY, {
    variables: { id },
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
        <DisplayError error={error} />
      </SContainer>
    );
  if (data) {
    return (
      <SContainer>
        <SSingleProductGrid>
          <SSingleProductImage
            src={data.product.photo?.image?.publicUrlTransformed ?? ''}
            alt={data.product.photo?.altText ?? ''}
          />
          <div>
            <h2>{data.product.name}</h2>
            <p>{data.product.description}</p>
          </div>
        </SSingleProductGrid>
      </SContainer>
    );
  }
  return null;
}
