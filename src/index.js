import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';

import FetchFB from './components/FetchFB/FetchFB';
import FBConfig from './config/FBConfig';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './index.css';

import App from './App';
import SignIn from './components/forms/SignIn';
import Register from './components/forms/Register';
import CreateQuiz from './components/CreateQuiz/CreateQuiz';
import Quiz from './controllers/Quiz/Quiz';

import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(FBConfig, {
      userProfile: 'users',
      useFirestoreForProfile: true,
      attachAuthIsReady: true
    }),
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
          <Route
            exact
            path={process.env.PUBLIC_URL + '/signin'}
            component={SignIn}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/register'}
            component={Register}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/createquiz'}
            component={CreateQuiz}
          />
          <Route path={process.env.PUBLIC_URL + '/quiz'} component={Quiz} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(ROUTER, document.getElementById('root'));
  serviceWorker.unregister();
});
