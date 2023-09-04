import React from "react";
import { Route } from "react-router-dom";
// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductsProvider from "./contexts/ProductContext";
import CartProvider from "./contexts/CartContext";

function App() {

  return (
    <ProductsProvider>
      <CartProvider>
        <div className="App">
          <Navigation />

          {/* Routelar */}
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>

            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </div>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
