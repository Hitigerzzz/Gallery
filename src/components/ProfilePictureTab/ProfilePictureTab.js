/**
 * Created by Hitigerzzz on 2017/11/13.
 */
import React from 'react';
import { Tabs, Button } from 'antd';
import styles from './ProfilePictureTab.css';
import GalleryItem from '../GalleryItem/GalleryItem';
import PictureColumns from '../PictureColumns/PictureColumns';
import CreateGalleryBtn from '../GalleryCreateBtn/GalleryCreateBtn';
import high from '../../assets/img/high.jpg';
import wide from '../../assets/img/wide.jpg';
import wide1 from '../../assets/img/wide1.jpg';

const TabPane = Tabs.TabPane;
const operations = <Button>Extra Action</Button>;

const ProfilePictureTab = () => {
  return (
    <div className={styles.container}>
      <Tabs tabBarExtraContent={operations}>
        <TabPane tab="Photos" key="1">
          <PictureColumns />
        </TabPane>
        <TabPane tab="Galleries" key="2">
          <div className={styles.gallery_body}>
            <CreateGalleryBtn className={styles.gallery_item} />
            <GalleryItem src={[high, wide, wide1]} className={styles.gallery_item} />
            <GalleryItem src={[high, wide, wide1]} className={styles.gallery_item} />
            <GalleryItem src={[high, wide, wide1]} className={styles.gallery_item} />
            <GalleryItem src={[high, wide, wide1]} className={styles.gallery_item} />
          </div>
        </TabPane>
        <TabPane tab="Liked" key="3">Content of tab 3</TabPane>
      </Tabs>
    </div>
  );
};

ProfilePictureTab.propTypes = {
};

export default ProfilePictureTab;
