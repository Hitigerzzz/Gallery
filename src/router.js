import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history, app }) {
  const IndexPage = dynamic({
    app,
    models: () => [import('./models/user')],
    component: () => import('./routes/IndexPage'),
  });
  const FollowPage = dynamic({
    app,
    models: () => [import('./models/user')],
    component: () => import('./routes/FollowPage'),
  });
  const ActivityPage = dynamic({
    app,
    models: () => [import('./models/user')],
    component: () => import('./routes/ActivityPage'),
  });
  const LikedPage = dynamic({
    app,
    models: () => [import('./models/user')],
    component: () => import('./routes/LikedPage'),
  });
  const MessagePage = dynamic({
    app,
    models: () => [import('./models/user')],
    component: () => import('./routes/MessagePage'),
  });
  const ProfilePage = dynamic({
    app,
    models: () => [import('./models/user')],
    component: () => import('./routes/ProfilePage'),
  });
  const GalleryPage = dynamic({
    app,
    models: () => [import('./models/user')],
    component: () => import('./routes/GalleryPage'),
  });

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
