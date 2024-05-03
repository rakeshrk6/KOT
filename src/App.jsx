import Cart from "./components/cart/Cart"
import Inventory from "./components/inventory/Inventory"
import Nav from "./components/Nav"
import Unbilled from "./components/unbilled/Unbilled"
import { CartProvider } from "./context/CartContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RoomProvider } from "./context/RoomId"

function App() {
  return (
    <>
      <RoomProvider>
        <CartProvider>
          <BrowserRouter>
            <Nav />

            <Routes>
              <Route path="/:roomId/cart" element={<Cart />} />
              <Route path="/:roomId" element={<Inventory />} />
              <Route path="/:roomId/unbilled-order" element={<Unbilled />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </RoomProvider>
    </>
  )
}

export default App
