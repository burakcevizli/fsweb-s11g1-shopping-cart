import { createContext, useEffect, useState } from "react";
import { data } from "../data";

export const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(data)
    const [cart, setCart] = useState([])

    useEffect(() => {
        const cartData = localStorage.getItem("cart");
        if (cartData) {
          setCart(JSON.parse(cartData));
        }
      }, []);
    
      
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);

      
    const addItem = (item) => {
        // verilen itemi sepete ekleyin
        setCart([...cart, item])
    };
    

    return (

        <ProductsContext.Provider value={{ products, setProducts, cart, setCart, addItem }}>
            {children}
        </ProductsContext.Provider>
    )
}
export default ProductsProvider