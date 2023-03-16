// import logo from './logo.svg';
import "./App.css";
import "./style.css";
import NavigationAd from "./components/NavigationAd";
import Navbar from "./components/Navbar";
// import ProductCart from "./components/ProductCart";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Login from './pages/Login';

import { useState } from 'react';
import Cart from "./pages/Cart";

function App() {
  const [user, setUser] = useState('')


  const [query, setQuery] = useState('')
  const [filteredData, setFilteredData] = useState()
  const [currentProduct, setCurrentProduct] = useState()

  console.log(currentProduct)
  return (
    <div className="app">
     

      <BrowserRouter>
      { user &&    
        <Navbar setQuery={setQuery} setFilteredData={setFilteredData} />
      }
        <Routes>
        <Route exact path="/" element={ <Login setUser={setUser}/>} />
          <Route exact path="/home" element={ <LandingPage filteredData={filteredData} query={query} setCurrentProduct={setCurrentProduct} />} />
          <Route exact path="/productDetails" element={ <ProductDetails currentProduct={currentProduct} />} />
          <Route exact path="/cart" element={ <Cart />} />


        </Routes>
      </BrowserRouter>

      {/* <ProductCart/> */}
      {/* <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} /> */}
    </div>
  );
}

export default App;
