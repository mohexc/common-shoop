import React from 'react';
import { Avatar, Popover } from 'antd';
import { UserOutlined, CodeSandboxOutlined, LogoutOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

// main
const UserButton = () => {
  const history = useHistory()
  const { user, logout } = useAuthContext()

  const _logout = () => {
    localStorage.removeItem('user')
    logout()
  }

  const content = (
    <div style={{ width: '200px' }}>
      <p style={{ cursor: 'pointer' }} onClick={() => history.push('/profile')}>
        <UserOutlined style={{ marginRight: '1rem', fontSize: "1.2rem" }} />
        <strong>Account</strong>
      </p>
      <p style={{ cursor: 'pointer' }} onClick={() => history.push('/myorders')}>
        <CodeSandboxOutlined style={{ marginRight: '1rem', fontSize: "1.2rem" }} />
        <strong>Order</strong>
      </p>
      <p style={{ cursor: 'pointer' }} onClick={() => _logout()}>
        <LogoutOutlined style={{ marginRight: '1rem', fontSize: "1.2rem" }} />
        <strong>Logout</strong>
      </p>
    </div >

  )
  return (
    <Popover content={content} >
      <div>
        <Avatar src="User">
          User
        </Avatar>
        <span style={{ marginLeft: '1rem' }}>{user.name}</span>
      </div>
    </Popover>
  );
}

export default UserButton;