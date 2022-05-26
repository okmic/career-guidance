import { TextField } from "@mui/material"
import Button from '@mui/material/Button'
import { useEffect, useState } from "react"


export const Date: React.FC<Date> = ({date}) => <TextField type="date" {...date} id="standard-basic" variant="standard" />

export const Time: React.FC<Time> = ({time}) => <TextField type="text" label="Время" {...time} id="standard-basic" variant="standard" />

export const Adress: React.FC<Adress> = ({adress}) => <TextField {...adress} id="standard-basic" label="Адресс" variant="standard" />

export const FioDir: React.FC<FioDir> = ({fioDir}) => <TextField {...fioDir} id="standard-basic" label="ФИО директора" variant="standard" />

export const Phone: React.FC<Phone> = ({phone}) => <TextField type="number"  {...phone} id="standard-basic" label="Телефон" variant="standard" />

export const Email: React.FC<Email> = ({email}) => <TextField  {...email} id="standard-basic" label="Почта" variant="standard" />

export const Check: React.FC<Check> = ({was, id, getUpdateSend}) => {

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
type Date = {
    date: input
}
type Time = {
    time: input
}
type Adress = {
    adress: input
}

type FioDir = {
    fioDir: input
}
type Phone = {
    phone: input
}
type Email = {
    email: input
}
type Check = {
    was: number
    id: number
    getUpdateSend: (id: number, was: 0 | 1) => void, 
}