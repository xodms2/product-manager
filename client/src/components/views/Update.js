import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res);
        setTitle(res.data.oneProduct.title);
        setPrice(res.data.oneProduct.price);
        setDescription(res.data.oneProduct.description);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmitUpdateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/product/${id}`, {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log("updated", res);
        window.history.back();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Update {title}</h1>
      <form onSubmit={onSubmitUpdateProduct}>
        <p>
          <label>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            defaultValue={title}
          ></input>
        </p>
        <p>
          <label>Price</label>
          <input
            type="text"
            id="price"
            name="price"
            required
            onChange={(e) => setPrice(e.target.value)}
            defaultValue={price}
          ></input>
        </p>
        <p>
          <label>Description</label>
          <input
            type="text"
            id="description"
            name="description"
            required
            onChange={(e) => setDescription(e.target.value)}
            defaultValue={description}
          ></input>
        </p>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Update;
