import NavBar from './Components/NavBar'; 
import './App.css'
import CartWidget from './Components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCounter from './components/itemCount';

function App() {
    
  return (
    <div className='App'>
      <NavBar />

      <CartWidget />

      <ItemListContainer greeting="¡Bienvenidos!!" />
      <ItemCounter />
    </div>
    
  );
}

export default App
