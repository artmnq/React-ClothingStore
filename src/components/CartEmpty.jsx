import React from 'react';
import { Link } from 'react-router-dom';

import CartEmptyImg from '../assets/img/empty-cart.png';

const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Cart is empty <icon>😕</icon>
        </h2>
        <p>
          You still didn't order anything
          <br />
          For the order please return on Main page.
        </p>
        <img src={CartEmptyImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Return back</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
