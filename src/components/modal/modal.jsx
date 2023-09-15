import { Component } from 'react';
import { Backdrop } from './backdrop.styled';
import { Modal } from './modal.styled';

class ModalWindow extends Component {
  state = {
    isOpen: false,
  };

  getDataImage = () => {
    console.log(this.props);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.currentImage !== this.props.currentImage) {
      //   this.setState({ isOpen: true });

      this.toggleModal();
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <>
        {this.state.isOpen && (
          <Backdrop>
            <Modal>
              <img src={this.props.currentImage} alt="" />
              <button onClick={this.toggleModal}>x</button>
            </Modal>
          </Backdrop>
        )}
      </>
    );
  }
}

export default ModalWindow;
