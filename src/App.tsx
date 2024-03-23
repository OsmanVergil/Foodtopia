import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.tsx';
import './styles/app.css';
import FoodPage from './pages/FoodPage.tsx';
import Cart from './pages/Cart.tsx';
import FoodItemPage from './pages/FoodItemPage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<FoodPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/foodItem/:id" element={<FoodItemPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
