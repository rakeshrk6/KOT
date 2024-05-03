/* eslint-disable react/prop-types */
import OrderItem from "./OrderItem"
import { RxCrossCircled } from "react-icons/rx"

function UnbilledItemsModal({ setOpen }) {
  function handleClose() {
    setOpen()
  }
  return (
    <div className="flex justify-center w-full z-50  ">
      <div className="bg-white absolute top-20 w-[88%] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] outline outline-1 outline-slate-200">
        <RxCrossCircled
          onClick={handleClose}
          className=" absolute right-1 mt-1 text-red-500 text-xl cursor-pointer"
        />
        <div className=" px-5  py-7">
          <div className=" font-medium text-sm text-gray-700">
            ORDER ID: 3898383974384
          </div>
          <div className=" text-xs text-gray-600">
            Placed on 18/03/24 at 08:53pm
          </div>
        </div>

        <OrderItem />

        <OrderItem />
        <OrderItem />
        <OrderItem />
        <div className=" mt-10 mb-4 flex justify-between mx-4 p-2 px-4 rounded-md font-semibold bg-pink-500 text-white">
          <div>Total Bill</div>
          <div>₹ 500</div>
        </div>
      </div>
    </div>
  )
}

export default UnbilledItemsModal
