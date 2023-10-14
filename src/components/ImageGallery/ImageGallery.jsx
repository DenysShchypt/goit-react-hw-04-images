import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageItem, List } from './ImageGallery.styled';

export const ImageGallery = ({ results, request }) => {
  return (
    <List>
      {results.map(item => (
        <ImageItem key={item.id}>
          <ImageGalleryItem pictures={item} request={request} />
        </ImageItem>
      ))}
    </List>
  );
};
