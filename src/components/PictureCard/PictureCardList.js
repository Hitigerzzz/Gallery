/**
 * Created by Hitigerzzz on 2017/11/9.
 */
import React from 'react';
import PictureCard from './PictureCard';
import styles from './PictureCardList.css';

function PictureCardList() {
  // TODO
  const length = 4;
  const list = [];
  for (let i = 0; i < length; i += 1) {
    list.push(<PictureCard className={styles.picture_card} key={i} />);
  }
  return <div>{list}</div>;
}

export default PictureCardList;
