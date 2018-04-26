import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'mobx-react';

// App stores
import CalculatorStore from './Calculator/store';

const stores = {
    CalculatorStore
};

const root = <Provider {...stores }><App /></Provider>;

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
