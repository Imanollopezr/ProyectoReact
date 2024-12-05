import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al consumir la API");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="home-container">
      <h1 className="container-api">API Yoimer</h1>
      <table className="home-container">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
