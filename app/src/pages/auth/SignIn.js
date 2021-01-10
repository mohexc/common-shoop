import React from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Typography } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import singinImage from '../../image/signin.jpg'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

// main
const SignIn = () => {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row align="middle" style={{ height: "100%" }}>
      <Col xs={10} style={{ padding: "2rem" }} >
        <Typography.Title level={2}>SIGN IN <LoginOutlined /></Typography.Title>
        <Form
          {...layout}
          labelAlign="left"
          name="normal_login"
          initialValues={{ remember: true, }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your Username!', },]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your Password!', },]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link to="/forgetpassword">Forgot password</Link>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button block type="primary" htmlType="submit" style={{ marginBottom: "1rem" }}>Log in</Button>
            <span style={{ margin: "1rem" }}>Or</span>
            <Link to="/signup">register now!</Link>
          </Form.Item>
        </Form>
      </Col>
      <Col xs={14} style={{
        backgroundImage: `url(${singinImage})`,
        backgrounRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: "cover",
        height: "100%"
      }}>

      </Col>
    </Row>

  );
};

export default SignIn