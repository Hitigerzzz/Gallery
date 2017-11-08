import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import FollowPage from './routes/FollowPage';
import ActivityPage from './routes/ActivityPage';
import LikedPage from './routes/LikedPage';
import MessagePage from './routes/MessagePage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/follow" exact component={FollowPage} />
        <Route path="/activity" exact component={ActivityPage} />
        <Route path="/liked" exact component={LikedPage} />
        <Route path="/message" exact component={MessagePage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
