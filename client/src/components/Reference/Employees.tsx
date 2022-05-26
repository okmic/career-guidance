import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from "@mui/material"
import { Box } from "@mui/system"
import { memo, useEffect, useState } from "react"
import { useHttp } from "../../hooks/http.hook"
import { EmployeesType } from "../../types"


export default memo(function Employees() {

    const { request } = useHttp()
    const [employees, setEmployees] = useState([])

    const [name, setName] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setName(event.target.value as string);
    }

    const getEmployees = () => {
        try {
            request('http://localhost:5000/employees', 'GET').then((res) => setEmployees(res.values))
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => getEmployees(), [])

    return <>
        {employees &&
            <Box sx={{ minWidth: "50vw", margin: '1em 0' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">ФИО</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={name}
                        label="ФИО"
                        onChange={handleChange}
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



