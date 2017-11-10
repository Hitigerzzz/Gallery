/**
 * Created by Hitigerzzz on 2017/11/9.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styles from './PictureModal.css';
import avatar from '../../assets/img/jj.jpg';
import FollowBtn from '../FollowBtn/FollowBtn';

function PictureModal({ img }) {
  return (
    <div>
      <div className={styles.img_wrapper}>
        <img alt="post" src={img} />
      </div>
      <div className={styles.right}>
        <div className={styles.author}>
          <div className={styles.avatar_wrapper}>
            <img alt="avatar" src={avatar} />
          </div>
          <div className={styles.post_origin}>
            <a className={styles.author_name}>Faker</a>
            <p className={styles.post_time}>2017年10月21日 21:10</p>
          </div>
          <FollowBtn />
        </div>
        <div className={styles.buttons} />
        <div className={styles.description} />
        <div className={styles.comment_list} />
      </div>
    </div>
  );
}
PictureModal.propTypes = {
  img: PropTypes.string.isRequired,
};

export default PictureModal;
