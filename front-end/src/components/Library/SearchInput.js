import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import BookLists from "./BookLists";

const Library = () => {
  // const [listPets, setPets] = useState([]);
  // const [listFiction, setFiction] = useState([]);
  const [categories, setCategories] = useState([]);

  const catName = ["pets", "fiction", "cats"];

  const renderList = async () => {
    let result = [];

    catName.map(async (category, index) => {
      await axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${category}`)
        .then((data) => {
          result = [
            ...result,
            {
              id: index,
              catName: category,
              bookList: data.data.items,
            },
          ];
        })
        .then(() => {
          setCategories(result);
        });
    });
  };

  useEffect(() => {
    renderList();
  }, []);

  return (
    <div>
      <BookLists categories={categories} />
    </div>
  );
};

export default Library;
