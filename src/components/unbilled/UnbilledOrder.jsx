import { useState } from "react"
import UnbilledItemsModal from "./UnbilledItemsModal"

function UnbilledItem() {
  const [isOpen, setOpen] = useState(false)

  function handleOpen() {
    setOpen((prev) => !prev)
  }
  return (
    <div className="py-5 px-4 bg-white flex flex-col gap-4">
      <div className="flex justify-between">
        <div className=" font-medium">Veg Crispy Burger</div>
        <div className=" font-medium">₹ 199</div>
      </div>
      <div className="flex justify-between items-center">
        <div className=" text-slate-600 text-xs">
          <div>Order #12345567757567</div>
          <div className="mt-1">13/02/24 at 06:05pm</div>
        </div>
        <button
          onClick={handleOpen}
          className=" h-7 px-2 font-medium text-xs flex items-center bg-red-400 rounded-md"
        >
          View Order
        </button>
      </div>

      {isOpen && <UnbilledItemsModal setOpen={setOpen} />}
    </div>
  )
}

export default UnbilledItem
