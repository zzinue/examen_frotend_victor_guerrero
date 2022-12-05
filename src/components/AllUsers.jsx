import { TableCell, TableHead, TableRow, Table, TableBody, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { deleteUser, getUsers } from '../service/api'

const AllUsers = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    let response = await getUsers()
    setUsers(response.data)
  }

  const deleteUSerDetails=async(id)=>{
await deleteUser(id)
getAllUsers()
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Password</TableCell>

        </TableRow>

      </TableHead>
      <TableBody>
        {
          users.map(user => (
            <TableRow key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.password}</TableCell>
              <TableCell>
                <Button variant='contained'style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Editar</Button>
                <Button variant='contained' color="secondary" onClick={()=>deleteUSerDetails(user._id)}>Borrar</Button>

              </TableCell>

            </TableRow>
          ))}
      </TableBody>

    </Table>
  )
}

export default AllUsers