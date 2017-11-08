/**
 * Created by Hitigerzzz on 2017/11/6.
 */
import React from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from './MainLayout.css';

function MainLayout({ children, location }) {
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <div className="container">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
