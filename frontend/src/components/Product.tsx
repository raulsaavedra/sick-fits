import React from 'react';
import Link from 'next/link';
import { styled } from '../stitches';
import { TProduct } from '../../lib/types/codegen';
import formatMoney from '../../lib/formatMoney';
import { SText } from './Base/Typography/STypography';

const SProduct = styled('div', {
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  gap: '20px',
  position: 'relative',
  background: 'white',
  boxShadow: '$normal',
  paddingBottom: '20px',
});
const SProductContent = styled('div', {
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  gap: '20px',
  padding: '0 20px',
});
const SProductTitle = styled('h4', {
  textBackground: true,
  fontSize: '$4xl',
  lineHeight: '1.3',
  fontWeight: 'bold',
  marginTop: '-40px',
  pointerEvents: 'none',
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
  pointerEvents: 'none',
});
const SProductImage = styled('div', {
  position: 'relative',
  width: '100%',
  height: '300px',
  margin: '0 auto',
  img: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  },
});
const SProductButtonList = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});
const SProductButton = styled('a', {
  fontFamily: 'Open Sans',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid $gray',
  padding: '10px 7.5px',
  transition: 'all 0.2s ease',
  borderRadius: '2px',
  background: 0,
  color: '$black',
  '&:hover': {
    color: 'white',
    border: '1px solid $red',
    background: '$red',
    textDecoration: 'none',
  },
});
const SLink = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '110%',
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
      <div>
        <SProductImage>
          <SLink>
            <Link href={`/product/${product.id}`}>
              <a>Card Link</a>
            </Link>
          </SLink>
          <img
            src={`${product.photo?.image?.publicUrlTransformed}`}
            alt={`${product.name}`}
          />
        </SProductImage>
      </div>
      <SProductPrice>
        {product.price && formatMoney(product.price)}
      </SProductPrice>
      <SProductContent>
        <SProductTitle>{product.name}</SProductTitle>
        <SText css={{ flexGrow: '1', fontWeight: 'bold', margin: '0px 0px' }}>
          {product.description}
        </SText>
        <SProductButtonList>
          <Link href={`/update/${product.id}`} passHref>
            <SProductButton>
              <SText
                css={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  lineHeight: '1',
                  margin: '0',
                }}
              >
                Edit ✏️
              </SText>
            </SProductButton>
          </Link>
          <Link href={`/delete/${product.id}`} passHref>
            <SProductButton>
              <SText
                css={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  lineHeight: '1',
                  margin: '0',
                }}
              >
                Delete ❌
              </SText>
            </SProductButton>
          </Link>
          <SProductButton as="button">
            <SText
              css={{
                fontSize: '14px',
                fontWeight: 'bold',
                lineHeight: '1',
                margin: '0',
              }}
            >
              Add to Cart 🛒
            </SText>
          </SProductButton>
        </SProductButtonList>
      </SProductContent>
    </SProduct>
  );
}
