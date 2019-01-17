import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage'
import Cartpage from './pages/Cartpage'


const Router = () => (
          <Switch>
                    <Route exact path='/' component={Homepage}></Route>
                    <Route exact path='/cart' component={Cartpage} ></Route>
          </Switch>
)

export default Router