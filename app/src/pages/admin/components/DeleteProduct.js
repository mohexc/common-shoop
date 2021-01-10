import React, { useState, useImperativeHandle } from 'react';
import { Row, Col, Modal, Button, message } from 'antd';
import { useProductContext } from '../../../context/ProductContext';

const DeleteProduct = ({ reload }, ref) => {
  const [loading, setloading] = useState();
  const [visible, setVisible] = useState(false);
  const [record, setRecord] = useState();
  const { deleteProduct } = useProductContext()
  useImperativeHandle(ref, () => ({
    showModal: (record) => {
      setVisible(true);
      setRecord(record);
    },
  }));
  const _deleteProduct = async () => {
    setloading(true);
    const result = await deleteProduct(record._id)
    if (!result.complete) {
      setloading(false);
      return message.error(result.message)
    }
    message.success(result.message)
    setVisible(false);
    setloading(false);
    reload()
    return
  }
  if (!record) return null
  return (
    <Modal
      title="Delete Product"
      destroyOnClose={true}
      visible={visible}
      onCancel={() => setVisible(false)}
      footer={null}
      closable={true}>
      <Row>
        <Col>
          <p>Are you sure delete  "{record && record.name}" </p>
        </Col>
      </Row>
      <Row justify="end">
        <Button style={{ marginRight: "2rem" }} onClick={() => setVisible(false)}>CANCEL</Button>
        <Button loading={loading} disabled={loading} type="primary" onClick={_deleteProduct}>DELETE</Button>
      </Row>
    </Modal>


  );
}

export default React.forwardRef(DeleteProduct);