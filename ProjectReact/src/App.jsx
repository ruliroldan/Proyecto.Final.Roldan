import NavBar from './Components/NavBar'; 
import './App.css'
import CartWidget from './Components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
    
  return (
    <div className='App'>
      <NavBar />

      <CartWidget />

      <ItemListContainer greeting="¡Bienvenidos!!" />
    </div>
    
  );
}

export default App
