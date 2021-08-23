import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <div>
      {product.map((prod, i) => (
        <div key={i}>
          <div>{prod.title}</div>
          <div>{prod.price}</div>
          <div>{prod.description}</div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
