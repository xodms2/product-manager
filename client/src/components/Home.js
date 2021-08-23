import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProducts from "./ListProducts";

const Home = () => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClickCreateProduct = () => {
    axios
      .post("http://localhost:8000/api/product", newProduct)
      .then((res) => {
        window.location.reload(false);
        console.log("New product created: ", res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <div>
          <h1>Product Manager</h1>
        </div>
        <div>
          <h3>Title</h3>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <div>
          <h3>Price</h3>
          <input
            type="text"
            id="price"
            name="price"
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <div>
          <h3>Description</h3>
          <input
            type="text"
            id="description"
            name="description"
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <button onClick={onClickCreateProduct}>Create</button>
        <hr />
        <ListProducts />
      </div>
    </>
  );
};

export default Home;
