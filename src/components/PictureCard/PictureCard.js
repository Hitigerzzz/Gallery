/**
 * Created by Hitigerzzz on 2017/11/8.
 */
import React from 'react';
import { Button } from 'antd';
import styles from './PictureCard.css';
import defaultAvatar from '../../assets/img/default-avatar.png';
import PictureModal from '../PictureDetailModal/PictureDetailModal';
import FollowBtn from '../FollowBtn/FollowBtn';

class PictureCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: false,
      modalVisible: false,
      isFollowing: false,
    };
  }
  setModalVisible = (modalVisible) => {
    this.setState({ modalVisible });
  };
  likePictureChange = () => {
    this.setState({
      isLike: !this.state.isLike,
    });
  };

  render() {
    const picture = this.props.picture;
    return (
      <div className={`${styles.container} ${this.props.className}`}>
        <PictureModal
          picture={picture} visible={this.state.modalVisible} setModalVisible={this.setModalVisible}
        />
        <div className={styles.header}>
          <div className={styles.avatar_wrapper}>
            <img alt="avatar" src={picture.avatar ? `/api/${picture.avatar}` : defaultAvatar} />
          </div>
          <div className={styles.post_origin}>
            <a className={styles.author_name}>{picture.username}</a>
            <p className={styles.post_time}>{picture.posttime}</p>
          </div>
          <FollowBtn className={styles.follow_btn} />
        </div>
        <a className={styles.body} onClick={() => this.setModalVisible(true)}>
          <img alt="post" src={`/api/${picture.pictureUrl}`} />
        </a>
        <div className={styles.footer}>
          <div className={styles.footer_header}>
            <h3>{picture.title}</h3>
            <div className={styles.buttons}>
              <Button icon="message" />
              <Button icon="plus" />
              <Button
                icon="heart" onClick={this.likePictureChange}
                className={this.state.isLike ? styles.liked : styles.disliked}
              >{picture.likeNum}</Button>
            </div>
          </div>
          <div className={styles.footer_description}>
            {picture.description}
          </div>
        </div>
      </div>
    );
  }
}

PictureCard.propTypes = {};

export default PictureCard;
