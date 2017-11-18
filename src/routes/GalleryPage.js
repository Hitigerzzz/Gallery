/**
 * Created by Hitigerzzz on 2017/11/15.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import GalleryInfo from '../components/GalleryInfo/GalleryInfo';
import GalleryContent from '../components/GalleryContent/GalleryContent';

function IndexPage({ location }) {
  return (
    <MainLayout location={location}>
      <GalleryInfo />
      <GalleryContent />
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
