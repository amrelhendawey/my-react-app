import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
function App() {
  
  return (
      <div className="App">
      <div>
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;
