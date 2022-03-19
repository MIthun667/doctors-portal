import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const Appoinments = ({ date }) => {

    const { user } = useAuth();
    const [appoinments, setAppoinments] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`
        axios.get(url)
            .then(response => response.json())
            .then(data => setAppoinments(data));
    }, [date]);
    return (
        <div>
            <h2>Appointments: {appoinments.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{  }} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appoinments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Appoinments