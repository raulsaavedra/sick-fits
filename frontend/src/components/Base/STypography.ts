import { styled } from '../../stitches';

export const SHeadingPrimary = styled('h1', {
  fontSize: '$3xl',
  fontWeight: 'bold',
  lineHeight: '1.2',
});
export const SHeadingSecondary = styled('h2', {
  fontSize: '$2xl',
  fontWeight: 'bold',
  lineHeight: '1.2',
});

export const SHeadingTertiary = styled('h3', {
  fontSize: '$xl',
  fontWeight: 'bold',
  lineHeight: '1.2',
});
export const SFormLabel = styled('label', {
  fontSize: '$lg',
  fontWeight: 'bold',
  color: '$black',
  lineHeight: '1.2',
});
export const SText = styled('p', {
  fontSize: '$md',
  fontWeight: 'normal',
  lineHeight: '1.4',
});

export const SIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  '.icon': {
    fontSize: '$xl',
  },
});
