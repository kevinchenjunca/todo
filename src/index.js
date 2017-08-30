import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/app';
import Login from './components/login';
import Todos from './components/to_dos';
import RequireAuth from './components/require_authentication';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import './style/style.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={Login} />      
        <Route path="to_dos" component={RequireAuth(Todos)} />    
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.app'));
