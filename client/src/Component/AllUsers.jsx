import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 70px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: white;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px;
        color: white;
    }
`;

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user._id}</TableCell> 
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="outlined" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> 
                            <Button variant="outlined" color="error" onClick={() => deleteUserData(user._id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;