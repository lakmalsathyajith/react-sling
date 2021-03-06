/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import Profile from "./Profile";
import AppList from "./AppList";
import Logs from "./Logs";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div className="main-container">
        <div className="main-menu">
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/profile" activeStyle={activeStyle}>Profile</NavLink>
          {' | '}
          <NavLink to="/app-list" activeStyle={activeStyle}>App List</NavLink>
            {' | '}
            <NavLink to="/logs" activeStyle={activeStyle}>Logs</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/profile" component={Profile} />
          <Route path="/app-list" component={AppList} />
          <Route path="/logs" component={Logs} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
