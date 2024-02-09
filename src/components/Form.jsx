"use client";
// Form.js
import React, { useState } from 'react';
import styles from "../app/page.module.css";

const Form = ({ addShoppingItem }) => {
  const [shoppingItem, setShoppingItem] = useState({
    name: '',
    brand: '',
    quantity: '',
    price: ''
  });

  const handleChange = (e) => {
    setShoppingItem({ ...shoppingItem, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (
      shoppingItem.name.trim() === '' ||
      shoppingItem.brand.trim() === '' ||
      shoppingItem.quantity.trim() === '' ||
      shoppingItem.price.trim() === ''
    ) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    addShoppingItem(shoppingItem);
    setShoppingItem({ name: '', brand: '', quantity: '', price: '' });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Nombre del Producto</label><br />
      <input
        className={styles.form_input}
        type="text"
        name='name'
        value={shoppingItem.name}
        onChange={handleChange}
      /><br />

      <label>Marca</label><br />
      <input
        className={styles.form_input}
        type="text"
        name='brand'
        value={shoppingItem.brand}
        onChange={handleChange}
      /><br />

      <label>Cantidad</label><br />
      <input
        className={styles.form_input}
        type="text"
        name='quantity'
        value={shoppingItem.quantity}
        onChange={handleChange}
      /><br />

      <label>Precio</label><br />
      <input
        className={styles.form_input}
        type="text"
        name='price'
        value={shoppingItem.price}
        onChange={handleChange}
      /><br />

      <button className={styles.form_button} onClick={handleClick}>Agregar a la Lista</button>
    </form>
  );
};

export default Form;
