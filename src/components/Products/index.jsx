import React, { useContext } from 'react';

import Product from '../Product';
import AppContext from '../../Context/AppContext';
import './Products.css';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };
  return (
    <section className="Products__page">
      <div className="Products__items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
