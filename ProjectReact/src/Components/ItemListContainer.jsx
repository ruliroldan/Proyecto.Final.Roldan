import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';

const ItemListContainer = (props) => {
  // Estado para almacenar la lista de productos
  const [products, setProducts] = useState([
    { id: 1, name: 'Producto 1', price: 20, stock: 10 },
    { id: 2, name: 'Producto 2', price: 30, stock: 5 },
    // Agrega más productos según sea necesario
  ]);

  return (
    <div>
      <h1>{props.greeting}</h1>

      {/* Componente para listar los productos */}
      <ProductList products={products} />

      {/* Componente para mostrar el carrito de cada producto */}
      <CartItem />
    </div>
  );
};

export default ItemListContainer;