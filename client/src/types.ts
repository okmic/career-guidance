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
    phone: number
    email: string

}
export type DataType = Array<ObjType>

export type ContextType = {
    children: React.ReactNode
}