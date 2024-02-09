// Todo.js
import React from 'react';
import styles from "../app/page.module.css";

const Todo = ({ item, deleteTodo, index }) => {
  return (
    <div className={styles.list}>
      <h3 className='Titulo3'>Nombre: {item.name}</h3>
      <p>Marca: {item.brand}</p>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio: {item.price}</p>
      <button className={styles.btn_delete} onClick={() => deleteTodo(index)}>X</button>
    </div>
  );
};

export default Todo;
