import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import { AiOutlineInbox } from "react-icons/ai"
import { NavLink, useLocation } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useRoom } from "../context/RoomId"

function Nav() {
  const [isOpen, setOpen] = useState(false)
  const location = useLocation()
  const { roomNo } = useRoom()

  const isActive = (path) => {
    return location.pathname === path
  }

  const {
    state: { cart },
  } = useCart()

  function handleOpen() {
    setOpen((prev) => !prev)
  }

  return (
    <div className=" fixed top-0 w-full z-50 bg-white">
      <div className=" h-14 flex justify-between px-3 items-center shadow-md">
        <NavLink to={`/${roomNo}`}>
          <h1 className=" font-semibold text-lg text-blue-950">KOT</h1>
        </NavLink>

        <div className="flex text-3xl gap-5">
          <NavLink
            to={`/${roomNo}/cart`}
            className={`${isActive(`/${roomNo}/cart`) ? "text-blue-900" : ""}`}
          >
            {cart.length > 0 && (
              <div className=" flex absolute h-5 w-5 rounded-full bg-green-600 items-center justify-center text-xs text-white">
                {cart.length}
              </div>
            )}

            <AiOutlineInbox />
          </NavLink>
          {isOpen ? (
            <div onClick={handleOpen} className=" text-3xl">
              <IoClose />
            </div>
          ) : (
            <div onClick={handleOpen} className=" text-3xl">
              <GiHamburgerMenu />
            </div>
          )}
        </div>
      </div>

      <div
        className={`w-full absolute bg-gray-900 p-6 text-white font-medium ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <ul className="flex flex-col justify-center items-center gap-3 ">
          <NavLink
            onClick={handleOpen}
            to={`/${roomNo}`}
            className={`hover:text-blue-400 cursor-pointer ${
              isActive(`/${roomNo}`) ? "text-blue-400" : ""
            }`}
          >
            Home
          </NavLink>
          <NavLink
            onClick={handleOpen}
            to={`/${roomNo}/unbilled-order`}
            className={`hover:text-blue-400 cursor-pointer ${
              isActive(`/${roomNo}/unbilled-order`) ? "text-blue-400" : ""
            }`}
          >
            Unbilled Order
          </NavLink>
          <NavLink
            className={`hover:text-blue-400 cursor-pointer ${
              isActive("") ? "text-blue-400" : ""
            }`}
          >
            Your Order
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Nav
