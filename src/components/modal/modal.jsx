import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from './backdrop.styled';
import { Modal } from './modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalWindow = ({ onClose, selectedPhoto }) => {
  const { src, alt } = selectedPhoto;
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDawn);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', handleKeyDawn);
    };
  }, []);

  const handleKeyDawn = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <div>
        <Modal>
          <img src={src} alt={alt} />
        </Modal>
      </div>
    </Backdrop>,
    modalRoot
  );
};

export default ModalWindow;
