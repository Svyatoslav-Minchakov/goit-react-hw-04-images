import styled from 'styled-components';

export const Modal = styled('div')(() => {
  return {
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vw - 24px)',
    position: 'relative',
    // backgroundColor: 'white',
  };
});
