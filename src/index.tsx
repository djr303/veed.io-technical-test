import React from "react";
import ReactDOM from "react-dom";
import UIContainer from './components/app/ui-container';
import { Provider } from 'react-redux';
import store from './repositories'
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UIContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
