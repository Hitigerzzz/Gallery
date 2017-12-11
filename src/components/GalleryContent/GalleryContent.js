/**
 * Created by Hitigerzzz on 2017/11/18.
 */
import React from 'react';
import styles from './GalleryContent.css';
import PictureColumns from '../PictureColumns/PictureColumns';

const GalleryContent = ({ pictures }) => {
  return (
    <div className={styles.container}>
      <h3>{pictures.length} photo</h3>
      <PictureColumns pictures={pictures} />
    </div>
  );
};

GalleryContent.propTypes = {
};

export default GalleryContent;
