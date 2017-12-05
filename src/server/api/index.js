/**
 * Created by Hitigerzzz on 2017/12/3.
 */
module.exports = (app) => {
  app.use('/api/user', require('./user'));
  app.use('/api/img', require('./img'));
};

