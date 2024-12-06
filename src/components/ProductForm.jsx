import React from "react";
import "./ProductForm.css";

const ProductForm = ({ newProduct, setNewProduct, addOrEditProduct, editingProduct }) => {
  return (
    <div className="product-form">
      <input
        type="text"
        placeholder="Título del producto"
        value={newProduct.title}
        onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
      />
      <input
        type="number"
        placeholder="Precio"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <button onClick={addOrEditProduct}>
        {editingProduct ? "Actualizar Producto" : "Agregar Producto"}
      </button>
    </div>
  );
};

export default ProductForm;

