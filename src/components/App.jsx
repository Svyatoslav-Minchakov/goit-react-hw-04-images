import React, { Component } from 'react';
import { Searchbar } from './searchbar/searchbar';
import { searchPhoto } from 'services/api';
import Loader from './loader/loader';
import { ImageGalery } from './imageGallery/imageGallery';
import { Button } from './button/button';
import ModalWindow from './modal/modal';

export class App extends Component {
  state = {
    isloading: false,
    photos: [],
    photoName: '',
    page: 1,
    btnLoadMore: false,
    selectedPhoto: null,
  };

  getSelectedPhoto = e => {
    console.log(e);
  };

  componentDidUpdate(_, prevState) {
    const { photoName, page } = this.state;
    if (photoName !== prevState.photoName || page !== prevState.page) {
      this.setState({ isloading: true });

      searchPhoto(photoName, page)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(data => {
          if (data.totalHits === 0) {
            alert('Oops! It has been wrong!');
            return;
          }
          const totalPage = Math.ceil(data.totalHits / 12);

          if (totalPage > page) {
            this.setState({ btnLoadMore: true });
          } else {
            alert('This is the end!');
            this.setState({ btnLoadMore: false });
          }
          const arrPhotos = data.hits.map(
            ({ id, webformatURL, largeImageURL, tags }) => ({
              id,
              webformatURL,
              largeImageURL,
              tags,
            })
          );

          this.setState(prevState => ({
            photos: [...prevState.photos, ...arrPhotos],
          }));
        })
        .catch(error => {
          console.log(error);
          return alert('Oops! It has been wrong!');
        })
        .finally(() => {
          this.setState({ isloading: false });
        });
    }
  }

  onSubmitForm = value => {
    if (value === this.state.photoName) {
      alert('Please enter a new request!');
      return;
    }
    this.setState({
      photoName: value,
      page: 1,
      photos: [],
      btnLoadMore: false,
    });
  };

  onClickRender = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  toggleModal = (selectedPhoto = null) => {
    this.setState({ selectedPhoto });
  };
  render() {
    const { isloading, photos, btnLoadMore, selectedPhoto } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSubmitForm} />
        {isloading && <Loader />}
        <ImageGalery photos={photos} onClickImageItem={this.toggleModal} />
        {photos.length !== 0 && btnLoadMore && (
          <Button onClickRender={this.onClickRender} />
        )}
        {selectedPhoto && (
          <ModalWindow
            selectedPhoto={selectedPhoto}
            onClose={this.toggleModal}
          />
        )}
      </div>
    );
  }
}
