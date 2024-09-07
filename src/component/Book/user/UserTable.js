import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModalUpdateUser from "./Modal.updateUser";
import ModalDeleteUser from "./Modal.deleteUser";
import ModalSelectAvatar from "./Modal.selectAvatar";

export default function UserTable(props) {
    const { rows } = props;
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>STT</TableCell>
                        <TableCell>ID</TableCell>
                        <TableCell>Avatar</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Mail</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={row._id}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {index+1}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row._id}
                            </TableCell>
                            <TableCell>
                                <ModalSelectAvatar
                                    data_detail={row}
                                    avatar={`http://localhost:8080/images/avatar/${row.avatar}`}
                                ></ModalSelectAvatar>
                            </TableCell>
                            <TableCell align="right">{row.fullName}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.phone}</TableCell>
                            <TableCell align="right">
                                <ModalUpdateUser
                                    fetchData={props.fetchData}
                                    _id={row._id}
                                    avatar={row.avatar}
                                    name={row.fullName}
                                    email={row.email}
                                    phone={row.phone}
                                ></ModalUpdateUser>
                                <ModalDeleteUser
                                    fetchData={props.fetchData}
                                    _id={row._id}
                                    name={row.fullName}
                                ></ModalDeleteUser>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
