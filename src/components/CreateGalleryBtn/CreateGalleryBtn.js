/**
 * Created by Hitigerzzz on 2017/11/15.
 */
import React from 'react';
import { Icon } from 'antd';
import styles from './CreateGalleryBtn.css';

const CreateGalleryBtn = ({ className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Icon type="plus-circle-o" style={{ fontSize: 40, color: '#79589f' }} />
      <p>Create a new Gallery</p>
    </div>
  );
};

export default CreateGalleryBtn;
