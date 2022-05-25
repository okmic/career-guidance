import { memo, useContext } from "react"
import { DataContext } from "../context/dataContext"


export default memo (function List () {

    const {fakeData} = useContext(DataContext)
    
    return <div>
        {fakeData.map((item) => <div key={item.id}>{item.id}</div>)}
    </div>
})