import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Table, Typography, Button, message } from 'antd';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';
import DeleteProduct from './components/DeleteProduct';
import dayjs from 'dayjs'
// main
const ProductsList = () => {
  const history = useHistory()
  const [pageNumber, setPageNumber] = useState(1)
  const { getProductList } = useProductContext()
  const [products, setProducts] = useState()
  const deleteProductModalRef = useRef()

  useEffect(() => {
    fetchProduct()
    // eslint-disable-next-line
  }, [])

  const fetchProduct = async (keyword, pageNumber) => {
    const result = await getProductList(keyword, pageNumber)
    if (result.complete) {
      setProducts(result.data)
      return
    }
    message.error(result.message)
  }

  const columns = [
    {
      align: "center",
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      align: "center",
      title: 'createdAt',
      dataIndex: "createdAt",
      key: 'createdAt',
      render: (row) => dayjs(row).format('DD/MM/YYYY')
    },
    {
      align: "center",
      title: 'updatedAt',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (row) => dayjs(row).format('DD/MM/YYYY')
    },
    {
      width: "10%",
      align: "center",
      title: 'Operation',
      key: 'Operation',
      render: (row) => {
        return (
          <Row align="center" style={{ height: "100%" }}>
            <FormOutlined
              style={{ marginRight: "1rem", fontSize: "1.2rem", cursor: "pointer" }}
              onClick={() => history.push(`/products/edit/${row._id}`)}
            />
            <DeleteOutlined
              style={{ marginRight: "1rem", fontSize: "1.2rem" }}
              onClick={() => deleteProductModalRef.current.showModal(row)}
            />
          </Row>
        )
      }
    },
  ]

  const handleChangeTable = (pagination, filters, sorter) => {
    // console.log(pagination, filters, sorter)
    // debugger
    setPageNumber(pagination.current)
    fetchProduct('', pagination.current)
  }

  return (
    <React.Fragment>
      <Row align="middle" style={{ height: "5rem " }}>
        <Col xs={12} style={{ padding: '1rem' }}>
          <Typography.Title level={4}>ProductsList</Typography.Title>
        </Col>
        <Col xs={12} >
          <Row justify="end" style={{ marginRight: "2rem" }}>
            <Link to="/products/create">
              <Button type="primary">Create Product</Button>
            </Link>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={23}>
          <Table
            onChange={handleChangeTable}
            bordered
            dataSource={products ? products.products : []}
            columns={columns}
            scroll={{ x: 1000 }}
            pagination={{
              current: pageNumber,
              total: products && products.count,
              showSizeChanger: true,
              pageSizeOptions: [
                "5",
                "10",
                "15",
                "20",
                "25",
                "30",
                "35",
                "49",
                "50",
              ],
            }}
          />
        </Col>
      </Row>
      <DeleteProduct ref={deleteProductModalRef} reload={fetchProduct} />
    </React.Fragment>
  );


}

export default ProductsList;