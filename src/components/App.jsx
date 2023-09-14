import { Component } from 'react';
import { Searchbar } from './searchbar/searchbar';
import { ImageGallery } from './imageGallery/imageGallery';

export class App extends Component {
  state = {
    value: '',
  };

  getFormValue = value => {
    this.setState({ value });
  };

  render() {
    return (
      <>
        <Searchbar getFormValue={this.getFormValue} />

        <ImageGallery inputValue={this.state.value} />
      </>
    );
  }
}
