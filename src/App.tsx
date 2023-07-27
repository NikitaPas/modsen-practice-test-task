import { useState } from 'react';
import axios from 'axios'
import SearchBar from './components/Books/SearchBar';
import SelectCategory from './components/Books/SelectCategory';
import BookList from './components/Books/BookList';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetail from './components/Books/BookDetail';
import SelectRelevance from './components/Books/SelectRelevance';

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [orderBy, setOrderBy] = useState<string[]>([]);

  const handleSearch = async (query: string, category?: string, orderBy?: string) => {
    setLoading(true);
    try {
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: query,
          subject: category,
          orderBy: orderBy,
          maxResults: 30,
          key: 'AIzaSyAMZPf49ICLI1MSInXb30CHPcUPuCNGkTY',
        },
      });
      setBooks(response.data.items);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>
          <SearchBar onSearch={handleSearch} />
          <SelectCategory categories={categories}  onChange={handleSearch} />
          <SelectRelevance orderBy={orderBy} onChange={handleSearch}/>
          {loading ? <p>Loading books...</p> : <BookList books={books} />}
          </div>} />
        <Route path="/book/:id" element={<BookDetail books={books} />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

