import React, { useState } from 'react';

const Search = ({ searchRecipes }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchRecipes(text);
    setText('');
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={onSubmit}>
        <input
          className="search__input"
          type="text"
          name="text"
          placeholder="Search Recipes..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input className="search__btn" type="submit" value="Search" />
        {/* <button className="search__btn" type="submit">
          Search
        </button> */}
      </form>
    </div>
  );
};

export default Search;
