import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import './Checkout.css';
const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;
  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <section className="Checkout__page">
      <div className="Checkout__content">
        <h3>
          {cart.length > 0 ? (
            <h3>Lista de Pedidos</h3>
          ) : (
            <h3>Sin Pedidos....</h3>
          )}
        </h3>
        {cart.map((item) => (
          <div className="Checkout__content_item">
            <div className="Checkout__content_element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout__sidebar">
          <h3>{`Precio total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar Pedidos</button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Checkout;
