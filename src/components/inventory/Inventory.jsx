import { useEffect, useState } from "react"
import { itemsList } from "../../utils/itemsData"
import ItemCard from "./ItemCard"
import { RxCross2 } from "react-icons/rx"
import { useParams } from "react-router-dom"
import { useRoom } from "../../context/RoomId"

const Inventory = () => {
  const [searchText, setSearchText] = useState("")
  const [allItems, setAllItems] = useState([])
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [searchedResults, setSearchedResults] = useState([])
  const [loading, setLoading] = useState(false)
  const { roomNo, addRoomNo } = useRoom()
  const { roomId } = useParams()

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout)
    setSearchText(e.target.value)

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value)
        setSearchedResults(searchResult)
      }, 500)
    )
  }

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i")
    return allItems.filter(
      (item) => regex.test(item.itemName) || regex.test(item.desc)
    )
  }
  async function getData() {
    const data = await fetch(
      "https://lenient-gazelle-81.hasura.app/api/rest/users"
    )
    const res = await data.json()
    console.log("res", res)
  }
  useEffect(() => {
    try {
      addRoomNo(roomId)
      getData()
      setLoading(true)
      setAllItems(itemsList)
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }, [])

  return (
    <div className=" bg-[#eeeeee] py-5 pb-[5.6rem]">
      <div className="mb-5 text-center font-semibold">Room No. {roomNo}</div>
      <div className="mx-5 mb-7">
        <input
          name="searchBar"
          type="text"
          placeholder="Search by item Name"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="p-2 text-sm shadow-[0_1px_6px_rgb(0,0,0,0.2)] w-full outline outline-1 outline-gray-300 rounded-full px-6 focus-within:outline-gray-700"
        />
        {searchText && (
          <RxCross2
            alt="clear_icon"
            width={30}
            height={30}
            className="absolute right-8 -mt-[1.6rem]  cursor-pointer"
            onClick={() => setSearchText("")}
          />
        )}
      </div>
      <div className="flex flex-col gap-3">
        {!loading ? (
          searchText.length > 0 && searchedResults.length > 0 ? (
            searchedResults.map((item) => (
              <ItemCard data={item} key={item.id} />
            ))
          ) : searchText.length === 0 ? (
            allItems.map((item) => <ItemCard data={item} key={item.id} />)
          ) : (
            <div className=" text-center mt-[40%] font-semibold text-gray-700">
              No Items Found
            </div>
          )
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  )
}

export default Inventory
