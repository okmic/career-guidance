import { useState } from "react"


export const useCheck = (initValue: boolean) => {

    const [value, setValue] = useState(initValue)

    const onClick = () => {
        setValue(!value)
    }

    return {
        value, onClick
    }
    
}