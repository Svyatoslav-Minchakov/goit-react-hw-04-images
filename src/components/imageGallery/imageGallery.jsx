import { Component } from 'react';
import axios from 'axios';
import { ImageGalleryItem } from 'components/imageGalleryItem/imageGalleryItem';
import { List } from './imageGallery.styled';
import Loader from 'components/loader/loader';

export class ImageGallery extends Component {
  state = {
    imageData: [],
    isLoading: false,
  };

  BASE_URL = 'https://pixabay.com/api/';
  API_KEY = '35528535-2026f3bafef7be5a50534f79c';

  componentDidUpdate(prevProps) {
    if (
      prevProps.inputValue !== this.props.inputValue ||
      prevProps.pageNumber !== this.props.pageNumber
    ) {
      this.getImageCollection();
    }
  }

  async getImageCollection() {
    try {
      this.setState({ isLoading: true });
      const response = await axios.get(
        `${this.BASE_URL}?key=${this.API_KEY}&q=${this.props.inputValue}&image_type=photo&orientation=horizontal&page=${this.props.pageNumber}&per_page=12`
      );
      const newImageData = response.data;

      this.props.sendRenderResult(newImageData.hits);

      this.setState(prevState => ({
        imageData: [...prevState.imageData, ...newImageData.hits],
      }));
    } catch (error) {
      console.error('Помилка при отриманні колекції зображень:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  getImageUrl = e => {
    const url = e.target.getAttribute('data-url');
    this.props.getLargeImage(url);
  };

  render() {
    return (
      <>
        {this.state.isLoading && <Loader />}

        <List onClick={this.getImageUrl}>
          <ImageGalleryItem imageData={this.state.imageData} />
        </List>
      </>
    );
  }
}
