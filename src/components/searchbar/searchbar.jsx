import { Component } from 'react';
import { FormWrapper } from './searchbar.styled';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      alert('Введіть свій запит, будь ласка!');
      return;
    }
    this.props.onSubmit(this.state.value);
    this.reset();
  };

  reset = () =>
    this.setState({
      value: '',
    });

  render() {
    const { value } = this.state;
    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </FormWrapper>
    );
  }
}

// export class Searchbar extends Component {
//   state = {
//     value: '',
//   };

//   handleChange = e => {
//     this.setState({ value: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.getFormValue(this.state.value);
//     this.setState({ value: '' });
//   };

//   render() {
//     return (
//       <FormWrapper>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             value={this.state.value}
//             onChange={this.handleChange}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//           <button>
//             <span>Search</span>
//           </button>
//         </form>
//       </FormWrapper>
//     );
//   }
// }
