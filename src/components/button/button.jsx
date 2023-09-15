import { ShowMore } from './button.styled';

export const Button = props => {
  const renderImages = () => {
    props.changesPageNumber();
  };

  return <ShowMore onClick={renderImages}>Load More</ShowMore>;
};
