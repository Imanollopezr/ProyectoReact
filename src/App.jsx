import './App.css';
import Card from './components/Card';
import Counter from './components/counter';

function App() {
  return (
    <div>
      <h1>Mi Proyecto con React y Vite</h1>
      <Card title="Hola Mundo" description="Este es un ejemplo de componente en React." />
      <Counter />
    </div>
  );
}

export default App;
