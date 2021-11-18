import React from 'react';
import Link from 'next/link';
import { styled } from '../stitches';
import { TProduct } from '../../lib/types/codegen';
import formatMoney from '../../lib/formatMoney';
import { SText } from './Base/Typography';

const SProduct = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  position: 'relative',
  background: 'white',
  boxShadow: '$normal',
  paddingBottom: '20px',
});
const SProductTitle = styled('h4', {
  textBackground: true,
  fontSize: '$4xl',
  lineHeight: '1.3',
  fontWeight: 'bold',
  marginTop: '-40px',
});
const SProductPrice = styled('p', {
  textBackground: true,
  position: 'absolute',
  top: '-10px',
  right: '-10px',
  fontSize: '$3xl',
  fontWeight: 'bold',
  lineHeight: '1.2',
  letterSpacing: '0.04em',
});
const SProductImage = styled('div', {
  width: '100%',
  height: '300px',
  margin: '0 auto',
  img: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  },
});
const SLink = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  a: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    fontSize: '0',
  },
});
export default function Product({ product }: { product: TProduct }) {
  return (
    <SProduct>
      <SProductPrice>
        {product.price && formatMoney(product.price)}
      </SProductPrice>
      <SLink>
        <Link href={`/product/${product.id}`}>
          <a>Card Link</a>
        </Link>
      </SLink>
      <div>
        <SProductImage>
          <img
            src={`${product.photo?.image?.publicUrlTransformed}`}
            alt={`${product.photo?.altText}`}
          />
        </SProductImage>
      </div>
      <SProductTitle>{product.name}</SProductTitle>
      <SText css={{ flexGrow: '1', fontWeight: 'bold', margin: '0px 20px' }}>
        {product.description}
      </SText>
    </SProduct>
  );
}
