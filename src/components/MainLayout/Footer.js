/**
 * Created by Hitigerzzz on 2017/11/6.
 */
import React from 'react';
import styles from './Footer.css';

import icon from '../../assets/yay.jpg';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_1}>
        <img alt="Gallery" className={styles.logo} src={icon} />
        <div className={styles.text}>
          <p>Contact Us With xxx@lilystudio.org</p>
          <p>Copyright © 2014. LilyStudio All rights reserved.</p>
        </div>
      </div>
      <div className={styles.footer_2} />
    </div>
  );
}

export default Footer;
