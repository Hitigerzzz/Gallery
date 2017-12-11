/**
 * Created by Hitigerzzz on 2017/12/4.
 */
const SQLite3 = require('sqlite3').verbose();
const path = require('path');

const DATABASE_FILE = path.join(__dirname, 'gallery.db');
let db;

exports.connect = () => {
  return new Promise((resolve, reject) => {
    db = new SQLite3.Database(DATABASE_FILE, (err) => {
      if (err) reject(new Error(err));
      resolve('connect database successfully');
    });
  });
};

exports.sql = (sql, param, mode) => {
  return new Promise((resolve, reject) => {
    db[mode](sql, param, (err, data) => {
      if (err) {
        console.log('sql error');
        console.error('sql error', err);
        reject(new Error(err));
      } else {
        resolve(data);
      }
    });
  });
};

