import { useCart } from "../../context/CartContext"

/* eslint-disable react/prop-types */
function CartItem({ data }) {
  const { dispatch } = useCart()

  function handleAdd() {
    dispatch({
      type: "addToCart",
      payload: data,
    })
  }
  function handleRemove() {
    dispatch({
      type: "removeFromCart",
      payload: data,
    })
  }
  return (
    <div className="grid grid-cols-3 px-3 py-4">
      <div className=" text-left">
        <div>{data.itemName}</div>
        <span className=" text-xs"> @ {data.price}</span>
      </div>
      <div className="w-full flex items-center justify-center cursor-pointer">
        <div className="flex h-6 outline w-[4.3rem] outline-1 outline-slate-300 text-center">
          <div
            onClick={handleRemove}
            className="flex-1 text-red-500 hover:bg-red-100"
          >
            -
          </div>
          <div className="flex-1 font-medium text-slate-700">{data.qty}</div>
          <div
            onClick={handleAdd}
            className="flex-1 text-green-600 hover:bg-green-200"
          >
            +
          </div>
        </div>
      </div>

      <div className=" text-right my-auto">₹ {data.qty * data.price}</div>
    </div>
  )
}

export default CartItem
