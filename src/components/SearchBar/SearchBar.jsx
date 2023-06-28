import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { Form, Input, InputButton } from './SearchBar.styled';

const SearchForm = ({ onSubmit }) => {
  const [request, setRequest] = useState('');

  const onChange = evt => {
    setRequest(evt.currentTarget.value);
  };

  const onFormSubmit = evt => {
    evt.preventDefault();

    if (request.trim() === '') {
      toast.error('Please enter movie name');
      return;
    }
    onSubmit(request);
    setRequest('');
  };

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <Input
          value={request}
          onChange={onChange}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <InputButton type="submit">Search</InputButton>
      </Form>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
