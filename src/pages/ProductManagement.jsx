import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/footer";
import Swal from 'sweetalert2'; 

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: "", price: 0 });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  };

  const addOrEditProduct = () => {
    if (newProduct.title === "" || newProduct.price === 0) {
      Swal.fire({
        title: "Error",
        text: "Por favor, Ingresa un título y un precio para la gorra.",
        icon: "error",
        confirmButtonText: "Aceptar"
      });
      return;
    }

    if (editingProduct) {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¿Quieres actualizar esta gorra?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, actualizar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .put(
              `https://api.escuelajs.co/api/v1/products/${editingProduct.id}`,
              newProduct
            )
            .then(() => {
              fetchProducts();
              setEditingProduct(null);
              setNewProduct({ title: "", price: 0 });
              Swal.fire("¡Actualizada!", "La gorra ha sido actualizada.", "success");
            });
        }
      });
    } else {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¿Quieres agregar esta nueva gorra?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, agregar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post("https://api.escuelajs.co/api/v1/products", newProduct)
            .then(() => {
              fetchProducts();
              setNewProduct({ title: "", price: 0 });
              Swal.fire("¡Agregada!", "La gorra ha sido agregada.", "success");
            });
        }
      });
    }
  };

  const deleteProduct = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://api.escuelajs.co/api/v1/products/${id}`)
          .then(() => {
            fetchProducts();
            Swal.fire("¡Eliminada!", "La gorra ha sido eliminada.", "success");
          });
      }
    });
  };

  const startEditing = (product) => {
    setEditingProduct(product);
    setNewProduct({ title: product.title, price: product.price });
  };

  return (
    <>
      <Header />
      <div>
        <h2>Gestión de Productos</h2>
        <ProductForm
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          addOrEditProduct={addOrEditProduct}
          editingProduct={editingProduct}
        />
        <ProductList
          products={products}
          startEditing={startEditing}
          deleteProduct={deleteProduct}
        />
      </div>
      <Footer />
    </>
  );
};

export default ProductManagement;
