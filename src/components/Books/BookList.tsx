import BookCard from "./BookCard";
import React from "react";
import "./styleBooks.css"

interface BookListProps {
    books: Book[];
  }
function BookList({ books }: BookListProps) {
    return (
      <div className="flexContainer">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    );
  }

  export default BookList;