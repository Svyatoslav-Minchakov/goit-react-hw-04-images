import { Component } from 'react';
import axios from 'axios';
import { ImageGalleryItem } from 'components/imageGalleryItem/imageGalleryItem';

export class ImageGallery extends Component {
  state = {
    imageData: '',
  };

  BASE_URL = 'https://pixabay.com/api/';
  API_KEY = '35528535-2026f3bafef7be5a50534f79c';

  componentDidUpdate(prevProps) {
    if (prevProps.inputValue !== this.props.inputValue) {
      this.getImageCollection();
    }
  }

  async getImageCollection() {
    try {
      const response = await axios.get(
        `${this.BASE_URL}?key=${this.API_KEY}&q=${this.props.inputValue}&image_type=photo`
      );
      const imageData = response.data;
      this.setState({ imageData });
      //   console.log(imageData);
    } catch (error) {
      console.error('Помилка при отриманні колекції зображень:', error);
    }
  }

  render() {
    return (
      <ul>
        <ImageGalleryItem imageData={this.state.imageData} />
      </ul>
    );
  }
}
