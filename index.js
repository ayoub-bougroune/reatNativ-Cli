/**
 * @format
 */
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { store }  from './src/redux/store';
import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/integration/react';

 const NRedux = () => (
     <Provider store = { store }>
        <App />
     </Provider>
   )

AppRegistry.registerComponent(appName, () => NRedux);

