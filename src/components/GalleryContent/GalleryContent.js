/**
 * Created by Hitigerzzz on 2017/11/18.
 */
import React from 'react';
import styles from './GalleryContent.css';
import PictureColumns from '../PictureColumns/PictureColumns';

const GalleryContent = () => {
  return (
    <div className={styles.container}>
      <h3>1 photo</h3>
      <PictureColumns />
    </div>
  );
};

GalleryContent.propTypes = {
};

export default GalleryContent;
