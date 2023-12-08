import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import './styles/app.css'
import FoodPage from "./pages/FoodPage";
import Cart from "./pages/Cart";
import FoodItemPage from "./pages/FoodItemPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<FoodPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/foodItem/:id' element={<FoodItemPage id/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
