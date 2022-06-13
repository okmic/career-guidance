import { SelectChangeEvent } from "@mui/material";
import { useState } from "react"



export const useInput = (initValue: string, select?: boolean, sort?: boolean) => {

    const validate = (value: string) => value.replace(/['"«»]/g, '')

    const [value, setValue] = useState(initValue)

    if(select && !sort) {

        const onChange = (event: SelectChangeEvent) => {
            setValue(validate(event.target.value as string))
        }


        return {
            value, onChange
        }
    } else if (sort) {

        const onChange = (event: SelectChangeEvent) => {
            setValue(validate(event.target.value as string))
        }

        const remove = () => setValue('')

        return {
            value, onChange, remove
        }
    }else {
        const onChange = (e: any) => {
            setValue(validate(e.currentTarget.value))
        }
    
        return {
            value, onChange
        }
    }
    


    
}