import { ShowMore } from './button.styled';

export const Button = ({ onClickRender }) => {
  return (
    <>
      <ShowMore type="button" onClick={onClickRender}>
        Load more
      </ShowMore>
    </>
  );
};
