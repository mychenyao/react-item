import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routers from "./router/index"
import './static/js/rem'
import { Provider } from 'react-redux'
import configureStore from './store/index';
import './utils/request'

const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
        <Routers />
      </Provider>,
 document.getElementById('root'));
registerServiceWorker();
