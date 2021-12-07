import { keyframes, styled } from '../../../stitches';

const animateGradient = keyframes({
  '0%': {
    backgroundPosition: '0',
  },
  '100%': {
    backgroundPosition: '100% 100%',
  },
});

export const SFormGradient = styled('div', {
  background:
    'linear-gradient(to right, #ff3019 0%, #e2b04a 50%, #ff3019 100%)',
  backgroundSize: '50% auto',
  width: '100%',
  height: '10px',
});

export const SForm = styled('form', {
  '> fieldset': {
    display: 'grid',
    gap: '15px',
    padding: '25px',
    beforeBg: '$gray',
    beforeOpacity: 0.04,
    border: '0',
    [`&[aria-busy="true"]`]: {
      [`& ${SFormGradient}`]: {
        animation: `${animateGradient} 1s linear infinite`,
      },
    },
  },
});
export const SFormGroup = styled('div', {
  display: 'grid',
  gap: '5px',
  position: 'relative',
});
export const SFormInput = styled('input', {
  padding: '5px',
  border: '1px solid $gray',
  borderRadius: '3px',
  '&:disabled': {
    background: '$lightGray',
  },
});
