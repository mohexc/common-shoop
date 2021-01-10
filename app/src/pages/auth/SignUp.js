import React, { useEffect } from 'react'
import { Form, Input, Button, Row, Col, Typography, message } from 'antd';
import { UserOutlined, LockOutlined, SolutionOutlined, MailOutlined } from '@ant-design/icons';
import signupImage from '../../image/signup.jpeg'
import { useAuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

// main
const SignUp = () => {
  const history = useHistory()
  const [form] = Form.useForm();
  const { register, user } = useAuthContext()

  useEffect(() => {
    if (user) {
      return history.push('/')
    }
  }, [user])

  const onFinish = async (values) => {
    const result = await register(values)
    if (!result.complete) {
      return message.error(result.message)
    }
    message.success(result.message)
    history.push('/signin')
  };

  return (
    <Row align="middle" style={{ height: "100%" }}>
      <Col xs={10} style={{ padding: "2rem" }} >
        <Typography.Title level={2}>Sign Up <SolutionOutlined /> </Typography.Title>
        <Form
          {...layout}
          form={form}
          labelAlign="left"
          name="normal_login"
          initialValues={{ remember: true, }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your Email!', },
              { type: 'email', message: 'The input is not valid E-mail!', },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Username"
            name="name"
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
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              { required: true, message: 'Please input your Confirm Password!', },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>


          <Form.Item {...tailLayout}>
            <Button block type="primary" htmlType="submit" >SIGN UP</Button>
          </Form.Item>
        </Form>
      </Col>
      <Col xs={14} style={{
        backgroundImage: `url(${signupImage})`,
        backgrounRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: "cover",
        height: "100%"
      }}>

      </Col>
    </Row>

  );
};

export default SignUp