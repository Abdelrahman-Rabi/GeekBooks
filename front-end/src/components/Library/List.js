import React from "react";

const List = (props) => {
  const bookData = props.book.volumeInfo;
  return (
    <div>
      <img src={bookData.imageLinks.thumbnail} />
      <h2>title :{bookData.title}</h2>
      <h3>author :{bookData.authors}</h3>
      <p>published :{bookData.publishedDate}</p>
      <p>Category :{bookData.categories}</p>
    </div>
  );
};

export default List;
