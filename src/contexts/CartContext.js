import { createContext, useContext } from "react";
import { ProductsContext } from "./ProductContext";

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const {cart} = useContext(ProductsContext)
    const {setCart} = useContext(ProductsContext)
    
    return (
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider