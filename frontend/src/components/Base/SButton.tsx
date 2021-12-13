import { styled } from '../../stitches';
import { SText } from './STypography';

export const SButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  background: '$red',
  border: '0',
  width: 'fit-content',
  padding: '5px 10px',
  color: 'white',
  fontSize: '$md',
  '&:active': {
    transform: 'scale(1.03)',
  },
  '&:disabled': {
    opacity: '0.5',
    pointerEvents: 'none',
  },
});

export const SButtonBorder = styled('a', {
  fontFamily: 'Open Sans',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid $gray',
  padding: '10px 7.5px',
  transition: 'all 0.2s ease',
  borderRadius: '2px',
  background: 0,
  color: '$black',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'none',
  },
  [`${SText}`]: {
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '1',
    margin: '0',
  },
});
