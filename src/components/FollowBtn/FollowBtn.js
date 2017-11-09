/**
 * Created by Hitigerzzz on 2017/11/9.
 */
import React from 'react';
import { Button } from 'antd';
import styles from './FollowBtn.css';

class FollowBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollowing: true,
    };
  }

  /**
   * 关注作者
   */
  followAuthor = () => {
    this.setState({
      isFollowing: true,
    });
  };
  /**
   * 取消关注
   */
  unfollowAuthor = () => {
    this.setState({
      isFollowing: false,
    });
  };
  render() {
    const isFollowing = this.state.isFollowing;
    return (
      <div className={this.props.className}>
        {isFollowing ?
          <Button className={styles.following} onClick={this.unfollowAuthor}>
            <span className={styles.following_show}>Following</span>
            <span className={styles.following_hide}>Unfollow</span>
          </Button>
          : <Button className={styles.follow} onClick={this.followAuthor}>Follow</Button>
        }
      </div>
    );
  }
}

export default FollowBtn;
