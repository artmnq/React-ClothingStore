import React from 'react';
import styles from './NotFoundBlock.module.scss';
import SadCat from '../../assets/img/sadCat.jpg';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <div>
        <h1>404</h1>
        <span>
          Uh Oh we have a problem <br /> this page not found!
        </span>
      </div>
      <img src={SadCat} alt="sadCat" width={300} />
    </div>
  );
};

export default NotFoundBlock;
