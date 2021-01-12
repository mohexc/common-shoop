import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Table, Typography, Button, message } from 'antd';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs'
import { useAuthContext } from '../../context/AuthContext';

// main
const UsersList = () => {

  const history = useHistory()
  const [pageNumber, setPageNumber] = useState(1)
  const { getUsersList } = useAuthContext()
  const [users, setUsers] = useState()
  const deleteProductModalRef = useRef()

  useEffect(() => {
    fetchUser()
    // eslint-disable-next-line
  }, [])

  const fetchUser = async (keyword, pageNumber) => {
    const result = await getUsersList(keyword, pageNumber)
    if (result.complete) {
      setUsers(result.data)
      return
    }
    message.error(result.message)
  }

  const columns = [
    {
      align: "center",
      title: 'Username',
      dataIndex: 'name',
      key: 'name',
    },
    {
      align: "center",
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
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
      align: "center",
      title: 'isAdmin',
      dataIndex: 'isAdmin',
      key: 'updatedAt',
      render: (row) => JSON.stringify(row)
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
              onClick={() => history.push(`/user/edit/${row._id}`)}
            />
            <DeleteOutlined
              style={{ marginRight: "1rem", fontSize: "1.2rem" }}
            // onClick={() => deleteProductModalRef.current.showModal(row)}
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
    fetchUser("", pagination.current)
  }

  return (
    <React.Fragment>
      <Row align="middle" style={{ height: "5rem " }}>
        <Col xs={12} style={{ padding: '1rem' }}>
          <Typography.Title level={4}>UsersList</Typography.Title>
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
            onChange={handleChangeTable}
            bordered
            dataSource={users ? users.users : []}
            columns={columns}
            scroll={{ x: 1000 }}
            pagination={{
              current: pageNumber,
              total: users && users.count,
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
    </React.Fragment>
  );


}

export default UsersList;