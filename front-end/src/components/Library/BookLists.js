import React from "react";
import List from "./List";

const BookLists = (props) => {
  // console.log(props.categories);
  const booksObj = props.categories.map((books) => {
    const bookArr = books.bookList.map((book, i) => {
      return <List key={i} book={book} />;
    });
    return <div className="book-arr">{bookArr}</div>;
  });
  return <div>{booksObj}</div>;
};

export default BookLists;
