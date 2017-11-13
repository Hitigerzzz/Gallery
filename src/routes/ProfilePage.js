/**
 * Created by Hitigerzzz on 2017/11/13.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import ProfileHeader from '../components/ProfileHeader/ProfileHeader';
import ProfilePictureTab from '../components/ProfilePictureTab/ProfilePictureTab';

function IndexPage({ location }) {
  return (
    <MainLayout location={location}>
      <ProfileHeader />
      <ProfilePictureTab />
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
