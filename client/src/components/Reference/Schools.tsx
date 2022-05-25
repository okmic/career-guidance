import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { Box } from "@mui/system"
import { memo, useEffect, useState } from "react"
import { useHttp } from "../../hooks/http.hook"
import { SchoolType } from "../../types"


export default memo(function Schools () {
    
    const {request} = useHttp()
    const [schools, setSchools] = useState([])

    const handleChange = (event: SelectChangeEvent) => {
        setName(event.target.value as string);
    }

    const [name, setName] = useState('')

    const getSchools = () => {
        try {
            request('http://localhost:5000/schools', 'GET').then((res) => setSchools(res.values))
        } catch (e) {
            console.error(e)
        }
      }

    useEffect(() => getSchools(), [])


    return <>
        {schools &&
            <Box sx={{ minWidth: "50vw" }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Заведения</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={name}
                        label="Заведения"
                        onChange={handleChange}
                    >
                        {
                            schools.map((item: SchoolType) => <MenuItem key={item.id} value={item.school}>{item.school}</MenuItem>)
                        }

                    </Select>
                </FormControl>
            </Box>
        }

    </>
})