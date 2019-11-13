import React, { useState } from 'react';
import { Modal, Button, Input, InputNumber } from 'antd';
import api from '../../services/api'

import styles from './AddStock.module.scss';

const AddStock = onSubmit => {
  const [state, setState] = useState({
    visible: false,
    confirmLoading: false,
    symbol: '',
    purchasePrice: 0,
    quantity: 0
  })

  const showModal = () => {
    setState({
      visible: true,
    });
  };

  const handleOk = async () => {
    // onSubmit({
    //   name: state.name[0],
    //   purchasePrice: state.purchasePrice[0]
    // });

    console.log(state)

    await api(process.env.REACT_APP_API_URI, {
      method: 'POST',
      body: {
        symbol: state.symbol[0],
        purchasePrice: state.purchasePrice,
        quantity: state.quantity
      }
    })

    setState({
      visible: false,
    });
  };

  const handleCancel = () => {
    setState({
      visible: false,
    });
  };

  const onChange = (e, value) => {
    const { name } = e.target;
    console.log(value)

    setState({
      ...state,
      [name]: [value],
      visible: true,
    })
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Adicionar Ação
      </Button>
      <Modal
        title="Adicionar Ação"
        visible={state.visible}
        onOk={handleOk}
        confirmLoading={state.confirmLoading}
        onCancel={handleCancel}
      >
        <div className={styles.inputContainer}>
          <label>Códico</label>
          <Input id="symbol" placeholder="Ex.: PETR4.SA" allowClear onChange={onChange} />
        </div>
        <div className={styles.inputContainer}>
          <label>Preço</label>
          {/* <Input name="purchasePrice" type="number" allowClear onChange={onChange} /> */}
          <InputNumber id="purchasePrice" min={1} max={10} defaultValue={3} onChange={onChange} />
        </div>
        <div className={styles.inputContainer}>
          <label>Preço</label>
          {/* <Input name="quantity" type="number" allowClear onChange={onChange} /> */}
          <InputNumber id="quantity" min={1} max={10} defaultValue={0} onChange={onChange} />
        </div>
      </Modal>
    </>
  )
}

export default AddStock;
