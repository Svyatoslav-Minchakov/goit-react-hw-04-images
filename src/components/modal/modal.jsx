import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from './backdrop.styled';
import { Modal } from './modal.styled';

const modalRoot = document.querySelector('#modal-root');
export class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDawn);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDawn);
  }
  handleKeyDawn = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const {
      selectedPhoto: { src, alt },
    } = this.props;

    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <div>
          <Modal>
            <img src={src} alt={alt} />
          </Modal>
        </div>
      </Backdrop>,
      modalRoot
    );
  }
}

export default ModalWindow;
