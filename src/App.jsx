import { Navbar } from "./components/layout/navbar/Navbar";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import { ItemListContainer } from "./components/pages/itemList/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      {/* <DarkModeContextProvider> */}
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:id" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartContextProvider>
      {/* </DarkModeContextProvider> */}
    </BrowserRouter>
  );
}

export default App;
