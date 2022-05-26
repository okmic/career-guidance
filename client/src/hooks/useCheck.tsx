import { useState } from "react"


export const useCheck = (initValue: boolean) => {

    const [value, setValue] = useState(initValue)

    const onChange = (e: any) => {
        setValue(e.target.value)
    }

    return {
        value, onChange
    }
    
}