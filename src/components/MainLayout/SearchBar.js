/**
 * Created by Hitigerzzz on 2017/11/8.
 */
import React from 'react';
import { Input, Icon } from 'antd';
import styles from './SearchBar.css';

class SearchBar extends React.Component {

  render() {
    return (
      <div className={styles.search}>
        <Input
          placeholder="Search for photos or people"
          prefix={<Icon type="search" style={{ fontSize: 18 }} />}
        />
      </div>
    );
  }
}


SearchBar.propTypes = {};

export default SearchBar;
