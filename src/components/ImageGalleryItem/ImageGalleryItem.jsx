import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { ItemImage } from './ImageGalleryItem.styled';
import { useState } from 'react';

export const ImageGalleryItem = ({ pictures, request }) => {
  const [openModal, setOpenModal] = useState(false);

  const isOpenModal = () => {
    setOpenModal(true);
  };

  const isCloseModal = () => {
    setOpenModal(false);
  };
  
  return (
    <div>
      <ItemImage
        src={pictures.webformatURL}
        alt={request}
        onClick={isOpenModal}
      />
      <ModalWindow
        modalImg={pictures.largeImageURL}
        modalOpen={openModal}
        modalClose={isCloseModal}
        request={request}
      />
    </div>
  );
};

export default ImageGalleryItem;
