import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'typeface-roboto';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
        <App />
    , document.querySelector('.root'));

registerServiceWorker();
