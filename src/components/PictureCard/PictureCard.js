/**
 * Created by Hitigerzzz on 2017/11/8.
 */
import React from 'react';
import styles from './PictureCard.css';
import demo from '../../assets/img/wide.jpg';
import avatar from '../../assets/img/jj.jpg';

const PictureCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar_wrapper}>
          <img alt="avatar" src={avatar} />
        </div>
        <div className={styles.post_origin}>
          <a className={styles.username}>Faker</a>
          <p className={styles.post_time}>2017年10月21日 21:10</p>
        </div>
      </div>
      <a className={styles.body}>
        <img alt="post" src={demo} />
      </a>
      <div className={styles.footer}>
        <div className={styles.footer_header} />
        <div className={styles.footer_description} />
      </div>
    </div>
  );
};

PictureCard.propTypes = {
};

export default PictureCard;
