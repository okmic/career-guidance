import React from "react"
import { SortDataType, SortSetDataType } from "../filters/filters"

type _sort = {
  sortDate: (d: SortDataType, f: SortSetDataType) => void
  setData: (d: SortDataType) => void
  sortSchools: (d: SortDataType, f: SortSetDataType, v: string) => void
  sortEmpls: (d: SortDataType, f: SortSetDataType, v: string) => void
  sortEvents: (d: SortDataType, f: SortSetDataType, v: string) => void
  sortId: (d: SortDataType, f: SortSetDataType) => void
  reset: boolean
}

type DataContextType = {
  data: _sort
  children: React.ReactNode
}

export const SortContext = React.createContext({} as _sort)

export const SortContextProvider = ({data, children}: DataContextType) => {
        return <SortContext.Provider value={data}>{children}</SortContext.Provider>
}
