import { useState, useEffect } from 'react';
import axios from 'axios';

interface Book {
    id: string;
    volumeInfo: {
      title: string;
      authors: string[];
      description: string;
      imageLinks?: {
        thumbnail: string;
      };
      categories?: string[];
    };
  }
  
  function BookList() {
    const [books, setBooks] = useState<Book[]>([]);
  
    useEffect(() => {
      const fetchBooks = async () => {
        try {
          const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
              q: 'subject:fiction',
              orderBy: 'relevance',
              maxResults: 30,
              key: 'AIzaSyDaQbHXDQfry5Ag9p_-eCPW6wRwaOZgYAw',
            },
          });
          console.log(response.data.items)
          setBooks(response.data.items);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchBooks();
      
    }, []);
  
    return (
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
            <h3>{book.volumeInfo.title}</h3>
            <p>Category: {book.volumeInfo.categories?.[0]}</p>
            <p>Authors: {book.volumeInfo.authors?.join(', ')}</p>
            <p>Description: {book.volumeInfo.description}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default BookList;