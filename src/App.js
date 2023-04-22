import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Checkout from "./scenes/checkout/checkout";
import Home from "./scenes/home/Home"; 
import ItemDetails from "./scenes/itemDetails/itemDetails";
import Confirmation from "./scenes/checkout/confirmation";
import Navbar from "./scenes/global/Navbar";

const ScrollToTop = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);
  return null;
}
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemid" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
