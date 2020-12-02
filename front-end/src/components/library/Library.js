import React from "react";
import { useState } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import BookList from "./BookList";

const Library = () => {
  const [books, setbooks] = useState([]);
  const [searchBox, setsearchBox] = useState("");

  const handleSearch = (e) => {
    setsearchBox(e.target.value);
  };

  const searchBook = (e) => {
    e.preventDefault();
    const q = searchBox;
    console.log(q);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
      .then((data) => {
        console.log(data);
        setbooks([...data.data.items]);
      });
  };

  return (
    <div>
      <p>hello from library</p>
      <SearchInput handleSearch={handleSearch} searchBook={searchBook} />
      <BookList books={books} />
    </div>
  );
};

export default Library;
