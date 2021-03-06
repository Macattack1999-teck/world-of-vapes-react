import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";


//for render on auth ready
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';

import Icons from './components/helpers/icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

Icons()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, fbConfig)
  )
);

const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}


const rrfProps = {
  firebase,
  config: fbConfig,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) {
    return (
      <div className="auth-ready-container">
        <div className="loader"><FontAwesomeIcon icon="yin-yang" spin /></div>
        <div>Loading...</div>
      </div>
    );
  } else {
    return children
  }
}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
      <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
