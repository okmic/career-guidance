import React, { useContext, useEffect, useState } from 'react';
import styles from './list.module.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataContext } from '../../context/dataContext';
import { DataType, ObjType } from '../../types';
import { Check } from '../Inputs';
import { useHttp } from '../../hooks/http.hook'
import { SortContext } from '../../context/sortContext';
import Schools from '../Reference/Schools';
import { useInput } from '../../hooks/useInputs';
import Employees from '../Reference/Employees';
import Events from '../Reference/Events';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function List() {

    const sorts = useContext(SortContext)
    const { data } = useContext(DataContext)
    const [rows, setRows] = useState([] as DataType | null)

    const schools = useInput('', true, true)
    const empls = useInput('', true, true)
    const events = useInput('', true, true)

    useEffect(() => {
        schools.remove && schools.remove()
        events.remove && events.remove()
        empls.remove && empls.remove()
    },[sorts.reset])

    useEffect(() => {
        if(schools.value) {
            sorts.sortSchools(data, sorts.setData, schools.value)
            events.remove && events.remove()
            empls.remove && empls.remove()
        }
    }, [schools.value])

    useEffect(() => {
        if(empls.value) {
            sorts.sortEmpls(data, sorts.setData, empls.value)
            events.remove && events.remove()
            schools.remove && schools.remove()
        }
    }, [empls.value])

    useEffect(() => {
        if(events.value) {
            sorts.sortEvents(data, sorts.setData, events.value)
            schools.remove && schools.remove()
            empls.remove && empls.remove()
        }
    }, [events.value])


    const { request } = useHttp()



    const getUpdateSend = (id: number, was: 0 | 1) => {
        try {
            request('http://localhost:5000/update', 'POST', { id, was }).then((res) => {
                if (res.status === 200) {
                    setRows(rows!.map((item) => item.id === id ? ({
                        id: item.id,
                        school: item.school,
                        fio: item.fio,
                        day: item.day,
                        time: item.time,
                        adress: item.adress,
                        fioDir: item.fioDir,
                        contacts: item.contacts,
                        event: item.event,
                        was: was
                    }): ({...item})))
                } else alert('Ошибка запроса')
            })
        } catch (e) {
            console.error(e)
        }
    }


    React.useEffect(() => {
        setRows(data)

    }, [data])

    return <div className={styles.wrapper}>
        {data 
        ? <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700}} aria-label="customized table">
            <TableHead>
                <TableRow>
                    <StyledTableCell  onClick={() => sorts.sortId(data, sorts.setData)} align="center">По номеру</StyledTableCell>
                    <StyledTableCell align="center"><Schools mini={true} params={({value: schools.value, onChange: schools.onChange})} /></StyledTableCell>
                    <StyledTableCell align="center"><Employees params={({value: empls.value, onChange: empls.onChange})} mini={true}/></StyledTableCell>
                    <StyledTableCell onClick={() => sorts.sortDate(data, sorts.setData)} align="center">По дате</StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center"><Events params={({value: events.value, onChange: events.onChange})} mini={true} /></StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                </TableRow>
            </TableHead>
            <TableHead>
                <TableRow>
                    <StyledTableCell align="center">№ п/п</StyledTableCell>
                    <StyledTableCell align="center">Учреждения</StyledTableCell>
                    <StyledTableCell align="center">ФИО</StyledTableCell>
                    <StyledTableCell align="center">Дата</StyledTableCell>
                    <StyledTableCell align="center">Адрес</StyledTableCell>
                    <StyledTableCell align="center">ФИО директора </StyledTableCell>
                    <StyledTableCell align="center">Контакты</StyledTableCell>
                    <StyledTableCell align="center">Вид</StyledTableCell>
                    <StyledTableCell align="center">Состояние</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows && rows.map((row: ObjType) => (
                    <StyledTableRow key={row.id} style={row.was === 1 ? { textDecoration: 'line-through' } : {}}>
                        <StyledTableCell align="center">{row.id}</StyledTableCell>
                        <StyledTableCell align="center">{row.school}</StyledTableCell>
                        <StyledTableCell align="center">{row.fio}</StyledTableCell>
                        <StyledTableCell align="center">{row.day + " " + row.time}</StyledTableCell>
                        <StyledTableCell align="center">{row.adress}</StyledTableCell>
                        <StyledTableCell align="center">{row.fioDir}</StyledTableCell>
                        <StyledTableCell align="center">{row.contacts}</StyledTableCell>
                        <StyledTableCell align="center">{row.event}</StyledTableCell>
                        <StyledTableCell align="center">
                            <Check
                                id={row.id}
                                was={row.was}
                                getUpdateSend={getUpdateSend}
                            />
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    : <h1 style={{fontSize: '50px', minHeight:'50vh'}}>Загрузка...</h1>    
}
    </div>
}