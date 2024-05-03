import { useEffect, useState } from "react"
import { useCart } from "../../context/CartContext"

/* eslint-disable react/prop-types */
const ItemCard = ({ data }) => {
  const [quantity, setQuantity] = useState(0)
  const {
    state: { cart },
    dispatch,
  } = useCart()

  useEffect(() => {
    cart.forEach((item) => {
      if (item.id === data.id) {
        setQuantity(item.qty)
        return
      }
    })
  }, [cart])

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
    <div className=" bg-white mx-5 flex justify-between items-center p-4 outline outline-1 outline-slate-200 rounded-md">
      <div className="flex flex-col gap-2 mr-5">
        <div className=" font-medium text-gray-900">{data.itemName}</div>
        <div className=" text-sm">₹ {data.price}</div>
        <div className=" text-xs">{data.desc}</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img className="w-10 rounded-md h-10" src={data.img} />
        <button className=" bg-green-200 overflow-hidden w-[4.3rem] rounded-md text-xs font-semibold mt-1">
          {cart.some((p) => p.id === data.id) ? (
            <div className="flex">
              <div
                onClick={handleRemove}
                className="flex-1 p-1.5 px-2 hover:bg-green-400 text-center h-full"
              >
                -
              </div>
              <div className="flex-1 p-1.5  text-center">{quantity}</div>
              <div
                onClick={handleAdd}
                className="flex-1 p-1.5 px-2 hover:bg-green-400 text-center"
              >
                +
              </div>
            </div>
          ) : (
            <div onClick={handleAdd} className="p-1.5">
              ADD
            </div>
          )}
        </button>
      </div>
    </div>
  )
}

export default ItemCard
