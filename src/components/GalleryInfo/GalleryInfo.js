/**
 * Created by Hitigerzzz on 2017/11/18.
 */
import React from 'react';
import { Button } from 'antd';
import styles from './GalleryInfo.css';
import GalleryEditModal from '../GalleryEditModal/GalleryEditModal';
import defaultAvatar from '../../assets/img/default-avatar.png';

class GalleryHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { title, description, username, avatar } = this.props.galleryInfo;
    const cover = this.props.cover;
    const url = cover ? `url(${`/api/${cover}`})` : `url(${require('../../assets/img/wide.jpg')})`;
    return (
      <div className={styles.background} style={{ backgroundImage: `${url}` }}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <div className={styles.user_info}>
              <div className={styles.avatar_wrapper}>
                <img alt="avatar" src={avatar ? `/api/${avatar}` : defaultAvatar} />
              </div>
              <span>{username}</span>
            </div>
          </div>
          <div className={styles.right}>
            <Button onClick={() => this.setModalVisible(true)}>Edit</Button>
            <GalleryEditModal setModalVisible={this.setModalVisible} mode="edit" visible={this.state.modalVisible} />
          </div>
        </div>
      </div>
    );
  }
}

GalleryHeader.propTypes = {};

export default GalleryHeader;
