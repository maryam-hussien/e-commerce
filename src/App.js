import './App.css';
import NavBar from './Components/NavBar';
import Slider from './Components/Slider';
import ProductList from './Components/ProductsList'; 
import {Routes, Route } from "react-router-dom";
import About from './Components/About';
import ProductDetails from './Components/ProductDetails';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <Routes>
        <Route
          path='/'
           element={
            <>
            <Slider />
            <ProductList />
            </>
           }
        />
        <Route
          path='about'
          element={<About/>}
        />
        <Route
          path='product/:productId'
          element={<ProductDetails/>}
        />
      </Routes>
      </header>
    </div>
  );
}

export default App;
