import styled from 'styled-components';

export const Backdrop = styled('div')(() => {
  return {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& .modal-vrapper': {
      position: 'relative',
      padding: 50,
    },

    '& button': {
      backgroundColor: 'transparent',
      position: 'absolute',
      color: 'white',
      border: 'none',
      top: 0,
      right: 0,
      width: 40,
      height: 40,
      fontSize: 42,
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
