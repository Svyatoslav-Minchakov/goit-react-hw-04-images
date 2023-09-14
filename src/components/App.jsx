import { Component } from 'react';
import { Searchbar } from './searchbar/searchbar';
import { ImageGallery } from './imageGallery/imageGallery';
import { Button } from './button/button';

export class App extends Component {
  state = {
    value: '',
    pageNumber: 1,
  };

  getFormValue = value => {
    this.setState({ value });
  };

  changesPageNumber = () => {
    this.setState(
      prevState => ({
        pageNumber: prevState.pageNumber + 1,
      }),
      () => {
        console.log(this.state.pageNumber);
      }
    );
  };

  render() {
    return (
      <>
        <Searchbar getFormValue={this.getFormValue} />

        <ImageGallery
          pageNumber={this.state.pageNumber}
          inputValue={this.state.value}
        />

        <Button changesPageNumber={this.changesPageNumber} />
      </>
    );
  }
}
