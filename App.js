import logo from './logo.svg';
import DataProvider from './context/DataProvider';

//components
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <DataProvider>
    <Home />
    </DataProvider>
    
  );
}

export default App;
