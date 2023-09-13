import { Component } from 'react';
import { Searchbar } from './searchbar/searchbar';

export class App extends Component {
  state = {
    value: '',
  };

  getFormValue = value => {
    this.setState({ value });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Searchbar getFormValue={this.getFormValue} />
      </>
    );
  }
}
