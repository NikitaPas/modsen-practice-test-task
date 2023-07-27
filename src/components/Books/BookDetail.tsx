import React from "react";
import { useParams } from "react-router-dom";
import "./styleBooks.css"

interface BookDetailProps {
  books: any[];
}

const BookDetail: React.FC<BookDetailProps> = ({ books }) => {
  const { id } = useParams<{ id: string }>();
  const book = books.find((book) => book.id === id);

  return (
    <div className="booksDetails">
      <h1>{book.volumeInfo.title}</h1>
      {book.volumeInfo.imageLinks?.thumbnail && (
        <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} style={{ width: "200px" }} />
      )}
      <div>{book.volumeInfo.authors?.join(', ')}</div>
      <div>{book.volumeInfo.categories?.[0]}</div>
      <div>{book.volumeInfo.description}</div>
    </div>
  );
};

export default BookDetail;