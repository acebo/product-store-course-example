import React, { useState } from 'react'
import {InputNumber, Modal} from "antd";

const ProductModal = ({ item, onCancel, onOk }) => {
  const [quantity, setQuantity] = useState(1)

  const handleSubmitForm = () => {
    const result = {
      ...item,
      quantity
    }

    onOk(result)
  }

  return <Modal
    title={`Add ${ item.name } to cart!`}
    visible={true}
    onOk={handleSubmitForm}
    onCancel={onCancel}
  >
    <strong>QUANTITY</strong>
    <div>
      <InputNumber min={1} max={item.stock} defaultValue={1} onChange={setQuantity} />
    </div>
  </Modal>
}

export default ProductModal
