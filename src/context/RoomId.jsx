/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const RoomContext = createContext()

export const RoomProvider = ({ children }) => {
  const [roomNo, setRoomNo] = useState()
  const { roomId } = useParams()

  function addRoomNo(roomId) {
    setRoomNo(roomId)
  }

  const value = {
    roomNo,
    addRoomNo,
  }
  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>
}

export const useRoom = () => useContext(RoomContext)
