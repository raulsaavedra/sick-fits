import React from 'react';
import { SText } from './Base/STypography';
import { SProductButton } from './Product/SProduct';

export default function DeleteProduct({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <SProductButton as="button">
      <SText>{children}</SText>
    </SProductButton>
  );
}
