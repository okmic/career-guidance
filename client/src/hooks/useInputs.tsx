import { SelectChangeEvent } from "@mui/material";
import { useState } from "react"


export const useInput = (initValue: string, select?: boolean) => {

    const [value, setValue] = useState(initValue)

    if(select) {

        const onChange = (event: SelectChangeEvent) => {
            setValue(event.target.value as string)
        }

        return {
            value, onChange
        }
    }  else {
        const onChange = (e: any) => {
            setValue(e.currentTarget.value)
        }
    
        return {
            value, onChange
        }
    }
    


    
}