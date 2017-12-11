/**
 * Created by Hitigerzzz on 2017/11/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import PictureItem from '../PictureItem/PictureItem';
import styles from './PictureColumns.css';

const PictureColumns = ({ pictures }) => {
  const picturesLeft = [];
  const picturesMid = [];
  const picturesRight = [];
  const length = pictures.length;
  const COLUMN_NUM = 3;
  let item;
  let remain;
  for (let i = 0; i < length; i += 1) {
    item = pictures[i];
    remain = i % COLUMN_NUM;
    if (remain === 0) {
      picturesLeft.push(item);
    } else if (remain === 1) {
      picturesMid.push(item);
    } else {
      picturesRight.push(item);
    }
  }
  return (
    <div className={styles.photos_body}>
      <div className={styles.column}>
        {
          picturesLeft.map((picture) => {
            return (<PictureItem
              picture={picture} className={styles.item} key={picture.pictureId}
            />);
          })
        }
      </div>
      <div className={styles.column}>
        {
          picturesMid.map((picture) => {
            return (<PictureItem
              picture={picture} className={styles.item} key={picture.pictureId}
            />);
          })
        }
      </div>
      <div className={styles.column}>
        {
          picturesRight.map((picture) => {
            return (<PictureItem
              picture={picture} className={styles.item} key={picture.pictureId}
            />);
          })
        }
      </div>
    </div>
  );
};

PictureColumns.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export default PictureColumns;
