import React from 'react';
import Link from 'next/link';
import { styled } from '../../stitches';
import { TProduct } from '../../../lib/types/codegen';
import formatMoney from '../../../lib/formatMoney';
import DeleteProduct from '../DeleteProduct';
import {
  SProduct,
  SProductContent,
  SProductTitle,
  SProductPrice,
  SProductImage,
  SProductButtonList,
  SProductButton,
  SLink,
} from './SProduct';
import { SText } from '../Base/STypography';

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
              <SText>Edit ✏️</SText>
            </SProductButton>
          </Link>
          <DeleteProduct id={product.id}>Delete ❌</DeleteProduct>
          <SProductButton as="button">
            <SText>Add to Cart 🛒</SText>
          </SProductButton>
        </SProductButtonList>
      </SProductContent>
    </SProduct>
  );
}
