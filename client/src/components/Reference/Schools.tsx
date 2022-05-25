import { memo, useEffect, useState } from "react"
import { useHttp } from "../../hooks/http.hook"


export default memo(function Schools () {
    
    const {request} = useHttp()
    const [schools, setSchools] = useState([])

    const getSchools = () => {
        try {
            request('http://localhost:5000/schools', 'GET').then((res) => setSchools(res.values))
        } catch (e) {
            console.error(e)
        }
      }
    useEffect(() => getSchools(), [])

    return <div>
        {schools && 
        schools.map((item: any) => <h3 key={item.id}>{item.id}</h3>)
        }
    </div>
})