import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { createStock } from '../../services/stocks';

import styles from './AddStock.module.scss';

const AddStock = () => {
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

  const handleOk = () => {
    createStock({
      symbol: state.symbol,
      purchasePrice: state.purchasePrice,
      quantity: state.quantity
    });

    setState({
      visible: false,
    });
  };

  const handleCancel = () => {
    setState({
      visible: false,
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
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
        onCancel={handleCancel}
      >
        <div className={styles.inputContainer}>
          <label>Códico</label>
          <input name="symbol" placeholder="Ex.: PETR4.SA" onChange={onChange} />
        </div>
        <div className={styles.inputContainer}>
          <label>Preço</label>
          <input name="purchasePrice" placeholder="Ex.: 23.4" type="number" onChange={onChange} />
        </div>
        <div className={styles.inputContainer}>
          <label>Quantidade de ações</label>
          <input name="quantity" placeholder="Ex.: 23" type="number" onChange={onChange} />
        </div>
      </Modal>
    </>
  )
}

export default AddStock;
