import { DataType, ObjType } from "../types";

export type SortDataType = DataType | null
export type SortSetDataType = (a: SortDataType ) => void

export const sortDate = (data: SortDataType, setData:  SortSetDataType) => {
    
    if (data) {
      const newData:DataType = JSON.parse(JSON.stringify(data)).sort(function (a: any, b: any) {
        a = new Date(a.day);
        b = new Date(b.day);
        return a > b ? 1 : a < b ? -1 : 0;
      })

      setData(newData)
    }
  }

export const sortSchools = (data: SortDataType, setData:  SortSetDataType, value: string) => data && setData(data.filter((item: ObjType) => item.school === value))

export const sortEmpls = (data: SortDataType, setData:  SortSetDataType, value: string) => data && setData(data.filter((item: ObjType) => item.fio === value))

export const sortEvents = (data: SortDataType, setData:  SortSetDataType, value: string) => data && setData(data.filter((item: ObjType) => item.event === value))

export const sortId = (data: SortDataType, setData:  SortSetDataType) => data && setData(JSON.parse(JSON.stringify(data)).sort((a: any, b: any) => a.id < b.id ? -1 : 1))
