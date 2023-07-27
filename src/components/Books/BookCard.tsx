import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styleBooks.css"
interface BookCardProps {
    book: Book;
  }
  
  export default function BookCard({ book }: BookCardProps) {
    const linkStyle = {
      textDecoration: "none",
      color: "inherit",
    };
    return (
      <Link to={`/book/${book.id}`} style={linkStyle}>
       <Card>
       {book.volumeInfo.imageLinks?.thumbnail ? (
         <Card.Img variant="top" src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
       ) : (
         <div className="no-image">image not found</div>
       )}
       <Card.Body>
         <Card.Title>{book.volumeInfo.title}</Card.Title>
         <Card.Text>{book.volumeInfo.categories?.[0]}</Card.Text>
         <Card.Text>{book.volumeInfo.authors?.join(', ')}</Card.Text>
       </Card.Body>
     </Card>
     </Link>
    );
  }