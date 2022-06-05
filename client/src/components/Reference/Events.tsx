import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
//@ts-ignore
import { Box } from "@mui/system"
import { memo, useEffect, useState } from "react"
import { useHttp } from "../../hooks/http.hook"
import { EventsType } from "../../types"
import { ParamInputType } from "./Employees"


export default memo(function Events ({params}: ParamInputType) {
    
    const {request} = useHttp()
    const [events, setEvents] = useState([])


    const getEvents = () => {
        try {
            request('http://localhost:5000/events', 'GET').then((res) => setEvents(res.values))
        } catch (e) {
            console.error(e)
        }
      }

    useEffect(() => getEvents(), [])


    return <>
        {events &&
            <Box sx={{ minWidth: "50vw" }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Вид</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Заведения"
                        {...params}
                    >
                        {
                            events.map((item: EventsType) => <MenuItem key={item.id} value={item.event}>{item.event}</MenuItem>)
                        }

                    </Select>
                </FormControl>
            </Box>
        }

    </>
})