import React from 'react';
import { Row, Col, Typography } from 'antd';

const Profile = () => {

  return (
    <Row gutter={[24, 24]} style={{ height: "100%" }}>
      <Col xs={24} lg={12} style={{ padding: "2rem" }}>
        <Typography.Title level={3}>Profile</Typography.Title>

      </Col>
      <Col xs={24} lg={12}>Profile </Col>
    </Row>
  );
}

export default Profile;