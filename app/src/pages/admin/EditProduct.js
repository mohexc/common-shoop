import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Input, Button, message, Upload, InputNumber } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';
import ImgCrop from 'antd-img-crop';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

// main
const EditProduct = () => {
  const [fileList, setFileList] = useState([])
  const [product, setProduct] = useState()
  const params = useParams()
  const history = useHistory()
  const { getProduct, updateProduct } = useProductContext()

  useEffect(() => {
    fetchProduct()
  }, [])

  const handleChangeFile = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const fetchProduct = async () => {
    const result = await getProduct(params.id)
    debugger
    if (!result.complete) {
      return message.error(result.message)
    }
    debugger
    setProduct(result.data)
  }
  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

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
            <h1 style={{ cursor: 'pointer' }} onClick={() => history.goBack()}>Back</h1>
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
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your product!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Brand"
              name="brand"
              rules={[{ required: true, message: 'Please input your Brand!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Category"
              name="category"
              rules={[{ required: true, message: 'Please input your Category!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: 'Please input your Price!' }]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Count In Stock"
              name="countInStock"
              rules={[{ required: true, message: 'Please input your Count In Stock!' }]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please input your description!' }]}
            >
              <Input.TextArea />
            </Form.Item>
            <Row>
              <Col xs={{ offset: 8, span: 16 }}>
                <ImgCrop rotate>
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={handleChangeFile}
                    onPreview={onPreview}
                  >
                    {fileList.length < 6 && '+ Upload'}
                  </Upload>
                </ImgCrop>
              </Col>
            </Row>
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