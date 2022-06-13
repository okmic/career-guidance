import { DataType, ObjType, StatementObjType, StatementType } from "../types";

export type SortDataType = DataType | null
export type SortSetDataType = (a: SortDataType ) => void

export const sortDate = (data: any, setData:  any) => {
    
    if (data) {
      const newData:DataType = JSON.parse(JSON.stringify(data)).sort(function (a: any, b: any) {
        a = new Date(a.day);
        b = new Date(b.day);
        return a > b ? 1 : a < b ? -1 : 0
      })

      setData(newData)
    }
  }


export const sortSchools = (data: any, setData:  any, value: string) => data && setData(data.filter((item: any) => item.school === value))

export const sortEmpls = (data: any, setData:  any, value: string) => data && setData(data.filter((item:any) => item.fio === value))



export const sortEvents = (data: SortDataType, setData:  SortSetDataType, value: string) => data && setData(data.filter((item: ObjType) => item.event === value))

export const sortId = (data: any, setData:  any) => data && setData(JSON.parse(JSON.stringify(data)).sort((a: any, b: any) => a.id < b.id ? -1 : 1))
