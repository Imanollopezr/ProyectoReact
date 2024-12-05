import React, { useState, useEffect } from "react";
import axios from "axios";
import Cart from "../components/Cart"; 
import Header from "../components/Header";
import Footer from "../components/footer";
import "../styles/Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        console.log(response.data); 
        setProducts(response.data.slice(0, 6)); 
      })
      .catch((error) => console.error("Error al obtener los productos", error));
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1, image: product.images[0] }]);
    }
  };

  const getProductImage = (index) => {
    const imageMap = {
      0: "gorra1.png",
      1: "gorra2.png",
      2: "gorra3.png",
      3: "gorra4.png",
      4: "gorra5.png",
      5: "gorra6.png",
    };
    return `/images/${imageMap[index]}`;
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="productsContainer">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div key={product.id} className="productCard">
                <img
                  src={getProductImage(index)}
                  alt={product.title}
                  className="productImage"
                />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <button className="addButton" onClick={() => addToCart(product)}>
                  Agregar al carrito
                </button>
              </div>
            ))
          ) : (
            <p>Cargando productos...</p>
          )}
        </div>
        <Cart cart={cart} setCart={setCart} />
      </div>
      <Footer />
    </>
  );
};

export default Shop;
