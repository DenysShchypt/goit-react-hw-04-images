import ReactModal from 'react-modal';
import React, { Component } from 'react';
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

export class ModalWindow extends Component {

  handleModal=e=>{
    if (e.target.src!==this.props.modalImg) {
      this.props.modalClose()
    }

  }

  render() {
    const{modalImg, modalOpen, modalClose, request}=this.props
    return (
      <div onClick={this.handleModal} >
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
    )
  }
}

export default ModalWindow
