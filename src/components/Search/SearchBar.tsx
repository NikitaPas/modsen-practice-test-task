import { useState } from 'react';
import React from "react";
import '../Books/styleBooks.css'

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className='searchBar'>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
    </div>
  );
}