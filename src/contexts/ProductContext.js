import { createContext, useContext, useState } from "react";
import { data } from "../data";



export const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(data)
    const [cart, setCart] = useState([])
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