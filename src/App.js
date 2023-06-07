
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ItemsPage from './pages/ItemsPage';

function App() { 
  return (
    <div>
      <Routes>
        <Route path='/' element={<ItemsPage />} />
        <Route path="/:category" element={<ItemsPage />} />
      </Routes>
    </div>
  );
}

export default App;
