import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';

import FetchFB from './store/FetchFB/FetchFB';
import FBConfig from './config/FBConfig';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './index.css';

import App from './App';
import Quiz from './controllers/Quiz/Quiz';

import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore })),
    reduxFirestore(FBConfig)
  )
);

const ROUTER = (
  <Provider store={store}>
    <Router>
      <div>
        <FetchFB />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={App} />
          <Route path={process.env.PUBLIC_URL + '/quiz'} component={Quiz} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(ROUTER, document.getElementById('root'));

serviceWorker.unregister();
