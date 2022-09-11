import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import {App} from './sc1-main/m1-ui/App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {store} from "./sc1-main/m2-bll/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
);

reportWebVitals();
