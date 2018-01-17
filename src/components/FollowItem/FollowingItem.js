/* eslint-disable react/jsx-boolean-value */
/**
 * Created by Hitigerzzz on 2017/12/12.
 */
import React from 'react';
import styles from './FollowingItem.css';
import FollowBtn from '../FollowBtn/FollowBtn';
import defaultAvatar from '../../assets/img/default-avatar.png';

class FollowingItem extends React.Component {
  render() {
    const { following, className } = this.props;
    return (
      <div className={`${styles.container} ${className}`}>
        <div className={styles.info}>
          <div className={styles.avatar_wrapper}>
            <img alt="avatar" src={following.avatar ? `/api/${following.avatar}` : defaultAvatar} />
          </div>
          <span className={styles.username}>{following.username}</span>
        </div>
        <FollowBtn isFollowing={true} followingId={following.followingId} />
      </div>
    );
  }

}

export default FollowingItem;
