import React, { useState } from 'react';

const ItemCounter = ({ stock }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    // Aaca podria ir la lógica para añadir el item al carrito.
    console.log(`Añadir ${count} al carrito`);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={handleIncrement} disabled={count === stock}>+</button>
      <button onClick={handleDecrement} disabled={count === 0}>-</button>
      <button onClick={handleAddToCart} disabled={count === 0}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCounter;