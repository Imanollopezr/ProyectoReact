import React from "react";
import "./ProductList.css";

const ProductList = ({ products, startEditing, deleteProduct }) => {
  return (
    <div className="product-list">
      <table>
        <thead>
          <tr>
            <th className="th">ID</th>
            <th>Título</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                <button onClick={() => startEditing(product)}>Editar</button>
                <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
