/**
 * Created by Hitigerzzz on 2017/11/14.
 */
import React from 'react';
import { Button, Modal } from 'antd';
import styles from './PictureItem.css';
import PictureModalContent from '../PictureModalContent/PictureModalContent';
import avatar from '../../assets/img/jj.jpg';


class PictureItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: false,
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
    const { className, src } = this.props;
    return (
      <div className={`${styles.container} ${className}`} onClick={() => this.setModalVisible(true)}>
        <Modal
          style={{ top: 20 }}
          visible={this.state.modalVisible}
          footer={null}
          width={'96%'}
          onCancel={() => this.setModalVisible(false)}
        >
          <PictureModalContent img={src} />
        </Modal>
        <img alt="item" src={src} />
        <div className={styles.info}>
          <div className={styles.buttons}>
            <Button
              icon="heart" onClick={this.likePictureChange}
              className={this.state.isLike ? styles.liked : styles.disliked}
            >250
            </Button>
            <Button icon="plus">Collect</Button>
          </div>
          <div className={styles.footer}>
            <div className={styles.user_info}>
              <div className={styles.avatar_wrapper}>
                <img alt="avatar" src={avatar} />
              </div>
              <span className={styles.username}>Faker</span>
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
