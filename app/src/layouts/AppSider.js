import React from 'react';
import { PieChartOutlined, CodeSandboxOutlined, UserOutlined, FileOutlined, TeamOutlined } from '@ant-design/icons';
import { Row, Layout, Menu } from 'antd';

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
          Dashboard
            </Menu.Item>
        <Menu.Item key="Users" icon={<UserOutlined />}>
          Users
            </Menu.Item>
        <Menu.Item key="Products" icon={<CodeSandboxOutlined />} >
          Products
          </Menu.Item>
        <Menu.Item key="Orders" icon={<FileOutlined />} >
          Orders
          </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default AppSider;