import React from 'react';
import { Row, Col, Typography } from 'antd';

const About = () => {

  return (
    <Row justify="center" style={{ height: "100%" }}>
      <Col xs={23}>
        <Typography.Title level={2}>About</Typography.Title>
        <p>Develop By Nut Prohmpiriya</p>
        <p>Credit : Jump Dosoft, Brand Trarnversy</p>
        <p>Fronend : reactHook, antd, less</p>
        <p>Backend : express, mongodb</p>

      </Col>
    </Row>
  );
}

export default About;