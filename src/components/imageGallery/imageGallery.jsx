import { ImageGalleryItem } from 'components/imageGalleryItem/imageGalleryItem';
import { List } from './imageGallery.styled';

export const ImageGalery = ({ photos, onClickImageItem }) => (
  <List>
    {photos.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        tags={tags}
        smallUrl={webformatURL}
        largeImage={largeImageURL}
        onClickImageItem={onClickImageItem}
      />
    ))}
  </List>
);
