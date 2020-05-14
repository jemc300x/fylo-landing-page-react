import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home';
import NotFoud from '../pages/NotFoud';
import TestPage from '../pages/TestPage';

const Layout = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/feature' component={TestPage} />
      <Route exact path='/team' component={TestPage} />
      <Route exact path='/singin' component={TestPage} />
      <Route exact path='/about' component={TestPage} />
      <Route exact path='/jobs' component={TestPage} />
      <Route exact path='/press' component={TestPage} />
      <Route exact path='/blog' component={TestPage} />
      <Route exact path='/contact' component={TestPage} />
      <Route exact path='/terms' component={TestPage} />
      <Route exact path='/privacy' component={TestPage} />
      <Route component={NotFoud} />
    </Switch>
  </BrowserRouter>
)

export default Layout;