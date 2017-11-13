/**
 * Created by Hitigerzzz on 2017/11/8.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import PictureCardList from '../components/PictureCard/PictureCardList';

function IndexPage({ location }) {
  return (
    <MainLayout location={location}>
      <PictureCardList />
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);