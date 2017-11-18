/**
 * Created by Hitigerzzz on 2017/11/18.
 */
import React from 'react';
import { Button } from 'antd';
import styles from './GalleryInfo.css';
import avatar from '../../assets/img/jj.jpg';

const GalleryHeader = () => {
  return (
    <div className={styles.background} style={{ backgroundImage: `url(${require('../../assets/img/wide.jpg')})` }}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>buildings</h1>
          <h2>JUST FOR TEST, yes</h2>
          <div className={styles.user_info}>
            <div className={styles.avatar_wrapper}>
              <img alt="avatar" src={avatar} />
            </div>
            <span>Faker</span>
          </div>
        </div>
        <div className={styles.right}>
          <Button>Edit</Button>
        </div>
      </div>
    </div>
  );
};

GalleryHeader.propTypes = {};

export default GalleryHeader;
