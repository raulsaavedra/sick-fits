import { styled } from '../../stitches';

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
