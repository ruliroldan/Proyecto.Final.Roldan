import React, { useState, useEffect } from 'react';

const AsyncMonk = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        // Simula la obtención de datos de una API
        const respuesta = await fetch('https://allsportsapi.com/basketball-api');
        const datos = await respuesta.json();

        // Establece los datos obtenidos en el estado
        setProductos(datos);
      } catch (error) {
        console.error('Error al obtener los datos de productos:', error);
      }
    };

    // Llama a la función obtenerProductos
    obtenerProductos();
  }, []); // Array de dependencias vacío para ejecutar el efecto solo una vez al montar el componente

  return (
    <div>
      <h2>Componente AsyncMonk</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default AsyncMonk;