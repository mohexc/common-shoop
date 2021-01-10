import React from 'react';
import { Row, Col, Form, Input, Button, Typography, message, } from 'antd';
import { useHistory } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

// main
const CreateProduct = () => {

  const history = useHistory()
  const { createProduct } = useProductContext()

  const onFinish = async (values) => {

    const result = await createProduct(values)
    if (!result.complete) {
      return message.error(result.message)
    }
    message.success(result.message)
    history.push('/productslist')

  }
  return (
    <React.Fragment>
      <Row>
        <Col xs={24} lg={12} style={{ padding: "1rem" }}>
          <Typography.Title level={4} onClick={() => history.goBack()}>Back</Typography.Title>
        </Col>
        <Col></Col>
      </Row>

      <Row gutter={[24, 24]} justify="center" style={{ height: "100%" }}>
        <Col xs={24} lg={12} style={{ padding: '2rem' }}>
          <Form
            name="Create Product"
            {...layout}
            labelAlign="left"
            onFinish={onFinish}
          >
            <Form.Item
              label="Name Product"
              name="name"
              rules={[{ required: true, message: 'Please input your product!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item  {...tailLayout}>
              <Button block type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} lg={12}> </Col>
      </Row>
    </React.Fragment>

  );
}

export default CreateProduct;