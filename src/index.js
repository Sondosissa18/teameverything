import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Messages from './components/Messages';
import { storeInstance } from './store/Store';
import Nav from './Nav';
import * as serviceWorker from './serviceWorker';

export const StoreContext = React.createContext();

ReactDOM.render(
  <StoreContext.Provider value={storeInstance}>
    <Nav />
    <Messages />
  </StoreContext.Provider>,
  document.getElementById('root')
);

if (module.hot) {
  // enables hot module replacement if plugin is installed
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
