import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
//@ts-ignore
import { Box } from "@mui/system"
import { memo, useEffect, useState } from "react"
import { useHttp } from "../../hooks/http.hook"
import { SchoolType } from "../../types"

export type ParamInputType = {
    params: {
        onChange: (c: any) => void
        value: string
    }
    mini?: boolean
}

export default memo(function Schools ({params, mini}: ParamInputType) {
    
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


    return <>
        {schools &&
            <Box sx={!mini ? { minWidth: "50vw" } : {maxWidth: "130px",backgroundColor: '#fff'}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{!mini ? "Заведения" : ''}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label={ "Заведения" }
                        {...params}
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