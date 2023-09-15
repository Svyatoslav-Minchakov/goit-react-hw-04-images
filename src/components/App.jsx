import { Component } from 'react';
import { Searchbar } from './searchbar/searchbar';
import { ImageGallery } from './imageGallery/imageGallery';
import { Button } from './button/button';

export class App extends Component {
  state = {
    value: '',
    pageNumber: 1,
    renderResult: [],
    modalIsOpen: false,
  };

  getRenderResult = value => {
    this.setState({ renderResult: [...value] }, () => {
      console.log(this.state);
    });
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
          sendRenderResult={this.getRenderResult}
          pageNumber={this.state.pageNumber}
          inputValue={this.state.value}
        />

        {this.state.renderResult.length > 0 && (
          <Button changesPageNumber={this.changesPageNumber} />
        )}
      </>
    );
  }
}
