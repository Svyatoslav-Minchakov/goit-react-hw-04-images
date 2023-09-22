import React, { useEffect, useState } from 'react';
import { Searchbar } from './searchbar/searchbar';
import { searchPhoto } from 'services/api';
import Loader from './loader/loader';
import { ImageGalery } from './imageGallery/imageGallery';
import { Button } from './button/button';
import ModalWindow from './modal/modal';

export const App = () => {
  const [isLoading, setisLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [photoName, setPhotoName] = useState('');
  const [page, setPage] = useState(1);
  const [btnLoadMore, setBtnLoadMore] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (photoName === '') return;

      setisLoading(true);

      try {
        const response = await searchPhoto(photoName, page);

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();

        if (data.totalHits === 0) {
          alert('Oops! It has been wrong!');
          return;
        }

        const totalPage = Math.ceil(data.totalHits / 12);

        if (totalPage > page) {
          setBtnLoadMore(true);
        } else {
          alert('This is the end!');
          setBtnLoadMore(false);
        }

        const arrPhotos = data.hits.map(
          ({ id, webformatURL, largeImageURL, tags }) => ({
            id,
            webformatURL,
            largeImageURL,
            tags,
          })
        );

        setPhotos(prevPhotos => [...prevPhotos, ...arrPhotos]);
      } catch (error) {
        console.log(error);
        alert('Oops! It has been wrong!');
      } finally {
        setisLoading(false);
      }
    };

    fetchData();
  }, [photoName, page]);

  const onSubmitForm = value => {
    if (value === photoName) {
      alert('Please enter a new request!');
      return;
    }
    setPhotoName(value);
    setPage(1);
    setPhotos([]);
    setBtnLoadMore(false);
  };

  const onClickRender = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleModal = (selectedPhoto = null) => {
    setSelectedPhoto(selectedPhoto);
  };

  return (
    <div>
      <Searchbar onSubmit={onSubmitForm} />
      {isLoading && <Loader />}
      <ImageGalery photos={photos} onClickImageItem={toggleModal} />
      {photos.length !== 0 && btnLoadMore && (
        <Button onClickRender={onClickRender} />
      )}
      {selectedPhoto && (
        <ModalWindow selectedPhoto={selectedPhoto} onClose={toggleModal} />
      )}
    </div>
  );
};
