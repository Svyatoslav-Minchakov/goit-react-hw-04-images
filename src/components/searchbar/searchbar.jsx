import { Component } from 'react';
import { FormWrapper } from './searchbar.styled';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getFormValue(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            type="text"
          />
          <div>
            <button></button>
          </div>
        </form>
      </FormWrapper>
    );
  }
}
