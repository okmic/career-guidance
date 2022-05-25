import React from "react"
import { DataType, FakeLogin } from '../types'

type _data = {
  fakeData: DataType
  setLogin: (d: FakeLogin) => void
}

type DataContextType = {
  data: _data
  children: React.ReactNode
}

export const DataContext = React.createContext({} as _data)

export const DataContextProvider = ({data, children}: DataContextType) => {
        return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}
