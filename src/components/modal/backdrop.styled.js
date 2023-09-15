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
  };
});
