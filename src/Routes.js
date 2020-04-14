import React from 'react';
import {Switch} from 'react-router-dom';
import Loadable from 'react-loadable';

import * as Views from './views';

import SimpleLayout from './views/layouts/SimpleLayout';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './views/home/Home'),
  loading: () => <div>Loading...</div>, // eslint-disable-line
});

const LoadableAbout = Loadable({
  loader: () => import(/* webpackChunkName: 'about' */ './views/about/About'),
  loading: () => <div>Loading...</div> // eslint-disable-line
});

const Routes = () => (
  <Switch>
    <SimpleLayout exact path="/" component={LoadableHome} />
    <SimpleLayout path="/about" component={LoadableAbout} />
    <SimpleLayout path="/logic" component={Views.Logic} />
  </Switch>
);

export default Routes;
