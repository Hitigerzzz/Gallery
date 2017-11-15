/**
 * Created by Hitigerzzz on 2017/11/8.
 */
import React from 'react';
import { Button, Modal } from 'antd';
import styles from './PictureCard.css';
import demo from '../../assets/img/wide.jpg';
import avatar from '../../assets/img/jj.jpg';
import PictureModal from '../PictureModalContent/PictureModalContent';
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
  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }
  likePictureChange = () => {
    this.setState({
      isLike: !this.state.isLike,
    });
  };

  render() {
    return (
      <div className={`${styles.container} ${this.props.className}`}>
        <Modal
          style={{ top: 20 }}
          visible={this.state.modalVisible}
          footer={null}
          width={'96%'}
          onCancel={() => this.setModalVisible(false)}
        >
          <PictureModal img={demo} />
        </Modal>
        <div className={styles.header}>
          <div className={styles.avatar_wrapper}>
            <img alt="avatar" src={avatar} />
          </div>
          <div className={styles.post_origin}>
            <a className={styles.author_name}>Faker</a>
            <p className={styles.post_time}>2017年10月21日 21:10</p>
          </div>
          <FollowBtn className={styles.follow_btn} />
        </div>
        <a className={styles.body} onClick={() => this.setModalVisible(true)}>
          <img alt="post" src={demo} />
        </a>
        <div className={styles.footer}>
          <div className={styles.footer_header}>
            <h3>Helmcken Falls sunset</h3>
            <div className={styles.buttons}>
              <Button icon="message" />
              <Button icon="plus" />
              <Button
                icon="heart" onClick={this.likePictureChange}
                className={this.state.isLike ? styles.liked : styles.disliked}
              >250</Button>
            </div>
          </div>
          <div className={styles.footer_description}>
            Sunset at helmcken Falls. Helmcken Falls is a 141 m (463 ft) waterfall
            on the Murtle River within Wells Gray
            Provincial Park in British Columbia, Canada. The protection of Helmcken
            Falls was one of the reasons for the
            creation of Wells Gray Provincial Park in 1939.
            Helmcken Falls is the fourth highest waterfall in Canada, measured by
            total straight drop without a break.
          </div>
        </div>
      </div>
    );
  }
}

PictureCard.propTypes = {};

export default PictureCard;
