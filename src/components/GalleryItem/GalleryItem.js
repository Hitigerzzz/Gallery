/**
 * Created by Hitigerzzz on 2017/11/15.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './GalleryItem.css';

const GalleryItem = ({ dispatch, src, className }) => {
  const showGalleryDetail = () => {
    dispatch(routerRedux.push({
      pathname: '/gallery/123',
    }));
  };
  return (
    <div className={`${styles.container} ${className}`} onClick={showGalleryDetail}>
      <div className={styles.photos}>
        <div className={styles.left}>
          <img alt="title" src={src[0]} />
        </div>
        <div className={styles.right}>
          <div className={styles.right_img_wrapper}>
            <img alt="title" src={src[1]} />
          </div>
          <div className={styles.right_img_wrapper}>
            <img alt="title" src={src[2]} />
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <h3>buildings</h3>
        <div>
          <span>2 photos</span>
          <span>curated by Faker</span>
        </div>
      </div>
    </div>
  );
};

GalleryItem.propTypes = {
  src: PropTypes.array.isRequired,
};

export default connect()(GalleryItem);
