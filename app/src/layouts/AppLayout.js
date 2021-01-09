import React, { useState } from 'react';
import { Layout } from 'antd';
import AppSider from './AppSider';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppContent from './AppContent';
// main
const AppLayout = () => {
  const [collapsed, setcollapsed] = useState(true)

  return (
    <Layout>
      <AppSider collapsed={collapsed} />
      <Layout style={{ height: "100vh" }}>
        <AppHeader collapsed={collapsed} setcollapsed={setcollapsed} />
        <AppContent />
        <AppFooter />
      </Layout>
    </Layout>
  );
}

export default AppLayout;