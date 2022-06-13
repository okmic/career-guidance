import React from "react"

export type FakeLogin = {
    login: string
    password: string
  } | null

export type ObjType = {
    id: number
    school: string
    fio: string
    day: string, 
    time: string
    adress: string
    fioDir: string
    contacts: string
    event: string
    was: number
}

export type StatementObjType = {
    id: number
    fio: string
    fio_student: string
    school: string
    contacts: string
    day: string
}

export type DataType = Array<ObjType>
export type StatementType = Array<StatementObjType>

export type ContextType = {
    children: React.ReactNode
}

export type SchoolType = {
    id: number
    school: string
}
export type EmployeesType = {
    id: number
    fio: string
}
export type EventsType = {
    id: number
    event: string
}