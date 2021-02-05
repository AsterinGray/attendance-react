import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// import ProtectedRoute from './components/common/ProtectedRoute';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ErrorPage from './pages/ErrorPage';

import AdminDashboard from './pages/admin/AdminDashboard';
import AdminMember from './pages/admin/AdminMember';

// import PraetorianDashboard from './pages/praetorian/PraetorianDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
        <Route exact path="/register" component={RegisterPage}></Route>
        <Route exact path="/admin" component={AdminDashboard}></Route>
        <Route exact path="/admin/member" component={AdminMember}></Route>
        <Route exact path="*" component={ErrorPage}></Route>
        {/* <ProtectedRoute path="/dashboard" component={}></ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
