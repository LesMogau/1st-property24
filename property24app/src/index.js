import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import registerServiceWorker from '/registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from './config/fbConfig'


//store enhancer remeber to research on those later
const store = createStore(rootReducer,
      compose( 
            applyMiddleware(thunk.withExtraArgument({ firebase })),
           // reduxFirestore(fbConfig),
           // reactReduxFirebase(fbConfig)
      )
      );


ReactDOM.render(
      <Provider store={store}><App/></Provider>,  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//registerServiceWorker();
