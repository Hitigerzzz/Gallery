import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import 'antd/dist/antd.less';
import './index.css';

// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
