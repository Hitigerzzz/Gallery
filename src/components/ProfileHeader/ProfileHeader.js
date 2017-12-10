/**
 * Created by Hitigerzzz on 2017/11/13.
 */
import React from 'react';
import { Button, Icon } from 'antd';
import styles from './ProfileHeader.css';

const ProfileHeader = ({ userInfo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar_wrapper}>
        {
          userInfo.avatar ?
            <img alt="avatar" src={`/api/${userInfo.avatar}`} />
            : null
        }
      </div>
      <div className={styles.user_info}>
        <div className={styles.first}>
          <div className={styles.username}>{userInfo.username}</div>
          <Button>Edit profile</Button>
        </div>
        <div className={styles.second}>
          <div>0 Followers</div>
          <div>3 Following</div>
          <div><Icon type="environment-o" />{userInfo.address}</div>
        </div>
        <p className={styles.description}>
          {userInfo.description}
        </p>
      </div>
    </div>
  );
};

ProfileHeader.propTypes = {};

export default ProfileHeader;
