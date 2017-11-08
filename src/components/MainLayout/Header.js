import React from 'react';
import { Menu } from 'antd';
import { Link } from 'dva/router';
import SearchBar from './SearchBar';
import styles from './Header.css';
import defaultAvatar from '../../assets/img/default-avatar.png';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuItem = Menu.Item;

function Header({ location }) {
  return (
    <div className={styles.header}>
      <Menu
        selectedKeys={[location.pathname]}
        mode="horizontal"
        className={styles.menu}
      >
        <MenuItem key="/follow">
          <Link to="/follow">
            FOLLOW
          </Link>
        </MenuItem>
        <MenuItem key="/activity">
          <Link to="/activity">
            ACTIVITY
          </Link>
        </MenuItem>
        <MenuItem key="/liked">
          <Link to="/liked">
            LIKED
          </Link>
        </MenuItem>
        <MenuItem key="/message">
          <Link to="/message">
            MESSAGE
          </Link>
        </MenuItem>
      </Menu>
      <div className={styles.right}>
        <div className={styles.search_bar}>
          <SearchBar />
        </div>
        <Menu
          selectedKeys={[location.pathname]}
          mode="horizontal"
          className={styles.menu}
        >
          <SubMenu key="avatar" title={<a><img alt="avatar" src={defaultAvatar} className={styles.avatar} /></a>} className={styles.submenu}>
            <MenuItemGroup>
              <MenuItem key="profile">My profile</MenuItem>
              <MenuItem key="gallery">My gallery</MenuItem>
              <MenuItem key="manage">Manage photo</MenuItem>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
