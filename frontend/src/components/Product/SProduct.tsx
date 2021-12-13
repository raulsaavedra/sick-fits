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

export const SProductButton = styled('a', {
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
