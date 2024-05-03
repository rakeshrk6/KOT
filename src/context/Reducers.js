export const cartReducer = (state, action) => {
  let existingItemIndex
  let updatedCart
  switch (action.type) {
    case "addToCart":
      existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      )
      if (existingItemIndex !== -1) {
        const updatedCart = state.cart.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, qty: item.qty + 1 }
          }
          return item
        })

        return { ...state, cart: updatedCart }
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1 }],
        }
      }
    case "removeFromCart":
      updatedCart = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            const updatedQty = item.qty - 1
            if (updatedQty === 0) {
              return null
            } else {
              return { ...item, qty: updatedQty }
            }
          }
          return item
        })
        .filter(Boolean)

      return { ...state, cart: updatedCart }

    case "emptyCart":
      updatedCart = []
      return { ...state, cart: updatedCart }

    default:
      return state
  }
}
