import React, { ChangeEvent, useState } from 'react';
import './Search.css';

export interface SearchProps {
  handleSearch: (term: string) => void;
}

const Search = (props: SearchProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // TODO: THROTLE!!!!!
    if (event.target) {
      const term = event.target.value;
      setValue(event.target.value);
      props.handleSearch(term);
    }
  };

  const clearSearchHandler = () => {
    setValue('');
    props.handleSearch('');
  };

  return (
    <fieldset className="field-container">
      <input type="text" placeholder="Type the title..." className="field" value={value} onChange={handleChange} />
      <div className="icons-container">
        <div className="icon-search" />
        <div className="icon-close" onClick={clearSearchHandler}>
          <div className="x-up" />
          <div className="x-down" />
        </div>
      </div>
    </fieldset>
  );
};

export default Search;
