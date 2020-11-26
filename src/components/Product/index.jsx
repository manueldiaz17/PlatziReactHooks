import React from 'react';
const Product = ({ product, handleAddToCart }) => {
  return (
    <section className="Products__item">
      <img src={product.image} alt={product.title} />
      <div className="Products__item_info">
        <h2>{product.title}</h2>
        <span>$ {product.price}</span>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        Comprar
      </button>
    </section>
  );
};

export default Product;
