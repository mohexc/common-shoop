import React from 'react';
import { Layout, } from 'antd';
import { Switch, Route, } from "react-router-dom";
import About from '../pages/home/About';
import Home from '../pages/home/Home';

const AppContent = () => {

  return (
    <Layout.Content style={{ padding: '1rem', }}>
      <div style={{ backgroundColor: 'white', height: '100%' }}>
        <Switch>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/"><Home /></Route>
        </Switch>
      </div>
    </Layout.Content>
  );
}

export default AppContent;