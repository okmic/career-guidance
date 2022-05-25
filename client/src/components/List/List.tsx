import { memo, useContext } from "react"
import { DataContext } from "../../context/dataContext"
import Table from "./Table"


export default memo (function List () {

    const {data} = useContext(DataContext)
    
    return <div>
        <table>
    <tbody>
        <tr>
            <td>Column 1</td>
            <td>Column 2</td>
            <td>Column 3</td>
            <td>Column 4</td>
        </tr>
        {data &&
        data.map((item) => <Table 
        key={item.id} 
        id={item.id}
        adress={item.adress}
        day={item.day}
        time={item.time}
        phone={item.phone}
        email={item.email}
        fio={item.fio}
        fioDir={item.fioDir}
        school={item.school}
        />)}
    </tbody>
</table>
    </div>
})