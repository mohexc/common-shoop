import React from 'react';
import AppLayout from './layouts/AppLayout'
import { BrowserRouter } from "react-router-dom"
import AuthContext from "./context/AuthContext"
import ProductContext from "./context/ProductContext"
import OrderContext from "./context/OrderContext"
import CartContext from "./context/CartContext"
import './App.less';

const App = () => {

  return (
    <BrowserRouter>
      <AuthContext>
        <ProductContext>
          <CartContext>
            <OrderContext>
              <AppLayout />
            </OrderContext>
          </CartContext>
        </ProductContext>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;