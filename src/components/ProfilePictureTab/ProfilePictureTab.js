/**
 * Created by Hitigerzzz on 2017/11/13.
 */
import React from 'react';
import { Tabs, Button } from 'antd';
import styles from './ProfilePictureTab.css';
import PictureItem from '../PictureItem/PictureItem';
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
          <div className={styles.main_body}>
            <div className={styles.column}>
              <PictureItem src={high} className={styles.item} />
              <PictureItem src={wide} className={styles.item} />
            </div>
            <div className={styles.column}>
              <PictureItem src={wide1} className={styles.item} />
              <PictureItem src={high} className={styles.item} />
            </div>
            <div className={styles.column}>
              <PictureItem src={high} className={styles.item} />
              <PictureItem src={wide} className={styles.item} />
            </div>
          </div>
        </TabPane>
        <TabPane tab="Galleries" key="2">Content of tab 2</TabPane>
        <TabPane tab="Liked" key="3">Content of tab 3</TabPane>
      </Tabs>
    </div>
  );
};

ProfilePictureTab.propTypes = {
};

export default ProfilePictureTab;
