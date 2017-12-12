/**
 * Created by Hitigerzzz on 2017/11/15.
 */
import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from './GalleryCreateBtn.css';
import GalleryEditModal from '../GalleryEditModal/GalleryEditModal';

class CreateGalleryBtn extends React.Component {
  setModalVisible = (visible) => {
    this.props.dispatch({
      type: 'user/saveGalleryModalVisible',
      payload: {
        galleryModalVisible: visible,
      },
    });
  };
  render() {
    const className = this.props.className;
    return (
      <div className={`${styles.container} ${className}`} onClick={() => this.setModalVisible(true)}>
        <Icon type="plus-circle-o" style={{ fontSize: 40, color: '#79589f' }} />
        <p>Create a new Gallery</p>
        <GalleryEditModal visible={this.props.galleryModalVisible} mode="create" setModalVisible={this.setModalVisible} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { galleryModalVisible } = state.user;
  return { galleryModalVisible };
}
export default connect(mapStateToProps)(CreateGalleryBtn);
