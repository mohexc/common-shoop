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
import MyOrders from '../pages/order/MyOrders';
import MyOrder from '../pages/order/MyOrder';
import Profile from '../pages/profile/Profile';
import NotFound from '../pages/auth/NotFound';
import Dashborad from '../pages/admin/Dashborad';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import ForgetPassword from '../pages/auth/ForgetPassword';
import CreateProduct from '../pages/admin/CreateProduct';
import Cart from "../pages/cart/Cart"
import AppFooter from './AppFooter';

const AppContent = () => {

  return (
    <React.Fragment>
      <Layout.Content >
        <div style={{ backgroundColor: 'white', margin: '1rem', minHeight: '85.5%' }}>
          <Switch>
            <Route exact path="/dashboard"><Dashborad /></Route>
            <Route exact path="/orderslist"><OrdersList /></Route>
            <Route exact path="/orderedit/:id"><EditOrder /></Route>
            <Route exact path="/myorders"><MyOrders /></Route>
            <Route exact path="/cart"><Cart /></Route>
            <Route exact path="/myorder/:id"><MyOrder /></Route>
            <Route exact path="/orderedit/:id"><EditOrder /></Route>
            <Route exact path="/productslist"><ProductsList /></Route>
            <Route exact path="/products/edit/:id"><EditProduct /></Route>
            <Route exact path="/products/create"><CreateProduct /></Route>
            <Route exact path="/userslist"><UsersList /></Route>
            <Route exact path="/profile"><Profile /></Route>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/signin"><SignIn /></Route>
            <Route exact path="/signup"><SignUp /></Route>
            <Route exact path="/forgetpassword"><ForgetPassword /></Route>
            <Route exact path="/"><Home /></Route>
            <Route><NotFound /></Route>
          </Switch>
        </div>
        <AppFooter />
      </Layout.Content>
    </React.Fragment>
  );
}

export default AppContent;