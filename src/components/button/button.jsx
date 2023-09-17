import { ShowMore } from './button.styled';

export const Button = ({ onClickRender }) => {
  return (
    <div>
      <ShowMore type="button" onClick={onClickRender}>
        Load more
      </ShowMore>
    </div>
  );
};
