import { styled } from '../../stitches';
import { SText } from '../Base/STypography';

export const SProduct = styled('div', {
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  gap: '20px',
  position: 'relative',
  background: 'white',
  boxShadow: '$normal',
  paddingBottom: '20px',
});

export const SProductContent = styled('div', {
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  gap: '20px',
  padding: '0 20px',
});

export const SProductTitle = styled('h4', {
  textBackground: true,
  fontSize: '$4xl',
  lineHeight: '1.3',
  fontWeight: 'bold',
  marginTop: '-40px',
  pointerEvents: 'none',
});

export const SProductPrice = styled('p', {
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

export const SProductImage = styled('div', {
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

export const SProductButtonList = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const SLink = styled('div', {
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
