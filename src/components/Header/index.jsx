import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../Context/AppContext';

import './Header.css';
const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <header className="Header__page">
      <h1 className="Header__title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header__checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="Header__alert">{cart.length}</div>}
      </div>
    </header>
  );
};

export default Header;
