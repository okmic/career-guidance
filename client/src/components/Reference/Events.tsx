import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
//@ts-ignore
import { Box } from "@mui/system"
import { memo, useEffect, useState } from "react"
import { urlApi } from "../../config"
import { useHttp } from "../../hooks/http.hook"
import { EventsType } from "../../types"


export type ParamInputType = {
    params: {
        onChange: (c: any) => void
        value: string
    }
    mini?: boolean
}

export default memo(function Events ({params, mini}: ParamInputType) {
    
    const {request} = useHttp()
    const [events, setEvents] = useState([])


    const getEvents = () => {
        try {
            request(urlApi + '/events', 'GET').then((res) => setEvents(res.values))
        } catch (e) {
            console.error(e)
        }
      }

    useEffect(() => getEvents(), [])


    return <>
        {events &&
            <Box sx={!mini ? { minWidth: "50vw" } : {maxWidth: "130px",backgroundColor: '#fff'}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{!mini ? "Вид" : ''}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label={!mini ? "Вид" : ''}
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