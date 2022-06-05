import React, { useContext, useState } from 'react';
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

    const { data } = useContext(DataContext)
    const [rows, setRows] = useState([] as DataType | null)

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

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700, overflowX: 'visible'}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">№ п/п</StyledTableCell>
                        <StyledTableCell align="center">Учреждения</StyledTableCell>
                        <StyledTableCell align="center">ФИО</StyledTableCell>
                        <StyledTableCell align="center">Дата</StyledTableCell>
                        <StyledTableCell align="center">Время</StyledTableCell>
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
                            <StyledTableCell align="center">{row.day}</StyledTableCell>
                            <StyledTableCell align="center">{row.time}</StyledTableCell>

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
    )
}