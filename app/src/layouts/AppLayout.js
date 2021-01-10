import React, { useState } from 'react';
import { Layout } from 'antd';
import AppSider from './AppSider';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppContent from './AppContent';
import { useAuthContext } from '../context/AuthContext';
// main
const AppLayout = () => {
  const { user } = useAuthContext()
  const [collapsed, setcollapsed] = useState(false)
  return (
    <Layout>
      {(user && user.isAdmin) && <AppSider collapsed={collapsed} />}
      <Layout style={{ height: "100vh" }}>
        <AppHeader collapsed={collapsed} setcollapsed={setcollapsed} />
        <AppContent />
        <AppFooter />
      </Layout>
    </Layout>
  );
}

export default AppLayout;