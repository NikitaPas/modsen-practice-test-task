import React from 'react';

const SearchInput: React.FC = () => {
  return (
    <div>
      <div>
        <input type='text' placeholder='Search for books...' />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchInput;