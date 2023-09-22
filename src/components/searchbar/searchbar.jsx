import { useState } from 'react';
import { FormWrapper } from './searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      alert('Введіть свій запит, будь ласка!');
      return;
    }
    onSubmit(value);
    reset();
  };

  const reset = () => setValue('');

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
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
};
