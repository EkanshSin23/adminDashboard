import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tables
    = () => {
        const rows = [
            {
                id: 1143152,
                product: "Acer Nitro 5",
                img: "https://m.media-amazon.com/images/I/71g9uJNayaL._SX679_.jpg",
                customer: "John Smith",
                date: "1 March",
                amount: 785,
                method: "Cash On Delivery",
                status: "Pending"
            },
            {
                id: 1143153,
                product: "Acer Nitro 4",
                img: "https://m.media-amazon.com/images/I/71g9uJNayaL._SX679_.jpg",
                customer: "John Smith",
                date: "1 March",
                amount: 785,
                method: "Cash On Delivery",
                status: "Approved"
            },
            {
                id: 1143154,
                product: "Acer Nitro 3",
                img: "https://m.media-amazon.com/images/I/71g9uJNayaL._SX679_.jpg",
                customer: "John Smith",
                date: "1 March",
                amount: 785,
                method: "Cash On Delivery",
                status: "Approved"
            },
            {
                id: 1143155,
                product: "Acer Nitro 2",
                img: "https://m.media-amazon.com/images/I/71g9uJNayaL._SX679_.jpg",
                customer: "John Smith",
                date: "1 March",
                amount: 785,
                method: "Cash On Delivery",
                status: "Approved"
            },
            {
                id: 1143156,
                product: "Acer Nitro 1",
                img: "https://m.media-amazon.com/images/I/71g9uJNayaL._SX679_.jpg",
                customer: "John Smith",
                date: "1 March",
                amount: 785,
                method: "Cash On Delivery",
                status: "Pending"
            },
        ]
        return (
            <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='tablecell'>Tracking Id</TableCell>
                            <TableCell className='tablecell'>   Product</TableCell>
                            <TableCell className='tablecell'>Customer</TableCell>
                            <TableCell className='tablecell'>Date</TableCell>
                            <TableCell className='tablecell'>Amount</TableCell>
                            <TableCell className='tablecell'>Payment Method</TableCell>
                            <TableCell className='tablecell'>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}

                            >
                                <TableCell className="tablecell" component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell className="tablecell">
                                    <div className="imgWrapper">
                                        <img src={row.img} alt="" className="image" />
                                        {row.product}
                                    </div>
                                </TableCell>
                                <TableCell className="tablecell">{row.customer}</TableCell>
                                <TableCell className="tablecell">{row.date}</TableCell>
                                <TableCell className="tablecell">{row.amount}</TableCell>
                                <TableCell className="tablecell">{row.method}</TableCell>
                                <TableCell className="tablecell"><span className={`status ${row.status}`}>{row.status}</span></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

export default Tables
