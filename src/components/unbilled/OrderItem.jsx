function OrderItem() {
  return (
    <div className=" mx-4 py-3 border-b-2">
      <div className="flex justify-between text-slate-800">
        <div className=" font-medium text-sm">Cheesy Burger</div>
        <div className=" font-semibold text-sm">₹ 99</div>
      </div>
      <div className=" text-xs text-slate-600 mt-2">Qty: 1</div>
      {/* <div className="outline outline-1 outline-slate-200"></div> */}
    </div>
  )
}

export default OrderItem
