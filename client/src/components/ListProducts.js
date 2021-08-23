import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const ListProducts = () => {
  const [product, setProduct] = useState([]);

  useEffect(
    () =>
      axios
        .get("http://localhost:8000/api/product")
        .then((res) => {
          setProduct(res.data.allProducts);
        })
        .catch((err) => console.log(err)),
    []
  );

  const onClickDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res, "deleted");
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {product.map((prod, i) => (
        <div key={i}>
          <Link to={`/api/product/${prod._id}`}>{prod.title}</Link>|
          <Link to={`/api/product/${prod._id}/edit`}>Edit</Link>|
          <button
            onClick={(e) => {
              onClickDelete(prod._id);
            }}
          >
            Delete
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
