import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      (props) => (
        //   AuthServices.getUserInfo() ? (
        //     <Component {...props} />
        //   ) : (
        <Redirect to="/" />
      )
      //   )
    }
  />
);

export default ProtectedRoute;
