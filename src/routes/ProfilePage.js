/**
 * Created by Hitigerzzz on 2017/11/13.
 */
import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import ProfileHeader from '../components/ProfileHeader/ProfileHeader';
import ProfilePictureTab from '../components/ProfilePictureTab/ProfilePictureTab';

function IndexPage({ location, userInfo }) {
  return (
    <MainLayout location={location}>
      <ProfileHeader userInfo={userInfo} />
      <ProfilePictureTab />
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  const { userInfo } = state.user;
  return { userInfo };
}
export default connect(mapStateToProps)(IndexPage);
