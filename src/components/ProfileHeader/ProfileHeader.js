/**
 * Created by Hitigerzzz on 2017/11/13.
 */
import React from 'react';
import { Button, Icon } from 'antd';
import styles from './ProfileHeader.css';
import avatar from '../../assets/img/jj.jpg';

const ProfileHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar_wrapper}>
        <img alt="avatar" src={avatar} />
      </div>
      <div className={styles.user_info}>
        <div className={styles.first}>
          <div className={styles.username}>ZhiCheng Wu</div>
          <Button>Edit profile</Button>
        </div>
        <div className={styles.second}>
          <div>0 Followers</div>
          <div>3 Following</div>
          <div><Icon type="environment-o" />Nanjing China</div>
        </div>
        <p className={styles.description}>
          just for test, enjoy life!
        </p>
      </div>
    </div>
  );
};

ProfileHeader.propTypes = {
};

export default ProfileHeader;
