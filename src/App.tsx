import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import BookList from './components/Books/BookList';

function App() {

  const [books, setBooks] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyDaQbHXDQfry5Ag9p_-eCPW6wRwaOZgYAw");

  return (
    <div className="App">
      <Header/>
      <BookList/>
    </div>
  );
}

export default App;
