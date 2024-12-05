const ProductCard = ({ product, addToCart }) => {
    return (
      <div style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
        <img src={product.images[0]} alt={product.title} style={{ width: "100px", height: "100px" }} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Añadir al carrito</button>
      </div>
    );
  };
  
  export default ProductCard;
  