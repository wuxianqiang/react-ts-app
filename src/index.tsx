import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import history from './history'
import Counter from './components/Counter'
import Detail from './components/Detail'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ul>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/detail">Detail</Link></li>
      </ul>
      <Switch>
        <Route path="/counter" component={Counter}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Redirect to="/counter"></Redirect>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
