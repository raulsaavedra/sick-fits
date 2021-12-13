import React from 'react';
import { SButtonBorder } from './Base/SButton';
import { SText } from './Base/STypography';

export default function DeleteProduct({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <SButtonBorder as="button">
      <SText>{children}</SText>
    </SButtonBorder>
  );
}
