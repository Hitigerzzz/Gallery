/**
 * Created by Hitigerzzz on 2017/11/15.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './GalleryItem.css';

const GalleryItem = ({ dispatch, gallery, className }) => {
  const showGalleryDetail = () => {
    dispatch(routerRedux.push({
      pathname: `/gallery/${gallery.galleryId}`,
    }));
  };
  const pictures = gallery.pictures;
  return (
    <div className={`${styles.container} ${className}`} onClick={showGalleryDetail}>
      <div className={styles.photos}>
        <div className={styles.left}>
          {
            pictures[0] ? <img alt="title" src={`/api/${pictures[0].pictureUrl}`} /> : null
          }
        </div>
        <div className={styles.right}>
          <div className={styles.right_img_wrapper}>
            {
              pictures[1] ? <img alt="title" src={`/api/${pictures[1].pictureUrl}`} /> : null
            }
          </div>
          <div className={styles.right_img_wrapper}>
            {
              pictures[2] ? <img alt="title" src={`/api/${pictures[2].pictureUrl}`} /> : null
            }
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <h3>{gallery.title}</h3>
        <div>
          <span>{pictures.length} photos</span>
          <span>curated by Faker</span>
        </div>
      </div>
    </div>
  );
};

GalleryItem.propTypes = {
  gallery: PropTypes.object.isRequired,
};

export default connect()(GalleryItem);
