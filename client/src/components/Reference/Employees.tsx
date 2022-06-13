import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
//@ts-ignore
import { Box } from "@mui/system"
import { memo, useEffect, useState } from "react"
import { urlApi } from "../../config"
import { useHttp } from "../../hooks/http.hook"
import { EmployeesType } from "../../types"

export type ParamInputType = {
    params: {
        onChange: (c: any) => void
        value: string
    }
    mini?: boolean
}

export default memo(function Employees({params, mini}:  ParamInputType) {

    const { request } = useHttp()
    const [employees, setEmployees] = useState([])


    const getEmployees = () => {
        try {
            request(urlApi + '/employees', 'GET').then((res) => setEmployees(res.values))
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => getEmployees(), [])

    return <>
        {employees &&
            <Box sx={!mini ? { minWidth: "50vw" } : {maxWidth: "130px",backgroundColor: '#fff'}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{!mini ? "ФИО" : ''}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label={!mini ? "ФИО" : ''}
                        value={params.value}
                        onChange={params.onChange}
                    >
                        {
                            employees.map((item: EmployeesType) => <MenuItem key={item.id} value={item.fio}>{item.fio}</MenuItem>)
                        }

                    </Select>
                </FormControl>
            </Box>
        }

    </>
})


