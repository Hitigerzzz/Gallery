/**
 * Created by Hitigerzzz on 2017/11/9.
 */
import React from 'react';
import PictureCard from './PictureCard';
import styles from './PictureCardList.css';

function PictureCardList({ pictures }) {
  const length = pictures.length;
  const list = [];
  for (let i = 0; i < length; i += 1) {
    list.push(<PictureCard picture={pictures[i]} className={styles.picture_card} key={i} />);
  }
  return <div>{list}</div>;
}

export default PictureCardList;
