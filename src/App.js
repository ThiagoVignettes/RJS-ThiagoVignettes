import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting={'🌿 Bienvenido a Depilogros 🌿'} />
      </main>
    </>
  );
}

export default App;
