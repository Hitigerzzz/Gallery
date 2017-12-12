/**
 * Created by Hitigerzzz on 2017/11/9.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Modal } from 'antd';
import styles from './PictureDetailModal.css';
import defaultAvatar from '../../assets/img/default-avatar.png';
import FollowBtn from '../FollowBtn/FollowBtn';
import commentIcon from '../../assets/img/comment-icon.png';

class PictureModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLike: false,
    };
  }

  likePictureChange = () => {
    this.setState({
      isLike: !this.state.isLike,
    });
  };

  render() {
    const { picture, visible, setModalVisible } = this.props;
    return (
      <Modal
        style={{ top: 30 }}
        visible={visible}
        footer={null}
        width={'96%'}
        onCancel={() => setModalVisible(false)}
      >
        <div className={styles.container}>
          <div className={styles.img_wrapper}>
            <img alt="post" src={`/api/${picture.pictureUrl}`} />
          </div>
          <div className={styles.right}>
            <div className={styles.author}>
              <div className={styles.avatar_wrapper}>
                <img alt="avatar" src={picture.avatar ? `/api/${picture.avatar}` : defaultAvatar} />
              </div>
              <div className={styles.post_origin}>
                <a className={styles.author_name}>{picture.username}</a>
                <p className={styles.post_time}>{picture.posttime}</p>
              </div>
              <FollowBtn className={styles.follow_btn} />
            </div>
            <div className={styles.buttons}>
              <Button icon="download" />
              <Button icon="plus">Collect</Button>
              <Button
                icon="heart" onClick={this.likePictureChange}
                className={this.state.isLike ? styles.liked : styles.disliked}
              >{picture.likeNum}</Button>
            </div>
            <div className={styles.description}>
              <h3>{picture.title}</h3>
              <div className={styles.description_content}>
                {picture.description}
              </div>
            </div>
            <div className={styles.comment_list}>
              <div className={styles.comment_header}>
                <div className={styles.comment_avatar_wrapper}>
                  <img alt="comment-avatar" src={defaultAvatar} />
                </div>
                <div className={styles.comment_input}>
                  <Input
                    placeholder="Add a comment"
                    suffix={<img alt="comment-icon" src={commentIcon} style={{ height: 15, width: 15 }} />}
                  />
                </div>
              </div>
              <div className={styles.comment_item}>
                <div className={styles.comment_avatar_wrapper}>
                  <img alt="comment-avatar" src={defaultAvatar} />
                </div>
                <div className={styles.comment_body}>
                  <span>Faker</span>
                  <p>Outstanding photograph my friend! Great colors as always!</p>
                  <div>2days ago</div>
                </div>
              </div>
              <div className={styles.comment_item}>
                <div className={styles.comment_avatar_wrapper}>
                  <img alt="comment-avatar" src={defaultAvatar} />
                </div>
                <div className={styles.comment_body}>
                  <span>Faker</span>
                  <p>Outstanding photograph my friend! Great colors as always!</p>
                  <div>2days ago</div>
                </div>
              </div>
              <div className={styles.comment_item}>
                <div className={styles.comment_avatar_wrapper}>
                  <img alt="comment-avatar" src={defaultAvatar} />
                </div>
                <div className={styles.comment_body}>
                  <span>Faker</span>
                  <p>Outstanding photograph my friend! Great colors as always!</p>
                  <div>2days ago</div>
                </div>
              </div>
              <div className={styles.comment_item}>
                <div className={styles.comment_avatar_wrapper}>
                  <img alt="comment-avatar" src={defaultAvatar} />
                </div>
                <div className={styles.comment_body}>
                  <span>Faker</span>
                  <p>Outstanding photograph my friend! Great colors as always!</p>
                  <div>2days ago</div>
                </div>
              </div>
              <div className={styles.comment_item}>
                <div className={styles.comment_avatar_wrapper}>
                  <img alt="comment-avatar" src={defaultAvatar} />
                </div>
                <div className={styles.comment_body}>
                  <span>Faker</span>
                  <p>Outstanding photograph my friend! Great colors as always!</p>
                  <div>2days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

PictureModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
};

export default PictureModal;
