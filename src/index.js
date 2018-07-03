import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routers from "./router/index"
ReactDOM.render(<Routers/>, document.getElementById('root'));
registerServiceWorker();
