import { Item } from './imageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  smallUrl,
  tags,
  onClickImageItem,
  largeImage,
}) => {
  const onImageClick = () => {
    onClickImageItem({ src: largeImage, alt: tags });
  };
  return (
    <Item key={id} data-id={id} onClick={onImageClick}>
      <img src={smallUrl} alt={tags} />
    </Item>
  );
};
