import { useEffect, useState } from "react"
import CartItem from "./CartItem"
import { useCart } from "../../context/CartContext"
import AfterOrderPage from "./AfterOrderPage"
import { useParams } from "react-router-dom"

function Cart() {
  const {
    state: { cart },
    dispatch,
  } = useCart()

  const [totalPrice, setTotal] = useState(0)
  const [isPlaced, setPlaced] = useState(false)
  const [message, setMessage] = useState("Order placed successfully")
  const [loading, setLoading] = useState(false)
  const { roomId } = useParams()

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0))
  }, [cart])

  function handleOrderPlace() {
    setLoading(true)
    setPlaced(true)
    dispatch({
      type: "emptyCart",
      payload: "",
    })
    setLoading(false)
  }

  return (
    <div>
      <div className="my-5 text-center font-semibold">Room No. {roomId}</div>

      {loading ? (
        <div>Loading...</div>
      ) : cart.length > 0 ? (
        <>
          <div className="mx-5 outline outline-1 rounded-md outline-gray-300 bg-slate-100 py-2">
            {cart.map((item) => {
              return <CartItem data={item} key={item.id} />
            })}
          </div>
          <div className="w-full px-5 absolute bottom-4">
            <div className="py-3 text-gray-700 font-semibold flex justify-between px-3 rounded-md items-center bg-slate-100 outline outline-1 outline-gray-300 mb-5">
              <div>Order Total</div>
              <div>₹ {totalPrice}</div>
            </div>
            <button
              onClick={handleOrderPlace}
              className="p-2 w-full bg-green-800 rounded-md text-white"
            >
              Place Order
            </button>
          </div>
        </>
      ) : isPlaced ? (
        <AfterOrderPage message={message} />
      ) : (
        <div className="flex flex-col items-center justify-center mt-16">
          <img
            className="h-60"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            alt=""
          />
          <div className="text-xl font-semibold text-gray-600 mt-10">
            Your Cart is Empty
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
