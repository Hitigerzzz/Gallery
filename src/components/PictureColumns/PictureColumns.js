/**
 * Created by Hitigerzzz on 2017/11/18.
 */
import React from 'react';
import PictureItem from '../PictureItem/PictureItem';
import styles from './PictureColumns.css';
import high from '../../assets/img/high.jpg';
import wide from '../../assets/img/wide.jpg';
import wide1 from '../../assets/img/wide1.jpg';

const PictureColumns = () => {
  return (
    <div className={styles.photos_body}>
      <div className={styles.column}>
        <PictureItem src={high} className={styles.item} />
        <PictureItem src={wide} className={styles.item} />
        <PictureItem src={wide} className={styles.item} />
      </div>
      <div className={styles.column}>
        <PictureItem src={wide1} className={styles.item} />
        <PictureItem src={high} className={styles.item} />
        <PictureItem src={wide1} className={styles.item} />
      </div>
      <div className={styles.column}>
        <PictureItem src={high} className={styles.item} />
        <PictureItem src={wide} className={styles.item} />
      </div>
    </div>
  );
};

PictureColumns.propTypes = {
};

export default PictureColumns;
