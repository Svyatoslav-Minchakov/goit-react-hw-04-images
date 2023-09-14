export const Button = props => {
  const renderImages = () => {
    props.changesPageNumber();
  };

  return <button onClick={renderImages}>Load More</button>;
};
