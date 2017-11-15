import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import FollowPage from './routes/FollowPage';
import ActivityPage from './routes/ActivityPage';
import LikedPage from './routes/LikedPage';
import MessagePage from './routes/MessagePage';
import ProfilePage from './routes/ProfilePage';
import GalleryPage from './routes/GalleryPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/follow" exact component={FollowPage} />
        <Route path="/activity" exact component={ActivityPage} />
        <Route path="/liked" exact component={LikedPage} />
        <Route path="/message" exact component={MessagePage} />
        <Route path="/:userID" exact component={ProfilePage} />
        <Route path="/gallery/:galleryID" exact component={GalleryPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
