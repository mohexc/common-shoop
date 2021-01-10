import React from 'react'
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { MailOutlined, } from '@ant-design/icons';
import forgetpasswordImage from '../../image/forgetpassword.jpg'

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
        <Typography.Title level={2}>Forget Passowrd <MailOutlined /></Typography.Title>
        <Form
          {...layout}
          labelAlign="left"
          name="forgetpassowrd"
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

          <Form.Item {...tailLayout}>
            <Button block type="primary" htmlType="submit" style={{ marginBottom: "1rem" }}>SUBMIT</Button>
          </Form.Item>
        </Form>
      </Col>
      <Col xs={14} style={{
        backgroundImage: `url(${forgetpasswordImage})`,
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