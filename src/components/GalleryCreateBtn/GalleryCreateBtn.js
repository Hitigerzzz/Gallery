/**
 * Created by Hitigerzzz on 2017/11/15.
 */
import React from 'react';
import { Icon } from 'antd';
import styles from './GalleryCreateBtn.css';
import GalleryEditModal from '../GalleryEditModal/GalleryEditModal';

class CreateGalleryBtn extends React.Component {
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
    const className = this.props.className;
    return (
      <div className={`${styles.container} ${className}`} onClick={() => this.setModalVisible(true)}>
        <Icon type="plus-circle-o" style={{ fontSize: 40, color: '#79589f' }} />
        <p>Create a new Gallery</p>
        <GalleryEditModal visible={this.state.modalVisible} mode="create" setModalVisible={this.setModalVisible} />
      </div>
    );
  }
}

export default CreateGalleryBtn;
