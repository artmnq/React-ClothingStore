import React from 'react';
import { Link } from 'react-router-dom';

import CartEmptyImg from '../assets/img/empty-cart.png';

const CartEmpty: React.FC = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Cart is empty <span>😕</span>
        </h2>
        <p>
          You still didn't order anything
          <br />
          For the order please return on Main page.
        </p>
        <img src={CartEmptyImg} alt="Empty cart" />
        <Link
          to="/React-ClothingStore"
          className="button button--black"
        >
          <span>Return back</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
