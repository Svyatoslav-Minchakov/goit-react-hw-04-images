import styled from 'styled-components';

export const Item = styled.li`
  width: 250px;
  height: 166px;
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.4), 0 28px 30px rgba(0, 0, 0, 0.3);
  transition: transform 100ms ease-out;

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
    cursor: pointer;
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;
