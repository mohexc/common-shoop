import React from 'react';
import { PieChartOutlined, CodeSandboxOutlined, UserOutlined, FileOutlined } from '@ant-design/icons';
import { Row, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const AppSider = ({ collapsed }) => {

  return (
    <Layout.Sider collapsed={collapsed} collapsedWidth='80'>

      <Row justify="center" style={{ padding: "1rem" }}>
        <div style={{
          height: "50px",
          width: "100%",
          backgroundColor: "whitesmoke",
        }} />
      </Row>

      <Menu theme="dark" mode="inline">
        <Menu.Item key="Dashboard" icon={<PieChartOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="Users" icon={<UserOutlined />}>
          <Link to="/userslist">Users</Link>
        </Menu.Item>
        <Menu.Item key="Products" icon={<CodeSandboxOutlined />} >
          <Link to="/productslist">Products</Link>
        </Menu.Item>
        <Menu.Item key="Orders" icon={<FileOutlined />} >
          <Link to="/orderslist">Orders</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default AppSider;