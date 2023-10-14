
import { ModalWindow } from 'components/ModalWindow/ModalWindow'
import React, { Component } from 'react'
import { ItemImage } from './ImageGalleryItem.styled'

export class ImageGalleryItem extends Component {

  state={
    openModal: false,
      };
    
    isOpenModal=()=>{
    this.setState({openModal: true,})
    };

    isCloseModal=()=>{
      this.setState({openModal: false,})
    };
    
  render() {
    const{pictures,request}=this.props
    return (
      <div>
        <ItemImage src={pictures.webformatURL} alt={request} onClick={this.isOpenModal}/>
        <ModalWindow modalImg={pictures.largeImageURL} modalOpen={this.state.openModal} modalClose={this.isCloseModal} request={request}/>
</div>
    )
  }
}

export default ImageGalleryItem

