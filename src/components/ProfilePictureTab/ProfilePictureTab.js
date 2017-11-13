/**
 * Created by Hitigerzzz on 2017/11/13.
 */
import React from 'react';
import { Tabs, Button } from 'antd';
import styles from './ProfilePictureTab.css';

const TabPane = Tabs.TabPane;
const operations = <Button>Extra Action</Button>;

const ProfilePictureTab = () => {
  return (
    <div className={styles.container}>
      <Tabs tabBarExtraContent={operations}>
        <TabPane tab="Photos" key="1">Content of tab 1</TabPane>
        <TabPane tab="Galleries" key="2">Content of tab 2</TabPane>
        <TabPane tab="Liked" key="3">Content of tab 3</TabPane>
      </Tabs>
    </div>
  );
};

ProfilePictureTab.propTypes = {
};

export default ProfilePictureTab;
