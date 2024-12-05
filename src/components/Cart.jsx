import React from "react";
import Swal from "sweetalert2"; 
import "../styles/Shop.css"; 

const Cart = ({ cart, setCart }) => {
  const removeProduct = (productId) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Este producto será eliminado del carrito.",
      icon: "warning",
      buttonsStyling: true,
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "colores-alertas",
      cancelButtonColor: "colores alertas",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart(cart.filter((item) => item.id !== productId)); 
        Swal.fire(
          "¡Eliminado!",
          "El producto ha sido eliminado del carrito.",
          "success"
        );
      }
    });
  };

  const updateQuantity = (productId, operation) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity:
                operation === "increase"
                  ? item.quantity + 1
                  : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={`cartContainer ${cart.length === 0 ? "empty" : ""}`}>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="cartItems">
          {cart.map((item) => (
            <div key={item.id} className="cartItem">
              <img
                src={item.image}
                alt={item.title}
                className="productImage"
              />
              <div className="cartItemDetails">
                <h3>{item.title}</h3>
                <p>Precio: ${item.price}</p>
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item.id, "decrease")}
                    className="addButton"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, "increase")}
                    className="addButton"
                  >
                    +
                  </button>
                </div>
                <p>Total: ${item.price * item.quantity}</p>
                <button
                  onClick={() => removeProduct(item.id)} 
                  className="removeButton"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <button className="checkoutButton">Pagar (${totalAmount})</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
