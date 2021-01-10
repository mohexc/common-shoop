import React from 'react';
import { Row, Col, Typography, Form, Button, Upload, Input } from 'antd';
import { MailOutlined, InboxOutlined, UserOutlined } from '@ant-design/icons';

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

// main
const Profile = () => {

  const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return (
    <Row gutter={[24, 24]} style={{ height: "100%" }}>
      <Col xs={24} lg={12} style={{ padding: "2rem" }}>
        <Typography.Title level={3}>Profile</Typography.Title>
        <Form
          labelAlign="left"
          {...formItemLayout}
        >

          <Form.Item label="Dragger">
            <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>

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
        </Form>
      </Col>
      <Col xs={24} lg={12}>Profile </Col>
    </Row>
  );
}

export default Profile;