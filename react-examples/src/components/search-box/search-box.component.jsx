import React from 'react';

const SearchBox = (props) => {
  return (
    <input
      className={props.className}
      type="search"
      placeholder="search users"
      onChange={props.onChangeHandler}
    />
  );
};

export default SearchBox;
