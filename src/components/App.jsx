import React, { Component } from 'react'
import { SearchBar } from './SearchBar/SearchBar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem'
import { Loader } from './Loader/Loader'
import { Button } from './Button/Button'
import { Modal } from './Modal/Modal'

export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <>
        <SearchBar></SearchBar>
        <ImageGallery></ImageGallery>
        <ImageGalleryItem></ImageGalleryItem>
        <Loader></Loader>
        <Button></Button>
        <Modal></Modal>
      </>
    )
  }
}

export default App

