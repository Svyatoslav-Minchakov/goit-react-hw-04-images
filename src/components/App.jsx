import { Component } from 'react';
import { Searchbar } from './searchbar/searchbar';
import { ImageGallery } from './imageGallery/imageGallery';
import { Button } from './button/button';
import ModalWindow from './modal/modal';

export class App extends Component {
  state = {
    value: '',
    pageNumber: 1,
    renderResult: [],
    currentImage: '',
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

  getLargeImage = data => {
    this.setState({ currentImage: `${data}` }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <>
        <Searchbar getFormValue={this.getFormValue} />

        <ImageGallery
          getLargeImage={this.getLargeImage}
          sendRenderResult={this.getRenderResult}
          pageNumber={this.state.pageNumber}
          inputValue={this.state.value}
        />

        {this.state.renderResult.length > 0 && (
          <Button changesPageNumber={this.changesPageNumber} />
        )}

        <ModalWindow
          currentImage={this.state.currentImage}
          dataArray={this.state.renderResult}
        />
      </>
    );
  }
}
