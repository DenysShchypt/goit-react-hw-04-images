import ReactModal from 'react-modal';
import { ImageModal } from './ModalWindow.styled';

const customStyles = {
  content: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },
};

ReactModal.setAppElement('#root');

export const ModalWindow = ({ modalImg, modalOpen, modalClose, request }) => {
  const handleModal = e => {
    if (e.target.src !== modalImg) {
      modalClose();
    }
  };

  return (
    <div onClick={handleModal}>
      <ReactModal
        isOpen={modalOpen}
        onRequestClose={modalClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ImageModal>
          <img src={modalImg} alt={request} />
        </ImageModal>
      </ReactModal>
    </div>
  );
};

export default ModalWindow;
