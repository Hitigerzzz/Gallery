/**
 * Created by Hitigerzzz on 2017/11/15.
 */
import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import GalleryInfo from '../components/GalleryInfo/GalleryInfo';
import GalleryContent from '../components/GalleryContent/GalleryContent';

function IndexPage({ location, galleryInfo, pictures }) {
  const cover = pictures[0] ? pictures[0].pictureUrl : '';
  return (
    <MainLayout location={location}>
      <GalleryInfo galleryInfo={galleryInfo} cover={cover} />
      <GalleryContent pictures={pictures} />
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  const { galleryInfo, pictures } = state.gallery;
  return { galleryInfo, pictures };
}
export default connect(mapStateToProps)(IndexPage);
