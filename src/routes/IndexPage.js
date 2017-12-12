import React from 'react';
import { connect } from 'dva';
import styles from './page.css';
import MainLayout from '../components/MainLayout/MainLayout';
import IndexImage from '../assets/img/index.jpg';

function IndexPage({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.index}>
        <img alt="index" src={IndexImage} />
        <div className={styles.welcome}>Welcome to Gallery!</div>
      </div>
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
