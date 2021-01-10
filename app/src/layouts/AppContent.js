import React from 'react';
import { Layout, } from 'antd';
import { Switch, Route, } from "react-router-dom";
import About from '../pages/home/About';
import Home from '../pages/home/Home';
import OrdersList from '../pages/admin/OrdersList';
import ProductsList from '../pages/admin/ProductsList';
import EditProduct from '../pages/admin/EditProduct';
import EditOrder from '../pages/admin/EditOrder';
import UsersList from '../pages/admin/UsersList';
import UpdateProfile from '../pages/profile/UpdateProfile';
import NotFound from '../pages/auth/NotFound';
import Dashborad from '../pages/admin/Dashborad';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import ForgetPassword from '../pages/auth/ForgetPassword';
import CreateProduct from '../pages/admin/CreateProduct';

const AppContent = () => {

  return (
    <Layout.Content style={{ padding: '1rem', }}>
      <div style={{ backgroundColor: 'white', height: '100%', overflowY: 'auto' }}>
        <Switch>
          <Route exact path="/dashboard"><Dashborad /></Route>
          <Route exact path="/orderslist"><OrdersList /></Route>
          <Route exact path="/orderedit/:id"><EditOrder /></Route>
          <Route exact path="/productslist"><ProductsList /></Route>
          <Route exact path="/products/edit/:id"><EditProduct /></Route>
          <Route exact path="/products/create"><CreateProduct /></Route>
          <Route exact path="/userslist"><UsersList /></Route>
          <Route exact path="/updateprofile"><UpdateProfile /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/signin"><SignIn /></Route>
          <Route exact path="/signup"><SignUp /></Route>
          <Route exact path="/forgetpassword"><ForgetPassword /></Route>
          <Route exact path="/"><Home /></Route>
          <Route><NotFound /></Route>
        </Switch>
      </div>
    </Layout.Content>
  );
}

export default AppContent;