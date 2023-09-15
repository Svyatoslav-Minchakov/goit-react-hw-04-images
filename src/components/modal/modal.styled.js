import styled from 'styled-components';

export const Modal = styled('div')(() => {
  return {
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vw - 24px)',
    position: 'relative',
    // backgroundColor: 'white',

    '& button': {
      backgroundColor: 'transparent',
      position: 'absolute',
      color: 'white',
      border: '1px solid white',
      borderRadius: '50%',
      top: 30,
      right: 30,
      width: 40,
      height: 40,
      fontSize: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',

      '&:hover': {
        color: 'teal',
        borderColor: 'teal',
      },
    },
  };
});
