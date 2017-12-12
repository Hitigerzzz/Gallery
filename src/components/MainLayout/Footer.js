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
        <div className={styles.text}>
          <p>Contact Me With 734779745@qq.com</p>
          <p>Copyright © 2017. Hitigerzzz All rights reserved.</p>
        </div>
      </div>
      <div className={styles.footer_2} />
    </div>
  );
}

export default Footer;
