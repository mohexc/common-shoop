import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Input, Button, message, } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

// main
const EditProduct = () => {

  const [product, setProduct] = useState()
  const params = useParams()
  const history = useHistory()
  const { getProduct, updateProduct } = useProductContext()

  useEffect(() => {
    fetchProduct()
  }, [])

  const fetchProduct = async () => {
    const result = await getProduct(params.id)
    debugger
    if (!result.complete) {
      return message.error(result.message)
    }
    debugger
    setProduct(result.data)
  }


  const onFinish = async (values) => {

    const result = await updateProduct(product._id, values)
    if (!result.complete) {
      return message.error(result.message)
    }
    message.success(result.message)
    history.push('/productslist')

  }

  if (!product) return null

  return (
    <React.Fragment>
      <Row>
        <Col xs={24} lg={12} style={{ padding: "1rem" }}>
          <Row justify="space-between">
            <h1 style={{ cursor: "pointer" }} onClick={() => history.goBack()}>Back</h1>
            <h1 >Edit Product</h1>
          </Row>
        </Col>
        <Col xs={24} lg={12}></Col>
      </Row>

      <Row gutter={[24, 24]} justify="center" style={{ height: "100%" }}>
        <Col xs={24} lg={12} style={{ padding: '2rem' }}>

          <Form
            name="Edit Product"
            {...layout}
            labelAlign="left"
            onFinish={onFinish}
            initialValues={product}
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

export default EditProduct;