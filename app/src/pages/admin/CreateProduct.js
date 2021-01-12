import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Button, Typography, message, Upload, InputNumber, Modal } from 'antd';
import { useHistory } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';
import ImgCrop from 'antd-img-crop';
import getBase64 from '../../utils/getBase64';
import axios from 'axios'

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
  const [uploading, setUploading] = useState(false)
  const [pictures, setPictures] = useState()
  const [images, setimages] = useState({
    previewVisible: false, previewImage: '',
    previewTitle: '', fileList: []
  })

  useEffect(() => {
    if (pictures) {
      console.log(pictures)
    }
  }, [pictures])

  const handlePreview = async (file) => {
    console.log(file)
    debugger
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setimages({
      fileList: images.fileList,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  const handleChangeFile = ({ fileList }) => {
    fileList.map(file => file.status = 'done')
    setimages({ ...images, fileList })
  };

  const upload = async () => {

    const formData = new FormData()
    try {
      const config = {
        headers: {
          'Content-Type': "multipart/form-data"
        }
      }

      images.fileList.forEach(file => formData.append('imgCollection', file.originFileObj))

      const { data } = await axios.post('/api/upload', formData, config)
      debugger
      // const result = await Promise.all(images.fileList.map(async (file) => {
      //   formData.append('imgCollection', file.originFileObj)
      //   debugger
      //   const { data } = await axios.post('/api/upload', formData, config)
      //   return data
      // }))
      message.success(data)
      console.log(data)
      debugger

    } catch (error) {
      const result = error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      message.error(result)
    }

  }

  const onFinish = async (values) => {


    // const result = await createProduct(values)
    // if (!result.complete) {
    //   return message.error(result.message)
    // }
    // message.success(result.message)
    // history.push('/productslist')
  }

  return (
    <React.Fragment>
      <Row>
        <Col xs={24} lg={12} style={{ padding: "1rem" }}>
          <Row justify="space-between">
            <h1 style={{ cursor: 'pointer' }} onClick={() => history.goBack()}>Back</h1>
            <h1 >Create Product</h1>
          </Row>
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
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              label="Count In Stock"
              name="countInStock"
              rules={[{ required: true, message: 'Please input your Count In Stock!' }]}
            >
              <InputNumber min={0} style={{ width: '100%' }} />
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
                    // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={images.fileList}
                    onChange={handleChangeFile}
                    onPreview={handlePreview}
                  >
                    {images.fileList.length < 6 && '+ Upload'}
                  </Upload>
                </ImgCrop>
              </Col>
            </Row>

            <Button block className="m-2" onClick={() => upload()}>upload</Button>
            <Form.Item  {...tailLayout}>
              <Button block type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} lg={12}> </Col>
      </Row>
      <Modal
        visible={images.previewVisible}
        title={images.previewTitle}
        footer={null}
        onCancel={() => setimages({ ...images, previewVisible: false })}
      >
        <img alt="example" style={{ width: '100%' }} src={images.previewImage} />
      </Modal>
    </React.Fragment>

  );
}

export default CreateProduct;