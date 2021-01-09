import React from 'react';
import { Row, Layout } from 'antd';

const AppLayout = () => {

  return (
    <Layout>
      <Layout.Sider></Layout.Sider>
      <Layout style={{ height: "100vh" }}>
        <Layout.Header style={{ backgroundColor: "white", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)" }}>
          Header
        </Layout.Header>
        <Layout.Content style={{ padding: '1rem', }}>
          <div style={{ backgroundColor: 'white', height: '100%' }}>Content</div>
        </Layout.Content>
        <Layout.Footer style={{ backgroundColor: "white", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)" }}>
          <Row justify="center" align="middle" style={{ height: "100%" }}>
            Footer
          </Row>
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}

export default AppLayout;