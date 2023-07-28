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
      <h1 className="title_book">Title: "{book.volumeInfo.title}"</h1>
      {book.volumeInfo.imageLinks?.thumbnail && (
        <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} style={{ width: "300px" }} />
      )}
      <div className="author_details">Author: {book.volumeInfo.authors?.join(', ')}</div>
      <div className="category_details">Category: {book.volumeInfo.categories?.[0]}</div>
      <div>{book.volumeInfo.description}</div>
    </div>
  );
};

export default BookDetail;