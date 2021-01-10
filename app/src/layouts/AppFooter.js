import React from 'react';
import { Row, Layout } from 'antd';

const AppFooter = () => {

  return (
    <Layout.Footer style={{ backgroundColor: "white", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)" }}>
      <Row justify="center" align="middle" style={{ height: "100%" }}>
        Develop by Nat Prohmpiriya
      </Row>
    </Layout.Footer>
  );
}

export default AppFooter;