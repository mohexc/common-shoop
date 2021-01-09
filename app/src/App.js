import React from 'react';
import AppLayout from './layouts/AppLayout'
import { BrowserRouter } from "react-router-dom"
import './App.less';

const App = () => {

  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;