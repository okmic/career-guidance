import { memo } from "react"
import { ObjType } from "../../types"

const Table = ({id, adress, day, time, email, phone, fio, fioDir, school}: ObjType) => <tr>
            <td>{id}</td>
            <td>{school}</td>
            <td>{adress}</td>
            <td>{day} {time}</td>
        </tr>
        
export default memo(Table)