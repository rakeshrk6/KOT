/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "./Reducers"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], cart: [] })

  const value = {
    state,
    dispatch,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
