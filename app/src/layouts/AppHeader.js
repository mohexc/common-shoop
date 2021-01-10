import React from 'react';
import { Row, Col, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';
import SignInButton from './Components/SignInButton';
import UserButton from './Components/UserButton';
import { Link } from 'react-router-dom';
import CartButton from './Components/CartButton';
import { useAuthContext } from '../context/AuthContext';

const AppHeader = ({ setcollapsed, collapsed }) => {

  const { user } = useAuthContext()

  return (
    <Layout.Header style={{ backgroundColor: "white", paddingLeft: '0.5rem', boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)" }}>
      <Row style={{ height: '100%' }}>
        <Col xs={12} lg={12}>
          <Row align='middle' style={{ height: "100%" }}>
            {user && user.isAdmin
              ? (
                <React.Fragment>
                  {!collapsed && <MenuFoldOutlined onClick={() => setcollapsed(!collapsed)} style={{ fontSize: "1.5rem", }} />}
                  {collapsed && <MenuUnfoldOutlined onClick={() => setcollapsed(!collapsed)} style={{ fontSize: "1.5rem", }} />}
                </React.Fragment>
              )
              : null
            }

            <Link to="/" className="font-blod font-size-150 " style={{ marginLeft: "2rem" }}>COMMON SHOP</Link>
          </Row>
        </Col>
        <Col xs={12} lg={12}>
          <Row justify="end" align="middle" style={{ height: '100%' }}>
            <CartButton />
            {user && <UserButton />}
            {!user && <SignInButton />}

            <Link to="/about" style={{ marginLeft: "2rem" }}><strong>About</strong></Link>
          </Row>
        </Col>
      </Row>

    </Layout.Header>
  );
}

export default AppHeader;