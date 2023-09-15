import { Item } from './imageGalleryItem.styled';

export const ImageGalleryItem = ({ imageData }) => {
  return (
    <>
      {imageData && imageData.length > 0 ? (
        imageData.map(item => {
          return (
            <Item key={item.id}>
              <img
                data-url={item.webformatURL}
                src={item.previewURL}
                alt={item.tags}
              />
            </Item>
          );
        })
      ) : (
        <li></li>
      )}
    </>
  );
};
