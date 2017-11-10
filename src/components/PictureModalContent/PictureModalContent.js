/**
 * Created by Hitigerzzz on 2017/11/9.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Icon } from 'antd';
import styles from './PictureModalContent.css';
import avatar from '../../assets/img/jj.jpg';
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
    const img = this.props.img;
    return (
      <div className={styles.container}>
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
              <p className={styles.post_time}>21:10 October 21st</p>
            </div>
            <FollowBtn className={styles.follow_btn} />
          </div>
          <div className={styles.buttons}>
            <Button icon="download" />
            <Button icon="plus">Collect</Button>
            <Button
              icon="heart" onClick={this.likePictureChange}
              className={this.state.isLike ? styles.liked : styles.disliked}
            >250</Button>
          </div>
          <div className={styles.description}>
            <h3>Helmcken Falls sunset</h3>
            <div className={styles.description_content}>
              Sunset at helmcken Falls. Helmcken Falls is a 141 m (463 ft) waterfall
              on the Murtle River within Wells Gray
            </div>
          </div>
          <div className={styles.comment_list}>
            <div className={styles.comment_header}>
              <div className={styles.comment_avatar_wrapper}>
                <img alt="comment-avatar" src={avatar} />
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
                <img alt="comment-avatar" src={avatar} />
              </div>
              <div className={styles.comment_body}>
                <span>Faker</span>
                <p>Outstanding photograph my friend! Great colors as always!</p>
                <div>2days ago</div>
              </div>
            </div>
            <div className={styles.comment_item}>
              <div className={styles.comment_avatar_wrapper}>
                <img alt="comment-avatar" src={avatar} />
              </div>
              <div className={styles.comment_body}>
                <span>Faker</span>
                <p>Outstanding photograph my friend! Great colors as always!</p>
                <div>2days ago</div>
              </div>
            </div>
            <div className={styles.comment_item}>
              <div className={styles.comment_avatar_wrapper}>
                <img alt="comment-avatar" src={avatar} />
              </div>
              <div className={styles.comment_body}>
                <span>Faker</span>
                <p>Outstanding photograph my friend! Great colors as always!</p>
                <div>2days ago</div>
              </div>
            </div>
            <div className={styles.comment_item}>
              <div className={styles.comment_avatar_wrapper}>
                <img alt="comment-avatar" src={avatar} />
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
    );
  }
}

PictureModal.propTypes = {
  img: PropTypes.string.isRequired,
};

export default PictureModal;
