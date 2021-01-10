import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

// main
const CartButton = () => {
  const history = useHistory()

  return (
    <div onClick={() => history.push('/cart')} style={{ marginRight: "2rem", cursor: "pointer" }}>
      <ShoppingCartOutlined style={{ fontSize: "1.2rem" }} />
      <strong style={{ marginLeft: "1rem" }}>0</strong>
    </div>
  );
}

export default CartButton;