import React from 'react';
import ReactDOM from 'react-dom';

import MainPage from './main-page';

import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(<MainPage />, document.getElementById('root'));
serviceWorker.unregister();
