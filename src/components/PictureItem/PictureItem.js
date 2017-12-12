/**
 * Created by Hitigerzzz on 2017/11/14.
 */
import React from 'react';
import { Button } from 'antd';
import styles from './PictureItem.css';
import PictureDetailModal from '../PictureDetailModal/PictureDetailModal';
import defaultAvatar from '../../assets/img/default-avatar.png';

class PictureItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: false,
      modalVisible: false,
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
    const { className, picture } = this.props;
    return (
      <div className={`${styles.container} ${className}`} onClick={() => this.setModalVisible(true)}>
        <PictureDetailModal
          picture={picture}
          visible={this.state.modalVisible} setModalVisible={this.setModalVisible}
        />
        <img alt="item" src={`/api/${picture.pictureUrl}`} />
        <div className={styles.info}>
          <div className={styles.buttons}>
            <Button
              icon="heart" onClick={this.likePictureChange}
              className={this.state.isLike ? styles.liked : styles.disliked}
            >{picture.likeNum}
            </Button>
            <Button icon="plus">Collect</Button>
          </div>
          <div className={styles.footer}>
            <div className={styles.user_info}>
              <div className={styles.avatar_wrapper}>
                <img alt="avatar" src={picture.avatar ? `/api/${picture.avatar}` : defaultAvatar} />
              </div>
              <span className={styles.username}>{picture.username}</span>
            </div>
            <Button icon="download" />
          </div>
        </div>
      </div>
    );
  }

}

PictureItem.propTypes = {};

export default PictureItem;
