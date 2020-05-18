import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Layouts/Header';
// import ContactUs from '../ContactUs';
// import Lightings from '../Products/Lightings';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Header} />
      {/* 
      <Route path="/lightings" exact component={Lightings} />
      <Route path="/contactUs" exact component={ContactUs} /> */}
    </Switch>
  );
};

export default Routes;
