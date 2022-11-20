import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import cartImg from '../assets/img/cart.svg';
import trash from '../assets/img/trash.svg';
import ArrowLeft from '../assets/img/grey-arrow-left.svg';
import CartItem from '../components/CartItem';
import { clearItems } from '../redux/cart/slice';
import { selectCart } from '../redux/cart/selectors';
import CartEmpty from '../components/CartEmpty';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  const onClickClear = () => {
    if (
      window.confirm(
        'Are you sure that you want to remove all items?'
      )
    ) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }
  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <img src={cartImg} alt="Cart" /> Cart
          </h2>
          <div onClick={onClickClear} className="cart__clear">
            <img src={trash} alt="ClearCart" />
            <span>Clear Cart</span>
          </div>
        </div>
        <div className="cart__items">
          {items.map((item: any) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Total items: <b>{totalCount} pcs.</b>
            </span>
            <span>
              Total amount: <b>{totalPrice} $</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/React-ClothingStore"
              className="button button--outline button--add go-back-btn"
            >
              <img src={ArrowLeft} alt="arrow" />
              <span>Return back</span>
            </Link>
            <div className="button pay-btn">
              <span>Pay Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
