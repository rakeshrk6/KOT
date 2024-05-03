import { useRoom } from "../../context/RoomId"
import UnbilledItem from "./UnbilledOrder"

function Unbilled() {
  const { roomNo } = useRoom()
  return (
    <div className=" bg-slate-200 flex flex-col gap-3 py-3 h-[91vh]">
      <div className=" text-base font-semibold text-gray-800 text-center my-3">
        Unbilled Order : Room No. {roomNo}
      </div>

      <UnbilledItem />
      <UnbilledItem />
    </div>
  )
}

export default Unbilled
