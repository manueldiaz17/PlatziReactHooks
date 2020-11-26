import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../../Context/AppContext';
import './Payment.css';
const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId:
      'AUJI7UzHsX9aRGZA6lKXu2DRSlChpO6t4I5qZwKws-ezmvHASgmANmYSYHYfQXeNLYQV02Pj1OhoFVFF',
    intent: 'capture',
    currency: 'USD',
  };
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <section className="Payment__page">
      <div className="Payment__content">
        <h3>Resumen del pedido</h3>
        {cart.map((item) => (
          <div className="Payment__item" key={item.title}>
            <div className="Payment__item_element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment__button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('start payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Payment;
