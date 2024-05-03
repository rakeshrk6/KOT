/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

function AfterOrderPage({ message }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className=" h-52"
        src="https://cdn.dribbble.com/users/2243442/screenshots/11362056/media/c9432283d2d6ba1a23f2fcd6169f2983.gif"
        alt=""
      />
      <img
        className="h-28 -mt-6"
        src="https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711429.jpg"
        alt=""
      />
      <div className="text-xl font-semibold text-gray-600 -mt-3">{message}</div>
      <Link to="/">
        <button className="p-2 bg-violet-400 px-4 rounded-lg text-white mt-10">
          Explore more
        </button>
      </Link>
    </div>
  )
}

export default AfterOrderPage
