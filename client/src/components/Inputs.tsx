import { TextField } from "@mui/material"
import Button from '@mui/material/Button'
import { useEffect, useState } from "react"


export const Date: React.FC<DateType> = ({date}) => <TextField type="date" {...date} id="standard-basic" variant="standard" />

export const Time: React.FC<TimeType> = ({time}) => <TextField type="text" label="Время" {...time} id="standard-basic" variant="standard" />

export const Adress: React.FC<AdressType> = ({adress}) => <TextField {...adress} id="standard-basic" label="Адрес" variant="standard" />

export const FioDir: React.FC<FioDirType> = ({fioDir}) => <TextField {...fioDir} id="standard-basic" label="ФИО директора" variant="standard" />


export const Contacts: React.FC<ContactsType> = ({contacts}) => <TextField type='text'  {...contacts} id="standard-basic" label="Контакты" variant="standard" />


export const UniversInput: React.FC<UniversType> = ({params, label}) => <TextField type="text" label={label} {...params} id="standard-basic" variant="standard" />


export const Check: React.FC<CheckType> = ({was, id, getUpdateSend}) => {

    const [order, setOrder] = useState(false)

    useEffect(() => {
        if(was === 0) {
            if(order === false) return
            setOrder(false)
        } else {
            if(order === true) return
            setOrder(true)   
        } 
    }, [])
    
    return <input type="checkbox" onClick={() => getUpdateSend(id, order ? 0 : 1)} checked={order}  onChange={() => setOrder(!order)} /> 

}

export const NewButton = ({callback, value}: any) => <Button sx={{marginTop: '1em'}} onClick={callback} variant="outlined">{value}</Button> 


type input = {
    value: string | number | undefined| boolean
    onChange: (e: any) => void
}
type DateType = {
    date: input
}
type TimeType = {
    time: input
}
type AdressType = {
    adress: input
}

type FioDirType = {
    fioDir: input
}
type ContactsType = {
    contacts: input
}
type CheckType = {
    was: number
    id: number
    getUpdateSend: (id: number, was: 0 | 1) => void, 
}
type UniversType = {
    params: input
    label: string
}