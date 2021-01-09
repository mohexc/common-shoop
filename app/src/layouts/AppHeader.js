import React, { useState } from 'react';
import { Row, Col, Layout, Menu, Input } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';
import SignInButton from './Component.js/SignInButton';
import { Link } from 'react-router-dom';

const AppHeader = ({ setcollapsed, collapsed }) => {

  return (
    <Layout.Header style={{ backgroundColor: "white", paddingLeft: '0.5rem', boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)" }}>
      <Row>
        <Col xs={6}>
          <Row align='middle' style={{ height: "100%" }}>
            {!collapsed && <MenuFoldOutlined onClick={() => setcollapsed(!collapsed)} style={{ fontSize: "1.5rem", }} />}
            {collapsed && <MenuUnfoldOutlined onClick={() => setcollapsed(!collapsed)} style={{ fontSize: "1.5rem", }} />}
            <Link to="/" className="font-blod font-size-150 " style={{ marginLeft: "2rem" }}>COMMON SHOP</Link>
          </Row>
        </Col>
        <Col xs={12}>
          <Row align="middle" style={{ height: '100%' }}>
            <Input.Search enterButton />
          </Row>
        </Col>
        <Col xs={6}>
          <Row justify="end" align="middle" style={{ height: '100%' }}>
            <SignInButton />
          </Row>
        </Col>
      </Row>

    </Layout.Header>
  );
}

export default AppHeader;