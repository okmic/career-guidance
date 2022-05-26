import { useState } from "react"


export const useInput = (initValue: string | number | boolean) => {

    const [value, setValue] = useState(initValue)

    const onChange = (e: any) => {
        setValue(e.currentTarget.value)
    }

    return {
        value, onChange
    }
    
}