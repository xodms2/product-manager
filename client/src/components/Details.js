import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data.oneProduct);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <h2>{product.title}</h2>
      <h4>{product.price}</h4>
      <h4>{product.description}</h4>
    </div>
  );
}

export default Details;
