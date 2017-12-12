/**
 * Created by Hitigerzzz on 2017/11/13.
 */
import React from 'react';
import { connect } from 'dva';
import { Tabs, Button } from 'antd';
import styles from './ProfilePictureTab.css';
import GalleryItem from '../GalleryItem/GalleryItem';
import PictureColumns from '../PictureColumns/PictureColumns';
import CreateGalleryBtn from '../GalleryCreateBtn/GalleryCreateBtn';

const TabPane = Tabs.TabPane;
const operations = <Button>Extra Action</Button>;

const ProfilePictureTab = ({ pictures, galleries }) => {
  return (
    <div className={styles.container}>
      <Tabs tabBarExtraContent={operations}>
        <TabPane tab="Photos" key="1">
          <PictureColumns pictures={pictures} />
        </TabPane>
        <TabPane tab="Galleries" key="2">
          <div className={styles.gallery_body}>
            <CreateGalleryBtn className={styles.gallery_item} />
            {
              galleries.map((gallery) => {
                return (<GalleryItem
                  gallery={gallery} className={styles.gallery_item} key={gallery.galleryId}
                />);
              })
            }
          </div>
        </TabPane>
        <TabPane tab="Liked" key="3">
          <PictureColumns pictures={pictures} />
        </TabPane>
        <TabPane tab="Followers" key="4">
          Followers
        </TabPane>
        <TabPane tab="Following" key="5">
          Following
        </TabPane>
      </Tabs>
    </div>
  );
};

ProfilePictureTab.propTypes = {
};

function mapStateToProps(state) {
  const { pictures, galleries } = state.user;
  return { pictures, galleries };
}
export default connect(mapStateToProps)(ProfilePictureTab);
