"use client"
// Home.js
import React, { useState } from 'react';
import Form from '@/components/Form';
import Todo from '@/components/Todo';
import styles from "../app/page.module.css";

const Home = () => {
  const [shoppingList, setShoppingList] = useState([]);

  const addShoppingItem = (item) => {
    setShoppingList([...shoppingList, item]);
  };

  const deleteShoppingItem = (index) => {
    const newShoppingList = [...shoppingList];
    newShoppingList.splice(index, 1);
    setShoppingList(newShoppingList);
  };

  return (
    <main className={styles.main}>
      <div className="App">
        <div>
          <p>Aquí haremos nuestra lista de compras</p>
          <Form addShoppingItem={addShoppingItem} />
          {shoppingList.map((value, index) => (
            <Todo key={index} item={value} index={index} deleteTodo={deleteShoppingItem} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
