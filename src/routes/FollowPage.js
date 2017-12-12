/**
 * Created by Hitigerzzz on 2017/11/8.
 */
import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import PictureCardList from '../components/PictureCard/PictureCardList';
import styles from './page.css';

function IndexPage({ location, pictures }) {
  return (
    <MainLayout location={location}>
      <div className={styles.picture_card_list}>
        <PictureCardList pictures={pictures} />
      </div>
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  const { pictures } = state.picture;
  return { pictures };
}
export default connect(mapStateToProps)(IndexPage);
