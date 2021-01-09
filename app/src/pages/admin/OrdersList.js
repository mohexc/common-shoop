import React from 'react';
import { Row, Col, Table, Typography, Button } from 'antd';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

// main
const OrdersList = () => {

  const history = useHistory()
  const data = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },

  ]

  const columns = [
    {
      align: "center",
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      align: "center",
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      align: "center",
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      width: "10%",
      align: "center",
      title: 'Operation',
      dataIndex: 'address',
      key: 'address',
      render: (row) => {
        return (
          <Row align="center" style={{ height: "100%" }}>
            <FormOutlined
              style={{ marginRight: "1rem", fontSize: "1.2rem", cursor: "pointer" }}
              onClick={() => history.push('/orderedit/${row')}
            />
            <DeleteOutlined
              style={{ marginRight: "1rem", fontSize: "1.2rem" }}

            />
          </Row>
        )
      }
    },
  ]

  return (
    <React.Fragment>
      <Row align="middle" style={{ height: "5rem " }}>
        <Col xs={12} style={{ padding: '1rem' }}>
          <Typography.Title level={4}>OrdersList</Typography.Title>
        </Col>
        <Col xs={12} >
          <Row justify="end" style={{ marginRight: "2rem" }}>
            <Button type="primary">Create Product</Button>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={23}>
          <Table
            bordered
            dataSource={data}
            columns={columns}
          />
        </Col>
      </Row>

    </React.Fragment>
  );


}

export default OrdersList;