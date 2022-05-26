import { Checkbox, TextField } from "@mui/material"
import Button from '@mui/material/Button'

type input = {
    value: string | number | undefined| boolean
    onChange: (e: any) => void
}
type Date = {
    date: input
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
    check: {
        value:  boolean
        onClick: () => void
    }
}

export const Date: React.FC<Date> = ({date}) => <TextField type="date" {...date} id="standard-basic" variant="standard" />

export const Adress: React.FC<Adress> = ({adress}) => <TextField {...adress} id="standard-basic" label="Адресс" variant="standard" />

export const FioDir: React.FC<FioDir> = ({fioDir}) => <TextField {...fioDir} id="standard-basic" label="ФИО директора" variant="standard" />

export const Phone: React.FC<Phone> = ({phone}) => <TextField type="number"  {...phone} id="standard-basic" label="Телефон" variant="standard" />

export const Email: React.FC<Email> = ({email}) => <TextField  {...email} id="standard-basic" label="Почта" variant="standard" />

const label = { inputProps: { 'aria-label': 'Checkbox' } }

export const Check: React.FC<Check> = ({check}) => <Checkbox {...check} {...label} size="small" />

export const NewButton = ({callback, value}: any) => <Button sx={{marginTop: '1em'}} onClick={callback} variant="outlined">{value}</Button> 